
import React, { useState } from 'react';
// import './FourthYear.css';
import axios from 'axios';
const Fourth_year = (props) => {

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
  
    year: 4,
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

         <select id="selectCourse2">
                    <option value="COURSE">COURSE(4th YEAR)</option>
                    <option value="ICE 4241 [HK]">ICE4241 [HK](440)</option>
                    <option value="ICE 4241 [FA-2]">ICE4241 [FA-2](440)</option>

                    <option value="ICE 4231 [MH]">ICE4231 [MH](440)</option>
                    <option value="ICE 4231 [AI]">ICE4231 [AI](440)</option>

                    <option value="ICE 4241 [LN]">ICE4241 [LN](440)</option>
                    <option value="ICE 4241 [SR]">ICE4241 [SR](440)</option>

                    <option value="ICE 4215 [RY, HH, MI]">ICE 4115 [RY, HH, MI](227)</option>
                    <option value="ICE 4215 [ RY, EH, MI]">ICE 4115[RY,EH,MI](227)</option>
                    {/* <p>Selected Course Code: {course_code}</p>
                      <p>Selected Course Teacher: {course_teacher}</p> */}
         </select>
  )
}

export default Fourth_year;
