import React  from 'react';
import { NavLink } from "react-router-dom";
import "./HNavbar.css"

const HNavbaar = () => {
 
  return (
    <div className='HNavbaar'>

        {/* <ul>
          <h2>Supplier Management System</h2><br></br>

          <li> <a href="/Insert"><button className='add'>+ Add </button></a></li>
          <li>
            <NavLink to = {`Search`}>
             <button type='submit' >Search</button></NavLink>
          </li>
    </ul> */}

<ul className='ul'>
      <h2 className='h2'>Supplier Management System</h2><br></br>
      <div className='button-container'>
      
        <NavLink to = {`Search`}>
        <button className="underline-onclick btn-details" type='submit' >Search</button></NavLink>
      
      {/* <li className='li'> <a href="/financedetails"><button className='underline-onclick btn-details'>Content</button></a></li> 
      <li className='li'> <a href="/financedetailsexcel"><button className='underline-onclick btn-details'>Upload</button></a></li> */}
      <div className='li vertical-line'></div>
      <li className='li'> <a href="/Insert"><button className='btn btn-add'>+Add</button></a></li> 
      <li className='li'>
        {/* <form className='d-flex' role='search'>
          <input type='search' className='search-bar' aria-label='Search'/>
          <button type='submit' className='btn-search'>Search</button>
        </form> */}
      </li>
      {/* <li className='li'> <a href="#"><button className='btn-report'>Generate Report</button></a></li> */}
      </div>
</ul>

    </div>
  )} 

export default HNavbaar