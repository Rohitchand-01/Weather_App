import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className='days'>
          <div className='day day_unselected '>
            Today
          </div>
          <div className='day day_selected'>
            Week
          </div>
        </div>
        <div className='temp_option'>
          <p className='temp_1 temp_unselected'>C</p>
          <p className='temp_1 temp_selected'>F</p>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
