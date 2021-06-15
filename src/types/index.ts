interface Main {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number
}

interface Weather {
    id: number,
    main: string,
    description: string,
    icon: string,
}

interface Clouds {
    all: number
}

interface Wind {
    speed: number,
    deg: number
}

interface Sys {
    pod: string
}

interface Rain {
    "3h": number
}

export interface Forecast {
    dt: number,
    main: Main,
    weather: Weather[],
    clouds: Clouds,
    wind: Wind,
    visibility: number,
    pop: number,
    sys: Sys,
    dt_txt: string,
    rain?: Rain
}