import React from 'react'
import './propertylist.css'

const Properylist = () => {
  return (
    <div className="plist">
        <div className="plistItem">
            <img src="hhh.jpg" alt="hotel" />
            <div className="plistTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="plistItem">
            <img src="apart.jfif" alt="hotel" />
            <div className="plistTitles">
                <h1>Apartments</h1>
                <h2>2023 hotels</h2>
            </div>
        </div>
        <div className="plistItem">
            <img src="rest.jfif" alt="hotel" />
            <div className="plistTitles">
                <h1>Resorts</h1>
                <h2>2001 hotels</h2>
            </div>
        </div>
        <div className="plistItem">
            <img src="vila.jpg" alt="hotel" />
            <div className="plistTitles">
                <h1> Villas</h1>
                <h2>3333 hotels</h2>
            </div>
        </div>
        <div className="plistItem">
            <img src="cava.jfif" alt="hotel" />
            <div className="plistTitles">
                <h1>Cabins</h1>
                <h2>2332 hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default Properylist