export type TUserInfo = {
    id: string;
    name: string;
    avatar: string;
}

export type TWeatherParams = {
    lat: string;
    lon: string;
}

type Coord$1Type = {
    lon: number
    lat: number
}

type Weather$2Type = {
    id: number
    main: string
    description: string
    icon: string
}

type Main$3Type = {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
}

type Wind$4Type = {
    speed: number
    deg: number
    gust: number
}

type Clouds$5Type = {
    all: number
}

type Sys$6Type = {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
}

export type TWeatherResult = {
    coord: Coord$1Type
    weather: Array<Weather$2Type>
    base: string
    main: Main$3Type
    visibility: number
    wind: Wind$4Type
    clouds: Clouds$5Type
    dt: number
    sys: Sys$6Type
    timezone: number
    id: number
    name: string
    cod: number
}