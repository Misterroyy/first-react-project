import React from 'react'
import './home.css'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Features from '../Components/Features'
import Properylist from '../Components/Properylist'
import Fproperties from '../Components/Fproperties'
import Mainlist from '../Components/Mainlist'
import Footer from '../Components/footer/Footer'
const Home = () => {
  return (
 <div><Navbar/>
 <Header/>
 <div className="homecontainer">
  <Features/>
  <h1 className="homeTitle">Browse by property type</h1>
  <Properylist/>
  <h1 className="homeTitle">Home guests love </h1>
  <Fproperties/>
  <Mainlist/>
  <Footer/>
 </div>
 </div>
  )
}

export default Home