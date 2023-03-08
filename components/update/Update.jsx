import React, { useState, useEffect } from "react";
import axios from "axios";
import './update.css'

function Update() {
  const [emp, setEmp] = useState({
    des: "",
    id: "",
    username: "",
    email: "",
    mobno: "",
    traino:"",

  });

  const handleChange = (event) => {
    setEmp({ ...emp, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8080/UpdatePass`, emp).then((res) => {
      console.log(res.data);
      setEmp({ des: "", id: "", username: "",email: "",mobno: "" ,traino:""});
    });
  };

  return (
    <div className="updatecs">
      
      <form onSubmit={handleSubmit}>
      <label>
          DESTINATION:
          <input type="text" className="design" name="des" placeholder="Enter Destination"value={emp.des} onChange={handleChange} />
        </label><br/>
        <label>
          ID:
          <input type="number"className="id" name="id" placeholder="Enter your IRCTC id" value={emp.id} onChange={handleChange} />
        </label><br/>
        <label>
          User Name:
          <input type="text"  className="un" name="username" placeholder="Enter you IRCTC user id" value={emp.username} onChange={handleChange} />
        </label><br/>
        <label>
          User Email:
          <input type="text" className="em" name="email"  placeholder="Enter a Email" value={emp.email} onChange={handleChange} />
        </label><br/>
        <label>
          Mobile Number:
          <input type="number" className="mb" name="mobno" placeholder="Enter mobile number"value={emp.mobno} onChange={handleChange} />
        </label><br/>
        <label>
          Train Number:
          <input type="text" className="tr" name="traino"placeholder="Enter Train number" value={emp.traino} onChange={handleChange} />
        </label><br/>
        
        <button type="submit" className="up">Update</button>
        <h5>* User can Update a details if you ar Booked Passenger</h5>
      </form>
    </div>
  );
}

export default Update;