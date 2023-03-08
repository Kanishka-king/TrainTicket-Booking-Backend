import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate=useNavigate();
  const handleLogin=()=>{
    navigate("/login")

}
const handleSignup=()=>{
  navigate("/signup")

}

  return (
   
    <div className="navbar">
        <div className="navContainer">
            <span className='logo'>Train ticket booking</span>
            <div className='navItems'>
            <button className="navButton" onClick={handleSignup}>Sign Up</button>
            </div>
            <div className='navItems'>
            <button className="navButton" onClick={handleLogin}>Login</button>
            </div>
            
           
            </div>
      
    </div>
  )
}

export default Navbar
