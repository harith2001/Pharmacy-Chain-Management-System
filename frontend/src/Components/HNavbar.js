import React from 'react'
import './HNavbar.css'

const HNavbaar = () => {
  return (
    <div className='HNavbaar'>
        <ul className='ul'>
          <h2 className='h2'>Finance Management System</h2><br></br>
          <div className='button-container'>
          <li className='li'> <a href="/financehome"><button className='underline-onclick btn-details'>Dashboard</button></a></li>
          <li className='li'> <a href="/financedetails"><button className='underline-onclick btn-details'>Content</button></a></li> 
          <li className='li'> <a href="/financedetailsexcel"><button className='underline-onclick btn-details'>Upload</button></a></li>
          <div className='li vertical-line'></div>
          <li className='li'> <a href="/insertfinance"><button className='btn btn-add'>+ Add </button></a></li> 
          <li className='li'>
            {/* <form className='d-flex' role='search'>
              <input type='search' className='search-bar' aria-label='Search'/>
              <button type='submit' className='btn-search'>Search</button>
            </form> */}
          </li>
          <li className='li'> <a href="#"><button className='btn-report'>Generate Report</button></a></li>
          </div>
    </ul>
    </div>
  )
}

export default HNavbaar