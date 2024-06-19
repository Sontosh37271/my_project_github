import React from 'react'

const SelectYearandTeacher = () => {
  return (
    <div>
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
                    <option value="MZA">MZA</option>
                    <option value="NF">NF</option>
                    <option value="MA">MA</option>
                </select>
                <button class="login">Login</button>
            </div>
    </div>
  )
}

export default SelectYearandTeacher
