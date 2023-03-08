
import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Choice from './pages/choice/Choice';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Trains from './pages/trains/Trains';
import Getdet from './components/getdet/Getdet';
import Delete from './components/delete/Delete';
import Update from './components/update/Update'
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/trainss" element={<List/>}></Route>
    <Route path="/book" element={<Trains/>}></Route>
    <Route path="/choice" element={<Choice/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
  
    <Route path="/getdet" element={<Getdet/>}></Route>
    <Route path="/deldet" element={<Delete/>}></Route>
    <Route path="/update" element={<Update/>}></Route>
  
    
    
    </Routes></BrowserRouter>
  )
}

export default App























































































// import { useState } from 'react';
// import './App.css';

// function RailwayReservationForm() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
  

//   const [date, setDate] = useState('');
//   const [classType, setClassType] = useState('AC');
//   const [numPassengers, setNumPassengers] = useState(1);

//   const [nameError, setNameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [phoneError, setPhoneError] = useState('');
  
  
//   const [dateError, setDateError] = useState('');
//   const [numPassengersError, setNumPassengersError] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // validate inputs
//     let isValid = true;

//     if (!name) {
//       setNameError('Please enter your name');
//       isValid = false;
//     } else {
//       setNameError('');
//     }

//     if (!email) {
//       setEmailError('Please enter your email');
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       setEmailError('Please enter a valid email address');
//       isValid = false;
//     } else {
//       setEmailError('');
//     }

//     if (!phone) {
//       setPhoneError('Please enter your phone number');
//       isValid = false;
//     } else if (!/^[0-9]{10}$/.test(phone)) {
//       setPhoneError('Please enter a valid 10 digit phone number');
//       isValid = false;
//     } else {
//       setPhoneError('');
//     }

    

    

//     if (!date) {
//       setDateError('Please select a travel date');
//       isValid = false;
//     } else {
//       setDateError('');
//     }

//     if (!numPassengers) {
//       setNumPassengersError('Please select the number of passengers');
//       isValid = false;
//     } else {
//       setNumPassengersError('');
//     }

//     if (isValid) {
//       // handle form submission here
//     }
//   };

//   return (
//     <form className="reservation-form" onSubmit={handleSubmit}>
//       <h2>Railway Reservation Form</h2>
//       <label className="form-label" htmlFor="name">
//         Name:
//         <input
//           className="form-input"
//           type="text"
//           id="name"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//           required
//         />
//         {nameError && <span className="error">{nameError}</span>}
//       </label>
//       <label className="form-label" htmlFor="email">
//         Email:
//         <input
//           className="form-input"
//           type="email"
//           id="email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//           required
//         />
//         {emailError && <span className="error">{emailError}</span>
// }</label>
//       <label className="form-label" htmlFor="phone">
//         Phone Number:
//         <input
//           className="form-input"
//           type="tel"
//           id="phone"
//           value={phone}
//           onChange={(event) => setPhone(event.target.value)}
//           required
//         />
//         {phoneError && <span className="error">{phoneError}</span>}
//       </label>
//       <label className="form-label" htmlFor="from-station">
//         From Station:
//         <select
//           className="form-input"
//           id="class-type"
//           value={classType}
//           onChange={(event) => setClassType(event.target.value)}
//         >
//           <option value="Palakad">Palakad</option>
//           <option value="Gujarat">Gujarat</option>
//           <option value="Viktnam">Viktnam</option>
//           <option value="Naagpur">Naagpur</option>
//           <option value="CBE">CBE</option>
//           <option value="Mumbai">Mumbai</option>
//           <option value="Kashmir">Kashmir</option>
//           <option value="Pune">Pune</option>
//           <option value="Morappur">Morappur</option>
//           <option value="Chennai-central">chennai-central</option>
//           <option value="Surat">Surat</option>
//           <option value="Delhi">Delhi</option>
//           <option value="Bombay">Bombay</option>
//           <option value="Elagiri">Elagiri</option>
//           <option value="Assam">Assam</option>
//         </select>
        
//       </label>
//       <label className="form-label" htmlFor="to-station">
//         To Station:
//         <select
//           className="form-input"
//           id="class-type"
//           value={classType}
//           onChange={(event) => setClassType(event.target.value)}
//         >
//           <option value="CBE">CBE</option>
//           <option value="Morappur">Morappur</option>
//           <option value="Chennai-central">chennai-central</option>
//           <option value="Surat">Surat</option>
//           <option value="Delhi">Delhi</option>
//           <option value="Mumbai">Mumbai</option>
//           <option value="Palakad">Palakad</option>
//           <option value="Kashmir">Kashmir</option>
//           <option value="Bombay">Bombay</option>
//           <option value="Elagiri">Elagiri</option>
//           <option value="Gujarat">Gujarat</option>
//           <option value="Pune">Pune</option>
//           <option value="Viktnam">Viktnam</option>
//           <option value="Naagpur">Naagpur</option>
//           <option value="Assam">Assam</option>
//         </select>
        
//       </label>
//       <label className="form-label" htmlFor="travel-date">
//         Travel Date:
//         <input
//           className="form-input"
//           type="date"
//           id="travel-date"
//           value={date}
//           onChange={(event) => setDate(event.target.value)}
//           required
//         />
//         {dateError && <span className="error">{dateError}</span>}
//       </label>
//       <label className="form-label" htmlFor="class-type">
//         Class Type:
//         <select
//           className="form-input"
//           id="class-type"
//           value={classType}
//           onChange={(event) => setClassType(event.target.value)}
//         >
//           <option value="AC">AC</option>
//           <option value="Sleeper">Sleeper</option>
//           <option value="General">General</option>
//         </select>
//       </label>
//       <label className="form-label" htmlFor="num-passengers">
//         Number of Passengers:
//         <input
//           className="form-input"
//           type="number"
//           id="num-passengers"
//           min="1"
//           max="10"
//           value={numPassengers}
//           onChange={(event) => setNumPassengers(parseInt(event.target.value))}
//           required
//         />
//         {numPassengersError && <span className="error">{numPassengersError}</span>}
//       </label><div>
//       <button className="submit-button" type="submit">
//         Submit
//       </button><button onSubmit={<handleSubmit/>} className="sub-button" type="submit">
//         Get My Details
//       </button>
//       </div>
     
//     </form>
//   );
// }
// export default RailwayReservationForm;
