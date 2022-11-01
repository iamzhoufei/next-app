
import { Get } from "../../server";
import { TUserInfo, TWeatherParams } from "./types";


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
    return Get<T>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=zh_cn&appid=${process.env.WEATHER_API_KEY}`);
}

export const user = {
    getUserInfo,
    getWeather
};