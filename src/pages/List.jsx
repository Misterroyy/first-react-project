import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import SearchItem from '../Components/Searchitem'
import './list.css'
import{format} from "date-fns"
import { useLocation,useNavigate } from 'react-router-dom'
import { DateRange } from 'react-date-range';




const List = () => {
  const navigate = useNavigate()
  const handlesearch = ()=>{
      navigate("/hotel", )}

  const location = useLocation();
  const [destination,setDestination] = useState(location.state.destination)
  const [date,setDate] = useState(location.state.date)
  const [options,setOptions] = useState(location.state.destination)
  const [openDate,setOpenDate] = useState("")
  
  return (
    <div>
    <Navbar/> 
    <Header type="list"/>
    <div className="listContainer">
      <div className="listwrapper">
        <div className="listsearch">
          <h2 className="listTitle">Search</h2>
          <div className="lsItem">
            <label>Destination</label>
            <input  placeholder={destination} type="text" />
          </div>
          <div className="lsItem">
            <label>Check in Date</label>
            <span onClick={()=>setOpenDate(!openDate)}> {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
           {openDate && (
            <DateRange onChange={(item) => setDate([item.selection])} 
             minDate={new Date()}
             ranges={date}
           />
           )}
          </div>
          <div className="lsItem">
            <label htmlFor="">Options</label>
            <div className="lsoptionsItem">
              <span className='lsoptinText'>Min price <small>per night</small></span>
              <input type="number" className="lsoptionInput" />
            </div>
            <div className="lsoptionsItem">
              <span className='lsoptinText'>Max price <small>per night</small></span>
              <input type="number" className="lsoptionInput" />
            </div>

            <div className="lsoptionsItem">
              <span className='lsoptinText'>Adult</span>
              <input type="number" min={1} className="lsoptionInput"  placeholder={options.adult}/>
            </div>

            <div className="lsoptionsItem">
              <span className='lsoptinText'>Children</span>
              <input type="number" min={0} className="lsoptionInput" placeholder={options.children} />
            </div>

            <div className="lsoptionsItem">
              <span className='lsoptinText'>room</span>
              <input type="number" min={1} className="lsoptionInput" placeholder={options.room} />
            </div>
        </div>
        <button onClick={handlesearch}>Search</button>
        </div>
        <div className="listresult">
          <div>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default List