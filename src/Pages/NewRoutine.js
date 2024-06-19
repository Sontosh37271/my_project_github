import React from 'react'
import HeaderRoutine from '../Components/HeaderRoutine'

const NewRoutine = () => {
  return (
       <div style={{display: 'flex',justifyContent: 'space-between', width:'90%',margin:'5% auto'}}>
        <div id="header1 ">
            <input style={{fontWeight: 600,textAlign: 'center',color:'white',marginRight:'18px', height: '35px',left:'',top:'',backgroundColor:'rgba(223, 24, 24, 0.75)',
              borderRadius:'8px',boxShadow:'2px 2px 6px 1px rgba(228, 79, 82, 0.25)',width:'78px'
            }} type="text" name="" id="day" value="Day" disabled=""/>

            <input style={{fontWeight: 600,textAlign: 'center' ,color:'white',
                  width: '78px',
                  height: '166px',
                  marginTop: '20px',
                  background: 'rgba(149, 140, 255, 0.75)',                 
                  boxShadow: '-1.70667px 1.70667px 5.12px 2.56px rgba(173, 166, 255, 0.27)',
                  borderRadius: '6.82667px'}} type="text" name="" className="day" value="SUN" disabled=""/>

            <input style={{ fontWeight: 600,textAlign: 'center',
                  color:'white',
                  width: '78px',
                  height: '166px',
                   marginTop: '20px',
                   background: 'rgba(149, 140, 255, 0.75)',                 
                  boxShadow: '-1.70667px 1.70667px 5.12px 2.56px rgba(173, 166, 255, 0.27)',
                  borderRadius: '6.82667px'}} type="text" name="" className="day" value="MON" disabled=""/>

            <input style={{fontWeight: 600,textAlign: 'center' ,
                  color:'white',
                  width: '78px',
                  height: '166px',
                  marginTop: '20px',
                  background: 'rgba(149, 140, 255, 0.75)',                 
                  boxShadow: '-1.70667px 1.70667px 5.12px 2.56px rgba(173, 166, 255, 0.27)',
                  borderRadius: '6.82667px'}} type="text" name="" className="day" value="TUE" disabled=""/>

            <input style={{fontWeight: 600,textAlign: 'center' ,
                  color:'white',
                  width: '78px',
                  height: '166px',
                  marginTop: '20px',
                  background: 'rgba(149, 140, 255, 0.75)',                 
                  boxShadow: '-1.70667px 1.70667px 5.12px 2.56px rgba(173, 166, 255, 0.27)',
                  borderRadius: '6.82667px'}} type="text" name="" className="day" value="WED" disabled=""/>

            <input style={{fontWeight: 600,textAlign: 'center',
                  color:'white',
                  width: '78px',height: '166px',
                  marginTop:'20px',background: 'rgba(149, 140, 255, 0.75)',                 
                  boxShadow: '-1.70667px 1.70667px 5.12px 2.56px rgba(173, 166, 255, 0.27)',
                  borderRadius: '6.82667px'}} type="text" name="" className="day" value="THU" disabled=""/>
        </div>
        <div id="header2">
            <input   style={{fontWeight: 600,textAlign: 'center',
            color:'white',
            marginRight:'18px',
             height: '35px',
             left:'',top:'',
             backgroundColor:'rgba(223, 24, 24, 0.75)',
             borderRadius:'8px',boxShadow:'2px 2px 6px 1px rgba(228, 79, 82, 0.25)',width:'114px',marginBottom:'15px'}} type="text" name="" id="year" value="Year" disabled=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',
              color:'#9A8F8F',
              width:'115px',
              height:'35px',
              marginTop:'6px',
              background:'#FFFFFF',
              boxShadow:'3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',
              borderRadius:'6.82667px'
            }} type="text" name="" className="year" id="1stsu" value="1st Year Odd" disabled=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',
               color:'#9A8F8F',
               width:'115px',
               height:'35px',
               marginTop:'6px',
               background:'#FFFFFF',
               boxShadow:'3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',
               borderRadius:'6.82667px'
            }} type="text" name="" className="year" id="2ndsu" value="2nd Year Even" disabled=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',
               color:'#9A8F8F',
               width:'115px',
               height:'35px',
               marginTop:'6px',
               background:'#FFFFFF',
               boxShadow:'3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',
               borderRadius:'6.82667px'
            }} type="text" name="" className="year" id="3rdsu" value="3rd Year Even" disabled=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',
               color:'#9A8F8F',
               width:'115px',
               height:'35px',
               marginTop:'6px',
               background:'#FFFFFF',
               boxShadow:'3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',
               borderRadius:'6.82667px'
            }} type="text" name="" className="year" id="4thsu" value="4th Year Even" disabled=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',
               color:'#9A8F8F',
               width:'115px',
               height:'35px',
               marginTop:'30px',
               background:'#FFFFFF',
               boxShadow:'3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',
               borderRadius:'6.82667px'
            }} type="text" name="" className="year topMargin" id="1stmo" value="1st Year Odd" disabled=""/>
            <input  style={{fontWeight: 600,textAlign: 'center', color:'#9A8F8F',
              width:'115px',
              height:'35px',
              marginTop:'6px',
              background:'#FFFFFF',
              boxShadow:'3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',
              borderRadius:'6.82667px'}} type="text" name="" className="year" id="2ndmo" value="2nd Year Even" disabled=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',
               color:'#9A8F8F',
               width:'115px',
               height:'35px',
               marginTop:'6px',
               background:'#FFFFFF',
               boxShadow:'3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',
               borderRadius:'6.82667px'
            }} type="text" name="" className="year" id="3rdmo" value="3rd Year Even" disabled=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',
               color:'#9A8F8F',
               width:'115px',
               height:'35px',
               marginTop:'6px',
               background:'#FFFFFF',
               boxShadow:'3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',
               borderRadius:'6.82667px'
            }} type="text" name="" className="year" id="4thmo" value="4th Year Even" disabled=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',
               color:'#9A8F8F',
               width:'115px',
               height:'35px',
               marginTop:'30px',
               background:'#FFFFFF',
               boxShadow:'3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',
               borderRadius:'6.82667px'
            }} type="text" name="" className="year topMargin" id="1sttu" value="1st Year Odd" disabled=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',
               color:'#9A8F8F',
               width:'115px',
               height:'35px',
               marginTop:'6px',
               background:'#FFFFFF',
               boxShadow:'3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',
               borderRadius:'6.82667px'
            }} type="text" name="" className="year" id="2ndtu" value="2nd Year Even" disabled=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',
               color:'#9A8F8F',
               width:'115px',
               height:'35px',
               marginTop:'6px',
               background:'#FFFFFF',
               boxShadow:'3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',
               borderRadius:'6.82667px'
            }} type="text" name="" className="year" id="3rdtu" value="3rd Year Even" disabled=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',
               color:'#9A8F8F',
               width:'115px',
               height:'35px',
               marginTop:'6px',
               background:'#FFFFFF',
               boxShadow:'3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',
               borderRadius:'6.82667px'
            }} type="text" name="" className="year" id="4thtu" value="4th Year Even" disabled=""/>

            <input  style={{fontWeight: 600,textAlign: 'center', color:'#9A8F8F',
              width:'115px',
              height:'35px',
              marginTop:'30px',
              background:'#FFFFFF',
              boxShadow:'3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',
              borderRadius:'6.82667px'}} type="text" name="" className="year topMargin" id="1stwe" value="1st Year Odd" disabled=""/>
            <input  style={{fontWeight: 600,textAlign: 'center', color:'#9A8F8F',
              width:'115px',
              height:'35px',
              marginTop:'6px',
              background:'#FFFFFF',
              boxShadow:'3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',
              borderRadius:'6.82667px'}} type="text" name="" className="year" id="2ndwe" value="2nd Year Even" disabled=""/>
            <input  style={{fontWeight: 600,textAlign: 'center', color:'#9A8F8F',
              width:'115px',
              height:'35px',
              marginTop:'6px',
              background:'#FFFFFF',
              boxShadow:'3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',
              borderRadius:'6.82667px'}} type="text" name="" className="year" id="3rdwe" value="3rd Year Even" disabled=""/>
            <input  style={{fontWeight: 600,textAlign: 'center', color:'#9A8F8F',
              width:'115px',
              height:'35px',
              marginTop:'6px',
              background:'#FFFFFF',
              boxShadow:'3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',
              borderRadius:'6.82667px'}} type="text" name="" className="year" id="4thwe" value="4th Year Even" disabled=""/>

            <input  style={{fontWeight: 600,textAlign: 'center', color:'#9A8F8F',
              width:'115px',
              height:'35px',
              marginTop:'30px',
              background:'#FFFFFF',
              boxShadow:'3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',
              borderRadius:'6.82667px'}} type="text" name="" className="year topMargin" id="1stth" value="1st Year Odd" disabled=""/>
            <input  style={{fontWeight: 600,textAlign: 'center', color:'#9A8F8F',
              width:'115px',
              height:'35px',
              marginTop:'6px',
              background:'#FFFFFF',
              boxShadow:'3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',
              borderRadius:'6.82667px'}} type="text" name="" className="year" id="2ndth" value="2nd Year Even" disabled=""/>
            <input  style={{fontWeight: 600,textAlign: 'center', color:'#9A8F8F',
              width:'115px',
              height:'35px',
              marginTop:'6px',
              background:'#FFFFFF',
              boxShadow:'3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',
              borderRadius:'6.82667px'}} type="text" name="" className="year" id="3rdth" value="3rd Year Even" disabled=""/>
            <input  style={{fontWeight: 600,textAlign: 'center', color:'#9A8F8F',
              width:'115px',
              height:'35px',
              marginTop:'6px',
              background:'#FFFFFF',
              boxShadow:'3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',
              borderRadius:'6.82667px'}} type="text" name="" className="year" id="4thth" value="4th Year Even" disabled=""/>
        </div>
        <div id="header3">
            <input  style={{fontWeight: 600,textAlign: 'center',color:'white',marginRight:'18px', height: '35px',left:'',top:'',backgroundColor:'rgba(223, 24, 24, 0.75)',
              borderRadius:'8px',boxShadow:'2px 2px 6px 1px rgba(228, 79, 82, 0.25)',marginBottom:'15px',width:'160px'}} type="text" name="" id="time1" value="9:05 AM - 10:00 AM" disabled=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}}type="text" name="" className="time1 allInput" id="su11" value="" placeholder=""/>  
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time1 allInput" id="su21" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time1 allInput" id="su31" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time1 allInput" id="su41" value="" placeholder=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '30px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time1 allInput topMargin" id="mo11" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time1 allInput" id="mo21" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time1 allInput" id="mo31" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time1 allInput" id="mo41" value="" placeholder=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '30px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time1 allInput topMargin" id="tu11" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time1 allInput" id="tu21" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time1 allInput" id="tu31" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time1 allInput" id="tu41" value="" placeholder=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '30px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time1 allInput topMargin" id="we11" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time1 allInput" id="we21" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time1 allInput" id="we31" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time1 allInput" id="we41" value="" placeholder=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '30px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time1 allInput topMargin" id="th11" value="" placeholder=""/>
                
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time1 allInput" id="th21" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time1 allInput" id="th31" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time1 allInput" id="th41" value="" placeholder=""/>
        </div>
        <div id="header4">
            <input  style={{fontWeight: 600,textAlign: 'center',color:'white',marginRight:'18px', height: '35px',left:'',top:'',backgroundColor:'rgba(223, 24, 24, 0.75)',
              borderRadius:'8px',boxShadow:'2px 2px 6px 1px rgba(228, 79, 82, 0.25)',marginBottom:'15px',width:'160px'}} type="text" name="" id="time2" value="10:05 AM - 11:00 AM" disabled=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time2 allInput" id="su12" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time2 allInput" id="su22" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time2 allInput" id="su32" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time2 allInput" id="su42" value="" placeholder=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '30px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time2 allInput topMargin" id="mo12" value=""
                placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time2 allInput" id="mo22" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time2 allInput" id="mo32" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time2 allInput" id="mo42" value="" placeholder=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '30px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time2 allInput topMargin" id="tu12" value=""
                placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time2 allInput" id="tu22" value="" placeholder=""/>
            <input style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time2 allInput" id="tu32" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time2 allInput" id="tu42" value="" placeholder=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '30px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time2 allInput topMargin" id="we12" value=""
                placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time2 allInput" id="we22" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time2 allInput" id="we32" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time2 allInput" id="we42" value="" placeholder=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '30px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time2 allInput topMargin" id="th12" value=""
                placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time2 allInput" id="th22" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time2 allInput" id="th32" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time2 allInput" id="th42" value="" placeholder=""/>
        </div>
        <div id="header5">
            <input  style={{fontWeight: 600,textAlign: 'center' ,color:'white',marginRight:'18px', height: '35px',left:'',top:'',backgroundColor:'rgba(223, 24, 24, 0.75)',
              borderRadius:'8px',boxShadow:'2px 2px 6px 1px rgba(228, 79, 82, 0.25)',marginBottom:'15px',width:'160px'}} type="text" name="" id="time3" value="11:05 AM - 12:00 PM" disabled=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time3 allInput" id="su13" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time3 allInput" id="su23" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time3 allInput" id="su33" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time3 allInput" id="su43" value="" placeholder=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '30px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time3 allInput topMargin" id="mo13" value=""
                placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time3 allInput" id="mo23" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}}type="text" name="" className="time3 allInput" id="mo33" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time3 allInput" id="mo43" value="" placeholder=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '30px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time3 allInput topMargin" id="tu13" value=""
                placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time3 allInput" id="tu23" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time3 allInput" id="tu33" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time3 allInput" id="tu43" value="" placeholder=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '30px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time3 allInput topMargin" id="we13" value=""
                placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time3 allInput" id="we23" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time3 allInput" id="we33" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time3 allInput" id="we43" value="" placeholder=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '30px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time3 allInput topMargin" id="th13" value=""
                placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time3 allInput" id="th23" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time3 allInput" id="th33" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time3 allInput" id="th43" value="" placeholder=""/>
        </div>

        <div className="break" style={{width:'74px',height:'994px',marginTop:'45px',marginRight:'15px',background:'rgba(173, 166, 255, 0.13)',borderRadius:'20.48px'}}>
            <div className="up1">
                <p style={{marginTop: '220px',fontWeight:'700',fontSize:'36px',color:'rgba(0, 0, 0, 0.2)',transform:'rotate(-90deg)'}}>BREAK</p>
                <p style={{marginTop: '200px',fontWeight:'700',fontSize:'36px',color:'rgba(0, 0, 0, 0.2)',transform:'rotate(-90deg)'}}>PRAYER</p>
                <p style={{marginBottom: '170px', marginTop: '70px',fontWeight:'700',fontSize:'36px',color:'rgba(0, 0, 0, 0.2)',transform:'rotate(-90deg)'}}>&amp;</p>
                <p style={{fontWeight:'700',fontSize:'36px',color:'rgba(0, 0, 0, 0.2)',transform:'rotate(-90deg)'}}>LUNCH</p>
            </div>
        </div>

        <div id="header6">
            <input  style={{fontWeight: 600,textAlign: 'center',color:'white',marginRight:'18px', height: '35px',left:'',top:'',backgroundColor:'rgba(223, 24, 24, 0.75)',
              borderRadius:'8px',boxShadow:'2px 2px 6px 1px rgba(228, 79, 82, 0.25)',marginBottom:'15px',width:'160px'}} type="text" name="" id="time4" value="1:05 PM - 2:00 PM" disabled=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time4 allInput" id="su14" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time4 allInput" id="su24" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time4 allInput" id="su34" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time4 allInput" id="su44" value="" placeholder=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '30px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time4 allInput topMargin" id="mo14" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time4 allInput" id="mo24" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time4 allInput" id="mo34" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time4 allInput" id="mo44" value="" placeholder=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '30px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time4 allInput topMargin" id="tu14" value=""
                placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time4 allInput" id="tu24" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}}type="text" name="" className="time4 allInput" id="tu34" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time4 allInput" id="tu44" value="" placeholder=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '30px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time4 allInput topMargin" id="we14" value=""
                placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time4 allInput" id="we24" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time4 allInput" id="we34" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time4 allInput" id="we44" value="" placeholder=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '30px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time4 allInput topMargin" id="th14" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time4 allInput" id="th24" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time4 allInput" id="th34" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px',color: '#9A8F8F',width: '160px', height: '35px',marginTop: '6px',
                            background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)', borderRadius: '6.82667px'}} type="text" name="" className="time4 allInput" id="th44" value="" placeholder=""/>
        </div>
        <div id="header7">
            <input  style={{fontWeight: 600,textAlign: 'center',color:'white',marginRight:'18px', height: '35px',left:'',top:'',backgroundColor:'rgba(223, 24, 24, 0.75)',
              borderRadius:'8px',boxShadow:'2px 2px 6px 1px rgba(228, 79, 82, 0.25)',marginBottom:'15px',width:'308px'}} type="text" name="" id="time5" value="1:05 PM - 4:00 PM" disabled=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px', color: '#9A8F8F',width: '308px',height: '35px',marginTop: '6px',background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',borderRadius: '6.82667px'}}
               type="text" name="" className="time5 allInput" id="su15" value="" placeholder=""/>
                
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px', color: '#9A8F8F',width: '308px',height: '35px',marginTop: '6px',background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',borderRadius: '6.82667px'}} type="text" name="" className="time5 allInput" id="su25" value=""
                placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px', color: '#9A8F8F',width: '308px',height: '35px',marginTop: '6px',background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',borderRadius: '6.82667px'}} type="text" name="" className="time5 allInput" id="su35" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px', color: '#9A8F8F',width: '308px',height: '35px',marginTop: '6px',background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',borderRadius: '6.82667px'}} type="text" name="" className="time5 allInput" id="su45" value="" placeholder=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px', color: '#9A8F8F',width: '308px',height: '35px',marginTop: '30px',background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',borderRadius: '6.82667px'}} type="text" name="" className="time5 allInput topMargin" id="mo15" value=""
                placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px', color: '#9A8F8F',width: '308px',height: '35px',marginTop: '6px',background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',borderRadius: '6.82667px'}} type="text" name="" className="time5 allInput" id="mo25" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px', color: '#9A8F8F',width: '308px',height: '35px',marginTop: '6px',background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',borderRadius: '6.82667px'}} type="text" name="" className="time5 allInput" id="mo35" value=""
                placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px', color: '#9A8F8F',width: '308px',height: '35px',marginTop: '6px',background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',borderRadius: '6.82667px'}} type="text" name="" className="time5 allInput" id="mo45" value=""
                placeholder=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px', color: '#9A8F8F',width: '308px',height: '35px',marginTop: '30px',background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',borderRadius: '6.82667px'}} type="text" name="" className="time5 allInput topMargin" id="tu15" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px', color: '#9A8F8F',width: '308px',height: '35px',marginTop: '6px',background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',borderRadius: '6.82667px'}} type="text" name="" className="time5 allInput" id="tu25" value=""
                placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px', color: '#9A8F8F',width: '308px',height: '35px',marginTop: '6px',background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',borderRadius: '6.82667px'}} type="text" name="" className="time5 allInput" id="tu35" value=""
                placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px', color: '#9A8F8F',width: '308px',height: '35px',marginTop: '6px',background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',borderRadius: '6.82667px'}} type="text" name="" className="time5 allInput" id="tu45" value=""
                placeholder=""/>

            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px', color: '#9A8F8F',width: '308px',height: '35px',marginTop: '30px',background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',borderRadius: '6.82667px'}} type="text" name="" className="time5 allInput topMargin" id="we15" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px', color: '#9A8F8F',width: '308px',height: '35px',marginTop: '6px',background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',borderRadius: '6.82667px'}} type="text" name="" className="time5 allInput" id="we25" value="" placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px', color: '#9A8F8F',width: '308px',height: '35px',marginTop: '6px',background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',borderRadius: '6.82667px'}} type="text" name="" className="time5 allInput" id="we35" value=""
                placeholder=""/>
            <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px', color: '#9A8F8F',width: '308px',height: '35px',marginTop: '6px',background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',borderRadius: '6.82667px'}} type="text" name="" className="time5 allInput" id="we45" value=""
                placeholder=""/>

             <input  style={{fontWeight: 600,textAlign: 'center',fontSize: '12px', color: '#9A8F8F',width: '308px',height: '160px',marginTop: '30px',background: '#FFFFFF',boxShadow: '3.41333px 3.41333px 10.24px 0.853333px rgba(0, 0, 0, 0.07)',borderRadius: '6.82667px'}} type="text" name="" className="time5 allInput topMargin programming" value="" placeholder="Assigned for Programming Club"/>
        </div>
    </div> 
  )
}

export default NewRoutine
