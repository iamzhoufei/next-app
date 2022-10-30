import axios from "axios";

import {
    handleChangeRequestHeader,
    handleConfigureAuth,
    handleAuthError,
    handleGeneralError,
    handleNetworkError,
} from "./tools";

type Fn = (data: Response<any>) => unknown;

interface IAnyObj {
    [index: string]: unknown;
}

interface Response<T> {
    errNo: string;
    errMsg: string;
    data: T;
}

// 请求拦截
axios.interceptors.request.use((config) => {
    config = handleChangeRequestHeader(config);
    config = handleConfigureAuth(config);
    return config;
});

// 响应拦截
axios.interceptors.response.use(
    (response) => {
        if (response.status !== 200) return Promise.reject(response.data);
        handleAuthError(response.data.errno);
        handleGeneralError(response.data.errno, response.data.errmsg);
        return response;
    },
    (err) => {
        handleNetworkError(err?.response?.status);
        Promise.reject(err?.response);
    }
);

export const Get = <T,>(
    url: string,
    params: IAnyObj = {},
    clearFn?: Fn
): Promise<[any, Response<T> | undefined]> =>
    new Promise((resolve) => {
        axios
            .get(url, { params })
            .then((result) => {
                let res: Response<T>;
                if (clearFn !== undefined) {
                    res = clearFn(result.data) as unknown as Response<T>;
                } else {
                    res = result.data as Response<T>;
                }
                resolve([null, res as Response<T>]);
            })
            .catch((err) => {
                resolve([err, undefined]);
            });
    });

export const Post = <T,>(
    url: string,
    data: IAnyObj,
    params: IAnyObj = {}
): Promise<[any, Response<T> | undefined]> => {
    return new Promise((resolve) => {
        axios
            .post(url, data, { params })
            .then((result) => {
                resolve([null, result.data as Response<T>]);
            })
            .catch((err) => {
                resolve([err, undefined]);
            });
    });
};