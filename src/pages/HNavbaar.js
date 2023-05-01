import React  from 'react';
import { NavLink } from "react-router-dom";

const HNavbaar = () => {
 
  return (
    <div className='HNavbaar'>

    <ul>
          <h2>Medicine And Drug Information System</h2><br></br>

          <li>
            <NavLink to = {`Search`}>
             <button type='submit' >Search</button></NavLink>
          </li>
    </ul>

    

    </div>
  )} 

export default HNavbaar