import React from 'react'
import "./WeatherCard.css"

const WeatherCard = (props) => {
  const {
    day,
    icon,
    max,
    min
  } = props
  return (
    <div className='card'>
      <div className='day'>{day}</div>
      {icon}
      <div className='max_min'>
        <p className='max'>{max}°</p>
        <p className='min'>{min}°</p>
      </div>
    </div>
  )
}

export default WeatherCard
