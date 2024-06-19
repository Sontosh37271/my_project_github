
import React, { useState } from 'react';
// import './SecondYear.css'
import axios from 'axios';
const Second_year = (props) => {

 const {Day,start_time,end_time}=props;

  const [course_code,setCouseCode]=useState('');
  const [course_teacher,setCouseTeacher]=useState('');

  const handleCourseSelection = (event) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedOption = event.target[selectedIndex];
    const [code, teacher] = selectedOption.value.split(' [');
    const Teacher=teacher.substring(0, teacher.length - 1);
   
    setCouseCode(code);
    setCouseTeacher(Teacher);
  //  console.log(Day,start_time,end_time,code,Teacher);
   // Example token (replace with your actual token)
   const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaGFpcm1hbkBnbWFpbC5jb20iLCJpYXQiOjE3MTU1MzcyMzYsImV4cCI6MTcxODEyOTIzNn0.lfkAFKPrVBd48eXomBNuv2Ns5IdqP0fEgxd-79nK4r8';
   axios.post("http://64.23.146.210:8080/api/v1/admin/createRoutine", {
  
    year: 2,
    day: Day, 
    start_time: start_time, 
    end_time: end_time, 
    course_code: code,
    course_name:"Web Engineering",
    course_teacher: Teacher
  }, {
    headers: {
      'Authorization': `Bearer ${token}` // Include token in Authorization header
    }
  })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));
  
  };


  return (
   
      <select id="selectCourse" onChange={handleCourseSelection}>
                    <option value="COURSE">COURSE(2ND YEAR)</option>
                    <option value="ICE 2211 [EH]">ICE 2211 [EH](437)</option>
                    <option value="ICE 2211 [MRH]">ICE 2211 [MRH](437)</option>

                    <option value="LAW 2211 [RY]">LAW 2211 [RY](437)</option>
                    <option value="LAW 2211 [MH]">LAW 2211 [MH](437)</option>

                    <option value="MATH 2111 [MA]">MATH 2111 [MA](437)</option>

                    <option value="ICE 2221 [RUM]">ICE 2221 [RUM]</option>
                    <option value="ICE 2221 [MI]">ICE 2221 [MI]</option>
                   
                    <option value="ICE 2221 [MRH] ">ICE 2221 [MRH] </option>
                    <option value="ICE 2221 [EH] ">ICE 2221 [EH] </option>

                    <option value="ICE 2231 [GR]">ICE 2231 [GR] </option>
                    <option value="ICE 2231 [MI]">ICE 2231 [MI]  </option>
                    
                    <option value="ICE 2222 [ RY, EH, MI]">ICE 2222 [ RY, EH, MI]</option>

                    <option value="ICE 2232 [ DD, LN, GR]">ICE 2232 [ DD, LN, GR]</option>
                    {/* <p>Selected Course Code: {course_code}</p>
                    <p>Selected Course Teacher: {course_teacher}</p> */}
      </select>   
  );
};
export default Second_year;




