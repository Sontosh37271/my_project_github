import React from 'react'
import First_year from './1st_year'
import Second_year from './SecondYear'
import Third_year from './ThirdYear'
import Fourth_year from './FourthYear'

const MaincontentSection = () => {
  return (
<>
    <div className='mainContent'>
        <div id="header1 ">
                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" id="day" value="Day" disabled=""/>

                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="day" value="SUN" disabled=""/>
                <input style={{marginTop: '35px'}}  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="day" value="MON" disabled=""/>
                <input style={{marginTop: '35px'}}  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="day" value="TUE" disabled=""/>
                <input style={{marginTop: '35px'}}  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="day" value="WED" disabled=""/>
                <input style={{marginTop: '35px'}}  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="day" value="THU" disabled=""/>
        </div>
        <div id="header2">
                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" id="year" value="Year" disabled=""/>

                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="year" id="1stsu" value="1st Year Odd" disabled=""/>
                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="year" id="2ndsu" value="2nd Year Even" disabled=""/>
                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="year" id="3rdsu" value="3rd Year Even" disabled=""/>
                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="year" id="4thsu" value="4th Year Even" disabled=""/>

                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="year topMargin" id="1stmo" value="1st Year Odd" disabled="" style={{marginTop:'45px'}}/>
                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="year" id="2ndmo" value="2nd Year Even" disabled=""/>
                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="year" id="3rdmo" value="3rd Year Even" disabled=""/>
                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="year" id="4thmo" value="4th Year Even" disabled=""/>

                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="year topMargin" id="1sttu" value="1st Year Odd" disabled="" style={{marginTop:'45px'}}/>
                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="year" id="2ndtu" value="2nd Year Even" disabled=""/>
                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="year" id="3rdtu" value="3rd Year Even" disabled=""/>
                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="year" id="4thtu" value="4th Year Even" disabled=""/>

                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="year topMargin" id="1stwe" value="1st Year Odd" disabled="" style={{marginTop:'45px'}}/>
                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="year" id="2ndwe" value="2nd Year Even" disabled=""/>
                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="year" id="3rdwe" value="3rd Year Even" disabled=""/>
                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="year" id="4thwe" value="4th Year Even" disabled=""/>

                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="year topMargin" id="1stth" value="1st Year Odd" disabled="" style={{marginTop:'45px'}}/>
                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="year" id="2ndth" value="2nd Year Even" disabled=""/>
                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="year" id="3rdth" value="3rd Year Even" disabled=""/>
                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="year" id="4thth" value="4th Year Even" disabled=""/>
            </div>
            <div id="header3">
                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" id="time1" value="9:05 AM - 10:00 AM" disabled=""/>
                <First_year />
                <Second_year />
                <Third_year />
                <Fourth_year />

               <div style={{marginTop:'5px'}}><First_year /> </div> 
                <Second_year />
                <Third_year />
                <Fourth_year />

                <div style={{marginTop:'5px'}}><First_year /> </div>
                <Second_year />
                <Third_year />
                <Fourth_year />

                <div style={{marginTop:'5px'}}><First_year /> </div>
                <Second_year />
                <Third_year />
                <Fourth_year />

                <div style={{marginTop:'5px'}}><First_year /> </div>
                <Second_year />
                <Third_year />
                <Fourth_year />

            </div>
            <div id="header4">
                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" id="time2" value="10:05 AM - 11:00 AM" disabled=""/>
                <First_year />
                <Second_year />
                <Third_year />
                <Fourth_year />

                <div style={{marginTop:'5px'}}><First_year /> </div>
                <Second_year />
                <Third_year />
                <Fourth_year />

                <div style={{marginTop:'5px'}}><First_year /> </div>
                <Second_year />
                <Third_year />
                <Fourth_year />

                <div style={{marginTop:'5px'}}><First_year /> </div>
                <Second_year />
                <Third_year />
                <Fourth_year />

                <div style={{marginTop:'5px'}}><First_year /> </div>
                <Second_year />
                <Third_year />
                <Fourth_year />
            </div>
            <div id="header5">
                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" id="time3" value="11:05 AM - 12:00 AM" disabled=""/>
                <First_year />
                <Second_year />
                <Third_year />
                <Fourth_year />

                <div style={{marginTop:'5px'}}><First_year /> </div>
                <Second_year />
                <Third_year />
                <Fourth_year />

                <div style={{marginTop:'5px'}}><First_year /> </div>
                <Second_year />
                <Third_year />
                <Fourth_year />

                <div style={{marginTop:'5px'}}><First_year /> </div>
                <Second_year />
                <Third_year />
                <Fourth_year />

                <div style={{marginTop:'5px'}}><First_year /> </div>
                <Second_year />
                <Third_year />
                <Fourth_year />
            </div>
            <div className="break">
                <div className="up1">
                    <p style={{marginTop:'220px' }}>BREAK</p>
                    <p style={{marginTop:'200px' }}>PRAYER</p>
                    <p style={{marginBottom: '170px', marginTop: '70px'}}>&amp;</p>
                    <p>LUNCH</p>
                </div>
            </div>
            <div id="header6">
                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" id="time4" value="1:05 PM - 2:00 PM" disabled=""/>
                <First_year />
                <Second_year />
                <Third_year />
                <Fourth_year />

                <div style={{marginTop:'5px'}}><First_year /> </div>
                <Second_year />
                <Third_year />
                <Fourth_year />

                <div style={{marginTop:'5px'}}><First_year /> </div>
                <Second_year />
                <Third_year />
                <Fourth_year />

                <div style={{marginTop:'5px'}}><First_year /> </div>
                <Second_year />
                <Third_year />
                <Fourth_year />

            </div>
            <div id="header7" >
                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" id="time5" value="1:05 PM - 4:00 PM" disabled=""/>
                <First_year />
                <Second_year />
                <Third_year />
                <Fourth_year />
                
                <div style={{marginTop:'5px'}}><First_year /> </div>
                <Second_year />
                <Third_year />
                <Fourth_year />

                <div style={{marginTop:'5px'}}><First_year /> </div>
                <Second_year />
                <Third_year />
                <Fourth_year />

                <div style={{marginTop:'5px'}}><First_year /> </div>
                <Second_year />
                <Third_year />
                <Fourth_year />

                <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" name="" className="time5 allInput topMargin programming" value=""
                    placeholder="Assigned for Programming Club"/>
            </div>

    </div>
    
        <div className="updateDiv">
            <button className="updateButton">Update Routine</button>
        </div>
</>

  )
}

export default MaincontentSection
