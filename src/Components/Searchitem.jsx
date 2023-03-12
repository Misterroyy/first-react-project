import React from 'react'
import { useNavigate } from 'react-router-dom';
import './SearchItem.css'
const SearchItem = () => {
    const navigate = useNavigate()
    const handlesearch = ()=>{
        navigate("/hotel", )}
  return (

    <div className="searchItem">
        <img src="vila.jpg" alt="vila"
        className='villaimg' />
        <div className="sided">
            <h1 className="sideTitle">Tower Street Apartments</h1>
            <span className="sidedistance">500m from center</span>
            <span className="sidetaxi">Free Airpot Taxi always</span>
            <span className="sidesubtitle">
               studio Apartment with fully Air Conditioning
            </span>
            <span className="featuresside">
                Entire STudio . 1 bathroom + 1 full bed 
            </span>
            <span className="cancel">Free Cancelation</span>
            <span className="cancelsub">
                You can canel later,so lock in this great price today!
            </span>
        </div>
        <div className="SideDetails">
            <div className="sideRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="SideDEText">
                <span className="siprice">₹1lPA</span>
                <span className="sitax">Include taxes and fees</span>
                <button onClick={handlesearch} className="sidecheckbtn">See availability</button>
            </div>
        </div>
    </div>
    
  )
}

export default SearchItem