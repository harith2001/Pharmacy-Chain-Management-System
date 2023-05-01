import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import './HNavbar.css'


const HNavbaar = () => {
 
  // const [getsearchdata, setsearchdata] = useState([]);
  // console.log(getsearchdata);

  // const{Branch_ID} = useParams("");
  // console.log(Branch_ID);

  // const handleSearch = async (e)=>{

  //   const res = await fetch(`/searchdata/${Branch_ID}`, {
  //     method:"GET",
  //     headers:{
  //       "Content-Type":"application/json"
  //     }
  //   });

  //   const data = await res.json();
  //   console.log(data);

  //   if (res.status ===422|| !data){
  //     console.log("error");
  //   }else{

  //     setsearchdata(data)
  //     console.log("get data ");
  //   }
  // }

  // useEffect(()=>{
  //   handleSearch();
  // },[])

  

  return (
    <div className='HNavbaar'>

        {/* <ul>
          <h2><center>Branch Management System</center></h2><br></br>

          <li> <a href="/Insert"><button className='add'>+ Add </button></a></li> 
          <li> <a href="#"><button className='alert'>Alert</button></a></li> 
          <li>
            <form onSubmit={handleSearch}>
              <input type='search' placeholder='Search' name ='search' value={getsearchdata} onChange={(e) => setsearchdata(e.target.value)}/>
             <button type='submit' >Search</button></form>
          </li>
    </ul> */}

<ul className='ul'>
      <h2 className='h2'>Branch Management System</h2><br></br>
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