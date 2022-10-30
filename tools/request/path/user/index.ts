
import { Get } from "../../server";
import { TUserInfo, TWeatherParams } from "./types";

const weather_api_key = '2429d6c34e15ea209483243e93f393da';

export interface Response<T> {
    errNo: string;
    errMsg: string;
    data: T;
}

export type ApiResponse<T> = Promise<[any, Response<T> | undefined]>;

export function getUserInfo<T = TUserInfo>(id: string): ApiResponse<T> {
    return Get<T>("/user/info", { id });
}


export function getWeather<T = TWeatherParams>({ lat, lon }: TWeatherParams): ApiResponse<T> {
    return Get<T>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weather_api_key}`);
}

export const user = {
    getUserInfo,
    getWeather
};