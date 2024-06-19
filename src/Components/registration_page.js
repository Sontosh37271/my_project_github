import React, { useState } from 'react';
import './registration_page.css'; // Import your CSS file\
import axios from 'axios';

const RegistrationPage = () => {

  const regi_info={
           name:'',
            email:'',
            password:'',
            student_id:''
        }
  const [registration,setRegistration]=useState({regi_info});
  const {name,email,password,student_id}=registration;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://64.23.146.210:8080/api/v1/auth/register", registration);
      console.log(response); // handle success response
    } catch (error) {
      console.error('Registration failed:', error.response); // handle error response
    }
  };


  const handleChange=(e)=>{
    setRegistration({...registration,[e.target.name]:e.target.value})
  }
  return (
    <div className="login-container">
      <h2>Registration form</h2>

      <form id="registration-form" onSubmit={handleSubmit}>

        <div className="regi-form">
          <label htmlFor="name">Name</label>
          <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" id="name" name="name" value={name} onChange={handleChange} required />
        </div>


        {/* <div className="regi-form">
          <label htmlFor="id">ID</label>
          <input type="text" id="id" name="id" value={id} onChange={handleChange} required />
        </div> */}

        <div className="regi-form">
          <label htmlFor="email">Email</label>
          <input  style={{fontWeight: 600,textAlign: 'center'}} type="email" id="email" name="email" value={email} onChange={handleChange} required />
        </div>
        
        <div className="regi-form">
          <label htmlFor="password">Password</label>
          <input  style={{fontWeight: 600,textAlign: 'center'}} type="password" id="password" name="password" value={password} onChange={handleChange} required />
        </div>

        <div className="student_id">
          <label htmlFor="student_id">Student_ID</label>
          <input  style={{fontWeight: 600,textAlign: 'center'}} type="student_id" id="student_id" name="student_id" value={student_id} onChange={handleChange} required />
        </div>

        {/* <div className="regi-form">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" value={confirmPassword} onChange={handleChange} required />
        </div>  */}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
