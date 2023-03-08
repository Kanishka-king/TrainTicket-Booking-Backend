import { faCalendarDays, faDollar, faHeadset, faPerson, faTrain, faTrainSubway } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns";
import React , { useState }from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css'
const Header = ({type}) => {
    const[destination,setDestination]=useState(false);
    const[openDate,setOpenDate]=useState(false);
    const [date,setDate]=useState([
        {
            startDate:new Date(),
            endDate:new Date(),
            key:'selection'
        }
    ]);
    const navigate=useNavigate();
    const[openOptions,setOpenOptions]=useState(false);
    const[options,setOptions]=useState({
        adult:1,
        children:0,
        elder:1,
     
    });
    const handleSearch=()=>{
        navigate("/trainss",{state:{destination,date,options}})

    }
    const handleClick=()=>{
        navigate("/getdet")

    }
    const handleUpdate=()=>{
        navigate("/update");
      }
      
          const handleDel=()=>{
              navigate("/deldet")
      
          }
    const handleOption=(name,operation)=>{
        setOptions(prev=>{return{
            ...prev,[name]:operation==="i"?options[name]+1:options[name]-1,
        }})
    }
  return (
    <div className='header'>
        <div className={type==="list"? 'headerContainer listMode':'headerContainer'}>
        <div className='headerList'>
            <div className='headerListItem'>
            <FontAwesomeIcon icon={faTrain} />
            <span>Trains</span>
            
            </div>
            <div className='headerList'>
            <FontAwesomeIcon icon={faHeadset} />
            <span>24/7 Support Service</span>
            </div>
            <div className='headerList'>
            <FontAwesomeIcon icon={faDollar} />
            <span>  Refund Service  </span>
            </div>
            <div className='headerList'>
            <FontAwesomeIcon icon={faTrainSubway} />
            <span>  0% Gateway Fee  </span>
            </div>
           
            <div className='get'>
            <button onClick={handleClick}>  Get My Ticket Details </button>
            </div>
            
            <div className='cancel'>
            
            <button onClick={handleDel}>  Cancel My Ticket Details </button></div><div className='update'>
            <button onClick={handleUpdate}>  Update My Ticket Details </button></div>
           

        </div>
        {type!=="list"&&
            <><h1 className='headerTitle'>Festival Time Off? It's Genius.</h1>
            <p className='headerDesc'>
              Get Reward for your travel - unlock instant  saving of 10% or with a free Booking account
                  </p>
                  <button className='headerBtn'>Sign in / Register</button>
           <div className='headerSearch'>
            <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faTrainSubway} className='headerIcon'/>
            <input type='text' placeholder='Where Your Journey Start' className='headerSearchInput' />
            

            </div>
            <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faTrainSubway} className='headerIcon'/>
            <input type='text' placeholder='Where Your Journey Ends' className='headerSearchInput'onChange={e=>setDestination(e.target.value)}/>
            

            </div>
            <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
            <span onClick={()=>setOpenDate(!openDate)}className='headerSearchText'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")} `}</span>
            {openDate &&<DateRange editableDateInputs={true} onChange={item=>setDate([item.selection])}
            moveRangeOnFirstSelection={false} ranges={date} className='date'/>}
            

            </div>
            <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
            <span onClick={()=>setOpenOptions(!openOptions)}className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.elder} Elder  `} </span>
            {openOptions && <div className="options">
                <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                    <button disabled={options.adult<=1} className="optionCounterButton" onClick={()=>handleOption("adult","d")}>-</button>
                    <span className='optionCounterNumber'>{options.adult}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
                    </div>
                </div>
                <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">

                    <button disabled={options.adult<=0}className="optionCounterButton" onClick={()=>handleOption("children","d")}>-</button>
                    <span className='optionCounterNumber'>{options.children}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
                    </div>
                </div>
                <div className="optionItem">
                    <span className="optionText">Elder</span>
                <div className="optionCounter">
                    <button disabled={options.adult<=1} className="optionCounterButton" onClick={()=>handleOption("elder","d")}>-</button>
                    <span className='optionCounterNumber'>{options.elder}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("elder","i")}>+</button>
                </div></div>
            </div>
             }
            </div>
            <div className='headerSearchItem'>
                <p>{options.adult+options.elder}</p>
                <button className='headerBtn' onClick={handleSearch}>Search</button>
            </div>
            
        </div></>}
        
        </div>
      
    </div>
  )
}

export default Header
