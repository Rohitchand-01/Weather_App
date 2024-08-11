import React from 'react'
import "./Highlight.css"
import sun from "../../../../assets/sun.svg"
const Highlight = () => {
    return (
        <div className="highlight_container">
            <p>Today's Highlights</p>
            <div className="highlight_card_container">
                <div className='highlight_card'>
                    <h3>UV Index</h3>
                    <img className='uv' src={sun} alt="" />
                </div>
                <div className='highlight_card'>
                    <h3>Wind Status</h3>
                    <div className='wind'>
                        <h1>7.70</h1>
                        <h4>km/h</h4>
                    </div>
                   <p>WSW</p>
                </div>
                <div className='highlight_card'>
                    <h3>Sunrise & Sunset</h3>
                    <div className='time'>
                    <img src={sun} alt="" />
                        <h3> 6:45 AM</h3>
                        

                    </div>
                </div>
                <div className='highlight_card'>
                    <h3>Humidity</h3>
                    <div className='humidity'>
                        <h2>12</h2>
                        <h4>%</h4>
                    </div>
                    <p>Normal</p>
                    
                </div>
                <div className='highlight_card'>
                    <h3>Visibility</h3>
                    <div className='visibility'>
                        <h2>5.2</h2>
                        <h4>km</h4>
                    </div>
                    <p>Average</p>
                </div>
                <div className='highlight_card'>
                    <h3>Air Quality</h3>
                    <h2 className='air'>105</h2>
                    <p>unhealthy</p>
                </div>
            </div>
        </div>
    )
}

export default Highlight
