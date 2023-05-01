import React from 'react'
import { NavLink } from "react-router-dom";
import './HNavbar.css'

const HNavbaar = () => {
  return (
    <div className='HNavbaar'>
        <ul className='ul'>
          <h2 className='h2'>Medicine And Drug Information System</h2><br></br>
          <div className='button-container'>
          <NavLink to = {`Search`}>
             <button className='underline-onclick btn-details' type='submit' >Search</button></NavLink>
             <div className='li vertical-line'></div>
          {/* <li className='li'> <a href="/financehome"><button className='underline-onclick btn-details'>Dashboard</button></a></li>
          <li className='li'> <a href="/financedetails"><button className='underline-onclick btn-details'>Content</button></a></li> 
          <li className='li'> <a href="/financedetailsexcel"><button className='underline-onclick btn-details'>Upload</button></a></li> */}
          {/* <div className='li vertical-line'></div> */}
          <li className='li'> <a href="/Insert"><button className='btn btn-add'>+Add</button></a></li> 
    
          {/* <li className='li'> 
          <a href="#"><button className='btn-report'>Generate Report</button></a></li> */}
          </div>
        </ul>
    </div>
  )
}

export default HNavbaar