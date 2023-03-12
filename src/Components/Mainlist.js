import React from 'react'
import './mainlist.css'

const Mainlist = () => {
  return (
    
    <div className="main">
        <h1 className='mainTitle'>Save time , save money!</h1>
        <span className="maindsc">Sign up and we'll send the best deals for you</span>
        <div className="mailInputContainer">
            <input type="text" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Mainlist