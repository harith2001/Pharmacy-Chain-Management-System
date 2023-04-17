import React from 'react'
import Logo from '../images/Logo.png'


const VNavbaar = () => {
  return (
  <div className="VNavbaar">
    <ul>
          <li><img src = {Logo} alt="icon"/></li>
          <li> <a href="#">DashBoard</a></li>
          <li> <a href="#">Stock</a></li> 
          <li> <a href="#">Finance</a></li> 
          <li> <a href="#">Employee</a></li> 
          <li> <a href="#">Customer</a></li> 
          <li> <a href="#">Supplier</a></li> 
          <li> <a href="#">Distribution</a></li> 
          <li> <a href="#">Branch</a></li> 
    </ul>
  </div>
  )
}

export default VNavbaar