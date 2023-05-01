import React from 'react'
import Logo from '../images/Logo.png'


const VNavbaar = () => {
  return (
    <body>
  <div className="VNavbaar">
    <ul>
          <li><img src={Logo}/></li>
          <li> <a href="http://localhost:3007/">DashBoard</a></li>
          <li> <a href="http://localhost:3001/">Stock</a></li> 
          <li> <a href="http://localhost:3000/">Finance</a></li> 
          <li> <a href="http://localhost:3003/">Employee</a></li> 
          <li> <a href="http://localhost:3004/">Customer</a></li> 
          <li> <a href="http://localhost:3005/">Supplier</a></li> 
          <li> <a href="http://localhost:3002/">Distribution</a></li> 
          <li> <a href="http://localhost:3006/">Branch</a></li> 
    </ul>
  </div>
  </body>
  )
}

export default VNavbaar