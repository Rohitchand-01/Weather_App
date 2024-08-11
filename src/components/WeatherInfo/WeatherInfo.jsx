import Navbar from "./components/Navbar/Navbar"
import WeatherCard from "./components/WeatherCard/WeatherCard"
import "./WeatherInfo.css"
import sun from "../../assets/sun.svg"
import Highlight from "./components/Highlight/Highlight"

const weekdays = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat"
]

const WeatherInfo = () => {
  return (
    <div className="weather_info">
      <Navbar />
      <div className="weather_card_container">
        {
          weekdays.map((value, idx) => {
            return <WeatherCard
              day={value}
              icon={<img src={sun} />}
              max="20"
              min="10"
            />
          })
        }
      </div>
      <Highlight/>
    </div>
  )
}

export default WeatherInfo
