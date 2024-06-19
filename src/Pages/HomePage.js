import React, { useState } from 'react'
import HeaderRoutine from '../Components/HeaderRoutine'
import MaincontentSection from '../Components/MaincontentSection'
import FooterTop from '../Components/FooterTop'
import FooterBottom from '../Components/FooterBottom'
// import './HomePage'
import './style.css'
import NewRoutine from './NewRoutine'


const HomePage = () => {
const [flag,setFlag]= useState(true);
const handleNewRoutine=()=>{
    setFlag(!flag);
}
  return (
   
    <section id="full-content"> 
        <HeaderRoutine />
        <MaincontentSection />
        
        {flag ? (<button style={{display:'block'}} onClick={handleNewRoutine}>Show less</button>) : (<button style={{display:'block'}} onClick={handleNewRoutine}>Display New Routine</button>)}
        {flag ? <NewRoutine />: " "}
           
        <FooterTop />
        <FooterBottom />
    </section>
  )
}

export default HomePage
