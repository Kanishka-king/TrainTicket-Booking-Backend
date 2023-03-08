import React, {useState, useEffect}from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from './EmployeeService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './trains.css'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
const Trains = () => {
  const [employees, setEmployees] = useState([])

    useEffect(() => {

        getAllEmployees();
    }, [])

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteEmployee = (employeeId) => {
       EmployeeService.deleteEmployee(employeeId).then((response) =>{
        getAllEmployees();

       }).catch(error =>{
           console.log(error);
       })
        
    }
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className='passengerContainer'>
        <div className='passengerWrapper'>
            <h3> <FontAwesomeIcon icon={faCircleCheck} /><span>Thanks For Registering On IRCTC , We Wecome You Back</span></h3>
           </div></div>
    </div>
  )
}

export default Trains
