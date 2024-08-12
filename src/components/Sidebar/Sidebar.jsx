import { CiSearch } from "react-icons/ci";
import sun from "../../assets/sun.svg"
import could from "../../assets/could.svg"
import rain from "../../assets/rain.svg"
import ny from "../../assets/ny.jpg"
import "./Sidebar.css"

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="search">
            <CiSearch />
            <input value={props.search} onChange={(e) => {
              props.setSearch(e.target.value);
            }} onKeyUp={(e) => {
              if (e.key === 'Enter') {
                props.handleSearch();
              }
            }} className="input" type="text" placeholder="Search for places..." />
        </div>
        <img className="sun" src={sun} alt="" />
        <div className="temp">
            {Math.round(props.temp) - 273}°C
        </div>
        <div>
            <p className="day_time">Monday,  12:30 pm</p>
        </div>
      </div>
      <div className="seperator" />
      <div className="bottom">
        <div>
            <div className="weather">
                <img className="could" src={could} alt="" />
                <p className="couldy">couldy</p>
            </div>
            <div className="weather">
                <img className="could" src={rain} alt="" />
                <p className="couldy">rain-30%</p>
            </div>
        </div>
        <img src={ny} className="img" alt="" />
      </div>
    </div>
  )
}

export default Sidebar
