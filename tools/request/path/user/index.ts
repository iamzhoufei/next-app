
import { Get } from "../../server";
import { TUserInfo } from "./types";

export interface Response<T> {
    errNo: string;
    errMsg: string;
    data: T;
}

export type ApiResponse<T> = Promise<[any, Response<T> | undefined]>;

export function getUserInfo<T = TUserInfo>(id: string): ApiResponse<T> {
    return Get<T>("/user/info", { id });
}

export const userApi = {
    getUserInfo,
};