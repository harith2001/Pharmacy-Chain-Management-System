import React from 'react'

const HNavbaar = () => {
  return (
    <div className='HNavbaar'>

        <ul>
          <h2>Stock Inventory System</h2><br></br>

          <li> <a href="/Insert"><button className='add'>+ Add </button></a></li> 
          <li> <a href="#"><button className='alert'>Alert</button></a></li> 
          <li>
            <form className='d-flex' role='search'>
              <input type='search' placeholder='Search' aria-label='Search'/>
              <button type='submit'>Search</button>
            </form>
          </li>
    </ul>
    </div>
  )
}

export default HNavbaar