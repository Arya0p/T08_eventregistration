import React from 'react'
import './Navbar.css'
import logo from '../aasan logo.svg'
const Navbar = () => {
  return (
    <div className='nav'>
    <div className="left">
        {/* <h2 className='applogo'>ASAN</h2>
         */}
         <img src={logo} className="App-logo" alt="logo" />
       <ul className="links">
        {/* <li>Home</li> */}
       </ul>
    </div>
    <div className="right">
        <div className="input">
            <input type="text" placeholder='Search for the event' />
        </div>
        Userprofile
    </div>
    </div>
  )
}

export default Navbar