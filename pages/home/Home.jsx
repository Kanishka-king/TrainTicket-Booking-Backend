import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './home.css';
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured';
import MailList from '../../components/maillist/MailList';
import Footer from '../../footer/Footer';
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className='homeContainer'>
        <Featured></Featured>
       <MailList/>
       <Footer/>
      </div>
      
     
    </div>
  )
}

export default Home
