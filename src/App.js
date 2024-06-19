import React from 'react';
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import First_year from './Components/1st_year.js';
import Second_year from './Components/SecondYear.js';
 import LoginPage from './Components/login_page';
 import RegistrationPage from './Components/registration_page.js';
// import User from './Components/API/User.jsx';
import {day} from './DayStartEnd/Day.js';
import {start_time} from'.//DayStartEnd/StartTime.js';
import {end_time} from './/DayStartEnd/EndTime.js';
import FooterTop from './Components/FooterTop.js';
import FooterBottom from './Components/FooterBottom.js';
// import './Components/MainSectionStyle.css'
import HeaderRoutine from './Components/HeaderRoutine.js';
import MaincontentSection from './Components/MaincontentSection.js';
import Fourth_year from './Components/FourthYear.js';
import HomePage from './Pages/HomePage.js';
import NewRoutine from './Pages/NewRoutine.js';
import Coverpage from './Pages/Coverpage.js';
import NoPage from './Pages/NoPage.js';
import UpdateRoutine from './Pages/UpdateRoutine.js';

//  {/* <RegistrationPage /> */}
//      {/* <User /> */}
//      {/* <LoginPage /> */}
//      {/* <First_year Day={day[0]} start_time={start_time[0]} end_time={end_time[0]}/> */}
//      {/* <Second_year Day={day[0]} start_time={start_time[0]} end_time={end_time[0]}/> */}
//      {/* <FooterTop />
//      <FooterBottom /> */}
//      {/* <HeaderRoutine /> */}
//      {/* <Fourth_year /> */}
//      {/* <MaincontentSection /> */}

//      {/* <HomePage /> */}
//      {/* <NewRoutine /> */}
//      {/* <Coverpage /> */}

function App() {
  return (
    
 
    

     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Coverpage/>}></Route>
      <Route index element={<Coverpage/>}></Route>
      <Route path="Registration" element={<RegistrationPage />}></Route>
      <Route path="Login" element={<LoginPage />}></Route>
      <Route path="UpdateRoutine" element={<UpdateRoutine />}></Route>
      <Route path="*" element={<NoPage />}></Route>
      <Route path="AdminPage" element={<HomePage />}></Route>
     </Routes>
     </BrowserRouter>
     
   
  
         
  );
}

export default App;
