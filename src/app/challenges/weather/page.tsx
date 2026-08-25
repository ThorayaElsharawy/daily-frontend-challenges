"use client"

import React, {useState} from 'react'

type WeatherData = {
    name: string,
    temp: number
    humidity: number,
    wind: number,
    degree: number
}

const WeatherApp = () => {
    const [city, setCity] = useState<string>("");
    const [weather, setWeather] = useState<WeatherData | null>(null);

    const handleClick = async () => {
        if (!city.trim()) return
        try {
            const res = await fetch(
                `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
            );
            const data = await res.json();

            if (!data.results?.length) {
                throw new Error("City not found");
            }

            const {latitude, longitude} = data.results[0];

            const weatherResponse = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&timezone=auto`
            );

            if (!weatherResponse.ok) {
                throw new Error('Failed to fetch results.');
            }

            const {current} = await weatherResponse.json();

            setWeather(() => {
                    return {
                        name: data.results[0].name,
                        temp: current.temperature_2m,
                        humidity: current.relative_humidity_2m,
                        wind: current.wind_speed_10m,
                        degree: current.weather_code
                    }
                }
            );

            setCity('')

        } catch (error) {
            console.log(error);
        }
    }

    function getWeatherImg(code: number): string {
        if ([0, 1].includes(code)) return "clear";
        if ([2, 45, 48].includes(code)) return "mist";
        if (code === 3) return "clouds";
        if (code >= 51 && code <= 57) return "drizzle";
        if (code >= 61 && code <= 67 || code >= 80 && code <= 82) return "rain";
        if (code >= 71 && code <= 77) return "snowy";

        return "Unknown";
    }

    return (
        <div className="bg-[#222] w-screen h-screen">
            <div
                className="max-w-lg bg-gradient-to-r from-[#00feba] to-[#5b548a] mt-24 mx-auto rounded-lg sm:p-10 text-center p-4 py-8">
                <div className="flex items-center justify-between">
                    <input
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        className="bg-[#ebfffc] text-[#555] px-6 h-16 flex-1 mr-4 rounded-4xl text-base outline-0"
                        type="text" placeholder="Enter city name" spellCheck="false"/>
                    <button onClick={handleClick} className="outline-0 bg-[#ebfffc] rounded-full w-14 h-14 text-center cursor-pointer">
                        <img className="w-4 m-auto" src="../imgs/search.png" alt="Search icon"/>
                    </button>
                </div>
                {weather && (
                    <div className="text-center mx-auto text-white">
                        <img className="w-42 mx-auto mt-6" src={`../imgs/${getWeatherImg(weather.degree)}.png`} alt=""/>
                        <h1 className="text-7xl font-bold ">{Math.round(weather.temp)}°c</h1>
                        <h2 className="text-4xl font-semibold mt-4 ">{weather.name}</h2>

                        <div className="flex items-center justify-between px-6 mt-18">
                            <div className="flex items-center text-left">
                                <img className="w-12 mr-2" src="../imgs/humidity.png" alt="humidity"/>
                                <div>
                                    <p className="text-2xl ">{weather.humidity}%</p>
                                    <p className="text-sm">Humidity</p>
                                </div>
                            </div>
                            <div className="flex items-center text-left">
                                <img className="w-12 mr-2" src="../imgs/wind.png" alt="wind"/>
                                <div>
                                    <p className="text-2xl">{weather.wind} km/h</p>
                                    <p className="text-sm">Wind Speed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default WeatherApp;