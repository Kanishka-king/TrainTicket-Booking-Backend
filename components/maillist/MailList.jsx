import React from 'react'
import './mailList.css'
const MailList = () => {
  return (
    <div className='mail' >
        <h1 className="mailTitle">Save time , SaveMoney</h1>
        <span className='mailDesc'>Sign up and we'll send the best Bookings</span>
        <div className="mailInputContainer">
            <input type="text" placeholder='Enter your Email'/> 
            <button className='subtn'>Subscribe</button>
        </div>

     
    </div> 
  )
}

export default MailList
