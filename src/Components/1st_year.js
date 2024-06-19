// import React, { useState } from 'react'

// const First_year = () => {
//   const first_info={
//     year:1,
//     day:"wednesday",
//     start_time:9,
//     end_time:10,
//     course_code:" ",
//     course_teacher:" "
//   }
//   const [firstYear,setFirstYear]=useState(first_info);

//   const handleCourseSelection = (event) => {
//     const selectedIndex = event.target.selectedIndex;
//     const selectedOption = event.target[selectedIndex];
//     const [code, teacher] = selectedOption.value.split(' [');
//     const Teacher=teacher.substring(0, teacher.length - 1);
//     setFirstYear({
//       ...firstYear,[course_code]: code,[course_teacher]:Teacher
//     });
//     console.log(code,Teacher);
//   };
 

// const {year,day,start_time,end_time,course_code,course_teacher}=firstYear;

//   return (
//     <div>
//        <select id="selectCourse" onChange={handleCourseSelection}>
//                     <option value="COURSE">COURSE(1ST YEAR)</option>
//                     <option value="ICE1111 [RY]">ICE1111 [RY](401)</option>
//                     <option value="ICE1111 [MRH]">ICE1111 [MRH](401)</option>
//                     <option value="ICE1121 [RH]">ICE1121 [RH](403)</option>
//                     <option value="ICE1121 [HK]">ICE1121 [HK](403)</option>

//                     <option value="PHY1191 [LN]">PHY1191 [LN](403)</option>
//                     <option value="PHY1191 [FA-2]">PHY1191 [FA-2](403)</option>
//                     <option value="CHEM1111 [SMMA]">CHEM1111 [SMMA](403)</option>
                   
//                     <option value="MATH1111 [MZA]">MATH1111 [MZA](403)</option>
                    
//                     <option value="ICE1122 [RH, HK, MH, GR]">ICE1122 [RH, HK, MH, GR](233)"</option>
//                     <option value="PHY1192 [AMAR, SR, LN, FA-2]">PHY1192 [AMAR, SR, LN, FA-2]</option>
//          </select>
//          <p>Selected Course Code: {course_code}</p>
//          <p>Selected Course Teacher: {course_teacher}</p>
         
//     </div>
//   )
// }

// export default First_year;


import React, { useState } from 'react';
import axios from 'axios';
const First_year = (props) => {

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
  
    year: 1,
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
                    <option value="COURSE">COURSE(1ST YEAR)</option>
                    <option value="ICE1111 [RY]">ICE1111 [RY](401)</option>
                    <option value="ICE1111 [MRH]">ICE1111 [MRH](401)</option>
                    <option value="ICE1121 [RH]">ICE1121 [RH](403)</option>
                    <option value="ICE1121 [HK]">ICE1121 [HK](403)</option>

                    <option value="PHY1191 [LN]">PHY1191 [LN](403)</option>
                    <option value="PHY1191 [FA-2]">PHY1191 [FA-2](403)</option>
                    <option value="CHEM1111 [SMMA]">CHEM1111 [SMMA](403)</option>
                   
                    <option value="MATH1111 [MZA]">MATH1111 [MZA](403)</option>
                    
                    <option value="ICE1122 [RH, HK, MH, GR]">ICE1122 [RH, HK, MH, GR](233)"</option>
                    <option value="PHY1192 [AMAR, SR, LN, FA-2]">PHY1192 [AMAR, SR, LN, FA-2]</option>
      {/* <p>Selected Course Code: {course_code}</p>
      <p>Selected Course Teacher: {course_teacher}</p> */}

      </select>  
  );
};

export default First_year;
