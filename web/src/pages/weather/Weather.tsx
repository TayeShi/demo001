import { useState } from "react";
import WeatherHeader from "./components/WeatherHeader"
import WeatherInfo from "./components/WeatherInfo"
import './Weather.scss'

const WeatherPage = () => {

    const [weatherNow, setWeatherNow] = useState<any>();

    return (
        <div className="weather-wrapper">
            <WeatherHeader onFinish={setWeatherNow} />
            <WeatherInfo weather={weatherNow} />
        </div>
    )
}

export default WeatherPage
