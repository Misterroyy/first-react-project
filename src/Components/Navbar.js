import React from 'react' 
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navcontainer">
            <span className='logo'>Booking Helper</span>
            <div className="navItems">
                <button className='navbutton'>Register</button>
                <button className='navbutton'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar