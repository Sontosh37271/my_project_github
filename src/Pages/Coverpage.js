import React from 'react'
import {Outlet,Link} from "react-router-dom";
import './Coverpage.css'
const Coverpage = () => {
  return (
    <div >
      <nav>
        <ul className='CoverpageUl'>
            
            <li className='CoverpageLi'><Link to="/" className='CoverpageLink'>Home</Link></li>
            <li className='CoverpageLi'><Link to="/UpdateRoutine"  className='CoverpageLink'>UpdateRoutine</Link></li>
            <li className='CoverpageLi' ><Link to="/Login"  className='CoverpageLink'>Login</Link></li>
            <li className='CoverpageLi' ><Link to="/Registration" className='CoverpageLink'>Registration</Link></li>
            <li className='CoverpageLi'><Link to="/AdminPage" className='CoverpageLink'>AdminPage</Link></li>
           
        </ul>
      </nav>
      <div className='CoverpageContainer'>

      </div>
      <Outlet />
    </div>
  )
}

export default Coverpage
