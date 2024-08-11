import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

function App() {
  
  return (
    <div className="main_container">
      <Sidebar />
      <WeatherInfo />
    </div>
  )
}

export default App
