import { useEffect, useState } from "react";
import useWeather from "./api/useWeather";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

function App() {
  const { weatherLoading, getWeather } = useWeather()

  const [searchCity, setSearchCity] = useState("")
  const [weatherInfoState, setWeatherInfoState] = useState({})

  useEffect(()=>{
    getWeather("Sonipat", (response, error) => {
      if (error) {
        console.error(error)
        return 
      }
      console.log(response?.data)
      setWeatherInfoState(response?.data)
    })
  },[])
  return (
    <div className="main_container">
      <Sidebar temp={weatherInfoState?.main?.temp} search={searchCity} setSearch={setSearchCity} handleSearch={() => {
        getWeather(searchCity || "New Delhi", (response, error) => {
          if (error) {
            console.error(error)
            return 
          }
          console.log(response?.data)
          setWeatherInfoState(response?.data)
          setSearchCity("")
        })
      }}/>
      <WeatherInfo />
    </div>
  )
}

export default App
