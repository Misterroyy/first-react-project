import React from 'react'
import './hotel.css'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Mainlist from '../Components/Mainlist'
import Footer from '../Components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Hotel = () => {
    const photos=[
      {
        src: "apart.jfif"
      },
      {
        src: "apart.jfif"

      },{
        src: "apart.jfif"

      },{
        src: "apart.jfif"

      },{
        src: "apart.jfif"

      },{
        src: "apart.jfif"

      }
     
      
    ];
    return (
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className="hotelcontainer">
        <div className="hotelwraper">
          <button className="booknow">
            Reserve or book Now!
          </button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hoteladdress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Boring road patna Bihar</span>
          </div>
          <span className="hoteldistance">
            Excellent location - 500m from center
          </span>

          <span className="hotelpricehigh">
            Book A stay over ₹90k at this property and get a free airpot taxi
          </span>
          <div className="hotelimage">
            {photos.map(photo=>(
              <div className="hotelimagewrapper">
               <img src={photo.src} alt="hotel" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hoteldetails">
            <div className="hoteldetailText">
              <h1 className='hotelTitle'>
                Stay in the heart of india!
              </h1>
              <p className="hoteldesc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et sapien tempora porro aliquam tempore quibusdam sunt ea, quos, delectus, fugiat at! Non sit similique hic tempore laudantium eum! Tempore vero molestias nemo distinctio dignissimos error illum, nisi velit alias porro suscipit eius voluptates esse quibusdam consequatur aut ab temporibus  Et sapien tempora porro aliquam tempore quibusdam sunt ea, quos, ipsam exercitationem rem corporis?
              </p>
            </div>
            <div className="hoteldetailPrice">
              <h2>Perfect for a 9-night stay!</h2>
              <span>Located in the real heart of krakow ,this property has an excellent location score of 9.5!</span>
            <h3>
              <strong>900k</strong>(10 nights)
            </h3>
            <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <Mainlist/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel