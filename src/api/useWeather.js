import { useState } from "react";
import axios from "axios";

const useWeather = () => {
    const [weatherLoading, setWeatherLoading] = useState(false);

    const getWeather = async (city = "New Delhi", callback) => {
        setWeatherLoading(true);
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`)
           if (![200,201].includes(response?.status || response?.data?.status)) {
            console.log("Error getting weather");
           }
           callback(response, null)
        } catch (error) {
            callback(null, error)
        } finally {
            console.log("get weather request completed")
            setWeatherLoading(false);
        }
    }

    return {
        weatherLoading,
        getWeather,
    }
}

export default useWeather;