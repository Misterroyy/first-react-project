import React from 'react'
import './features.css'

const features = () => {
    //
  return (
   <div className="features">
    <div className="featuresItem">
        <img src="dedl.jpg " alt="hotel" />
        <div className="featuresTitle">
            <h2>Delhi</h2>
            <h3>123 properties</h3>
        </div>
    </div>
    <div className="featuresItem">
        <img src="noida.webp" alt="hotel" />
        <div className="featuresTitle">
            <h2>Uttar Pradesh</h2>
            <h3>12 properties</h3>
        </div>
    </div>
    <div className="featuresItem">
        <img src="Bihar.jpg " alt="hotel" />
        <div className="featuresTitle">
            <h2>Bihar</h2>
            <h3>30 properties</h3>
        </div>
    </div>
   </div>
  )
}

export default features