import React  from 'react';
import { NavLink } from "react-router-dom";

const HNavbaar = () => {
 
  return (
    <div className='HNavbaar'>

        <ul>
          <h2>Stock Inventory System</h2><br></br>

          <li> <a href="/Insert"><button className='add'>+ Add </button></a></li>
          <li> <a href="/"><button className='alert'> Alert </button></a></li> 
          <li>
            <NavLink to = {`Search`}>
             <button type='submit' >Search</button></NavLink>
          </li>
    </ul>

    </div>
  )} 

export default HNavbaar