import React from 'react'
// import './HeaderRoutine.css'
const HeaderRoutine = () => {
  return (
    <>
      <nav id="navbar">
            <div className="logoDetails">
                <img className="logo" src='icons/logo.png' alt="logo" />
                <h1>University of Rajshahi</h1>
            </div>
            <div>
                <select id="selectYear">
                    <option value="0">Year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                </select>
                <select id="selectTeacher">
                    <option value="Teacher">Teacher</option>
                    <option value="RY">RY</option>
                    <option value="DD">DD</option>
                    <option value="AMAR">AMAR</option>
                    <option value="EH">EH</option>
                    <option value="RH">RH</option>
                    <option value="FA-1">FA-1</option>
                    <option value="HH">HH</option>
                    <option value="HK">HK</option>
                    <option value="SR">SR</option>
                    <option value="MRH">MRH</option>
                    <option value="RUM">RUM</option>
                    <option value="LN">LN</option>
                    <option value="GR">GR</option>
                    <option value="MH">MH</option>
                    <option value="MI">MI</option>
                    <option value="AI">AI</option>
                    <option value="FA-2">FA-2</option>
                    <option value="NF">NF</option>
                    <option value="MA">MA</option>
                    <option value="FZ">FZ</option>
                </select>
                <button className="login">Login</button>
            </div>
        </nav>
        <h2>Dept. of Information &amp; Communication Engineering</h2>
        <div className="headDown">
            <h3 style={{marginRight: '20px'}}>Class Routine</h3>
            <img src="icons/download.png" alt=""/>
        </div>
        <div className="effective">
            <p>Effective from <span className="issueDate">18.06.2024</span></p>
        </div>

        <p style={{textAlign: 'end'}} className="noOfClassP">Number of classes per week, <span className="noOfClass">5</span></p>
    </>
  )
}

export default HeaderRoutine;
