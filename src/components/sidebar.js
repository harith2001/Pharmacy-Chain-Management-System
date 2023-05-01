import React from 'react'
import {NavLink} from 'react-router-dom';
function sidebar() {
  return (
    <div  className='side_bar'>
		
    <ul>
		<li>  
            <img src =  './logo.png' alt="icon"/> </li>
	        <li  className="list-group-item " >   <NavLink  className="nav-link  text-white" aria-current="page" exact to="/Dashboard"  activeClassName="active">Dashboard</NavLink></li>
			 <li  className="list-group-item" >   <NavLink  className="nav-link  text-white" aria-current="page" exact to="/Stock"  activeClassName="active">Stock</NavLink></li>
			 <li  className="list-group-item ">   <NavLink  className="nav-link  text-white" aria-current="page" exact to="/finance"  activeClassName="active">Finance</NavLink></li>
			 <li  className="list-group-item ">   <NavLink  className="nav-link  text-white" aria-current="page" exact to="/employee"  activeClassName="active">Employee</NavLink></li>
			 <li  className="list-group-item ">   <NavLink  className="nav-link  text-white" aria-current="page" exact to="/customer"  activeClassName="active">Customer</NavLink></li>
			 <li  className="list-group-item ">   <NavLink  className="nav-link  text-white" aria-current="page" exact to="/supplier"  activeClassName="active">Supplier</NavLink></li>
			 <li  className="list-group-item ">   <NavLink  className="nav-link  text-white" aria-current="page" exact to="/"   activeClassName="active">Distribution</NavLink></li>
			 <li  className="list-group-item ">   <NavLink  className="nav-link  text-white" aria-current="page" exact to="/branch"  activeClassName="active">Branch</NavLink></li>
	
			</ul>		
  
    </div>
  )
}

export default sidebar