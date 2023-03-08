import React from 'react'
import './featured.css';
const Featured = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img src="https://www.livechennai.com/businesslistings/News_photo/train1212172.jpg"height="400px" alt="jj" className='featuredImg'></img>
            <div className='featuredTitles'>
                <h1>Kovai Express</h1>
                <h2>10.10 AM</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src="https://www.vlaky.net/upload/galeria/003761/087354.jpg" height="400px"alt="jj"className='featuredImg' ></img>
            <div className='featuredTitles'>
                <h1> Chennai Express</h1>
                <h2>12.00PM</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src="https://th.bing.com/th/id/OIP.bh-0skZ5cy_y26OyPCk0xQHaEK?pid=ImgDet&rs=1" height="400px" alt="jj"className='featuredImg'></img>
            <div className='featuredTitles'>
                <h1>Jolarpatti Express</h1>
                <h2>09.30 AM</h2>
            </div>
        </div>
        
        
        
      
    </div>
  )
}

export default Featured
