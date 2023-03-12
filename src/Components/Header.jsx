import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBed, faCalendar, faCar, faPerson, faPlane, faTaxi} from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import{format} from "date-fns"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({type}) => {
const [destination, setDestination] = useState(" ");
  const[openDate, setOpenDate]= useState(false)
  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const[openOptions, setOpenOptions]= useState(false);
  const [options,setOptions] = useState({
    adult: 1, 
    children: 0,
    room: 1,
  })
  const navigate = useNavigate()
  const handleoption =(name ,operation) => {
    setOptions((prev) =>{
      return{
        ...prev,
        [name]:operation === "i"? options[name] + 1 : options[name]-1,
      };
    });
  }
  const handlesearch = ()=>{
    navigate("/list",{ state: {destination,date,options }})
  }
  return (
    <div className="header">
        <div className={type === "list" ?"headerlistMode" : "headercontainer"}>
        <div className="headerlist">
           <div className="headerListItem active">
           <FontAwesomeIcon icon={faBed} />
           <span>Stays</span>
           </div>

           <div className="headerListItem">
           <FontAwesomeIcon icon={faPlane} />
           <span>Flights</span>
           </div>
           
           <div className="headerListItem">
           <FontAwesomeIcon icon={faCar} />
           <span>Car rentals</span>
           </div>

           <div className="headerListItem">
           <FontAwesomeIcon icon={faBed} />
           <span>Attraction</span>
           </div>
           <div className="headerListItem">
           <FontAwesomeIcon icon={faTaxi} />
           <span>Airpot taxis</span>
           </div>
        </div>
       { type !== "list" && 
       <> <h1 className="headerTittle">A lifetime of discounts? It's Genius</h1>
        <p className="headerDecr">Get rewarded for your travels unlock your instant savings of 10% or
        more with a free hotel account</p>
        <button className='headerBtn'>Sign in / Register</button>

        <div className="headersearch">
        <div className="headersearchitem">
        <FontAwesomeIcon icon={faBed}  className="headerIcon"/>
        <input type="text" 
        placeholder='where are you going?' 
        className='headersearchInput'
        onChange={e=>setDestination(e.target.value)}
        />
        </div>
        <div className="headersearchitem">
        <FontAwesomeIcon icon={faCalendar}  className="headerIcon"/>
       <span onClick={()=>setOpenDate(!openDate)} className="headersearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
       {openDate && ( 
       <DateRange
        editableDateInputs={true}
        onChange={item => setdate([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={date}
        className='date'
        minDate={new Date()}
        />)}
        </div>
        <div className="headersearchitem">
        <FontAwesomeIcon icon={faPerson}  className="headerIcon"/>
       <span onClick={()=>setOpenOptions(!openOptions)} className="headersearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room`} </span>
       {openOptions && <div className="options">
          <div className="optionItem">
            <span className="optionText">Adult</span>
            <div className="optionCounter">
            <button
             disabled={options.adult <= 1}
            className="optionCounterBtn" onClick={()=>handleoption("adult","d")}>-</button>
            <span className="optionCounterNum">{options.adult}</span>
            <button className="optionCounterBtn"  onClick={()=>handleoption("adult","i")}>+</button>
          </div>
          </div>
          <div className="optionItem">
            <span className="optionText">Children</span>
            <div className="optionCounter">
            <button 
            disabled={options.children <= 0}
            className="optionCounterBtn"  onClick={()=>handleoption("children","d")}>-</button>
            <span className="optionCounterNum">{options.children}</span>
            <button className="optionCounterBtn"  onClick={()=>handleoption("children","i")}>+</button>
          </div>
          </div>
          <div className="optionItem">
            <span className="optionText">room</span>
            <div className="optionCounter">
            <button 
            disabled={options.room <= 1}
            className="optionCounterBtn"  onClick={()=>handleoption("room","d")}>-</button>
            <span className="optionCounterNum">{options.room}</span>
            <button className="optionCounterBtn"  onClick={()=>handleoption("room","i")}>+</button>
          </div>
            </div>
        </div>}
        </div>
        <div className="headersearchitem">
       <button className="headerBtn" onClick={handlesearch}>Search</button>
        </div>
        </div>
        </>}
    </div>
    </div>
  )
}

export default Header