
import axios from "axios";
import React, { Component } from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import './getdet.css'

class Getdet extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/getPass')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (<div>
        <Navbar/>
        <Header type="list"/><div className="bor">
        <div className="fi">
      <table border={0}>
      <thead>
        <tr>
          <th>Distination</th>
          <th>User IRCTC Id</th>
          <th>User Name</th>
          <th>User Email Id</th>
          <th>User Phone Number</th>
          
          <th>Train Number</th>
          
         
          


        </tr>
      </thead>
      <br/>
      <tbody>
        {this.state.data.map(user => (
          <tr >
            
           <td>{user.des}</td>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.mobno}</td>
            <td>{user.traino}</td>
           
            
            
          </tr>
        ))}
      </tbody>
    </table>
   
    </div></div>
    </div>
    );
  }}
  
export default Getdet;