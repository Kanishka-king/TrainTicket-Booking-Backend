 
import React ,{Component}from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'

import './list.css'
import axios from 'axios'
import Searchitem from '../../searchitem/Searchitem'



class List extends Component {
  
  
    constructor(props) {
      super(props);
      this.state = {
          des:'',
          id:'',
          username: '',
          email: '',
          mobno:'',
          traino:'',
          adultv:'',
          childv:'',
          elderv:''
      };
    }
    
    
  
      handleDesChange = (event) => {
      this.setState({ des: event.target.value });
       };
  
       handleIdChange = (event) => {
      this.setState({ id: event.target.value });
        };
       handleUsernameChange = (event) => {
      this.setState({ username: event.target.value });
       };
  
       handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
       };
  
       handleMobnoChange = (event) => {
        this.setState({ mobno: event.target.value });
    };
  
    handleTrainoChange = (event) => {
      this.setState({ traino: event.target.value });
    };
    handleAdultvChange = (event) => {
      this.setState({ adultv: event.target.value });
    };
    handleChildvChange = (event) => {
      this.setState({ childv: event.target.value });
    };
    handleEldervChange = (event) => {
      this.setState({ elderv: event.target.value });
    };
  
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        des: this.state.des,
        id: this.state.id,
        username:this.state.username,
        email: this.state.email,
        mobno: this.state.mobno,
        traino: this.state.traino,
       
        childv: this.state.childv,
        elderv: this.state.elderv,
        
      };
    
      axios.post('http://127.0.0.1:8080/addPass', data)
  };
  
  
render(){

  return (
    <div>
     <Navbar/>
     <Header type="list"/>
     
   
     <div className="listContainer">
      <div className="listWrapper">
      <div className='listSearch'>
      <form  onSubmit={this.handleSubmit}>
      <div className='lsItem'><label >Distination</label>
        <input
          className="s1"
          type="text"
          value={this.state.des}
          onChange={this.handleDesChange} placeholder="Enter Your Destiny"
        /></div>
        <label className="sign-label">IRCTC UserId</label>
        <input
          className="s2"
          type="number"
          value={this.state.id} placeholder="Enter IRCTC User Id"
          onChange={this.handleIdChange}
        />
<br/>

        <label className="sign-label">User Name</label>
        <input
          className="s3"
          type="text"
          value={this.state.username} placeholder="Enter User Name"
          onChange={this.handleUsernameChange}
        />

      <br/>
      
      <label className="sign-label">Email</label>
        <input
          className="s4"
          type="email"
          value={this.state.email} placeholder="Enter Email Id"
          onChange={this.handleEmailChange}
        /><br/>
        
        <label className="sign-label">User Mobile Number</label>
        <input
          className="s4"
          type="mobno"
          value={this.state.mobno} placeholder="Enter User Number"
          onChange={this.handleMobnoChange}
        /><br/>
        
    
        <label className="sign-label">Train no</label>
        <input
          className="s5"
          type="number"
          value={this.state.traino}
          onChange={this.handleTrainoChange} placeholder="Enter a Train Number"
        /><br/>
        
        <label className="sign-label" placeholder='Enter number of child'>Number of Child</label>
        <input
          className="sign-input"
          type="number"
          value={this.state.childv}
          onChange={this.handleChildvChange}
        /><br/>
        <label className="sign-label" placeholder='Number of Elder'> Number of Elder</label>
        <input
          className="sign-input"
          type="number"
          value={this.state.elderv}
          onChange={this.handleEldervChange}
        />
        <div className='amt'>
          <h3>Total Passengers are:<span>₹:{this.state.elderv*30+this.state.childv*40}</span></h3>
        </div>
        <button  className="login-button" type="submit" >Book My Train</button>


        </form>
        </div>
        <div className='listResult'>
          <Searchitem/>
          
        </div></div>
</div>
    </div>
  )
}
}

export default List