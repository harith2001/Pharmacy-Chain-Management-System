import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const HNavbaar = () => {
 
  const [getsearchdata, setsearchdata] = useState([]);
  console.log(getsearchdata);

  const{Medicine_ID} = useParams("");
  console.log(Medicine_ID);

  const handleSearch = async (e)=>{

    const res = await fetch(`/searchdata/${Medicine_ID}`, {
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    });

    const data = await res.json();
    console.log(data);

    if (res.status ===422|| !data){
      console.log("error");
    }else{

      setsearchdata(data)
      console.log("get data ");
    }
  }

  useEffect(()=>{
    handleSearch();
  },[])

  

  return (
    <div className='HNavbaar'>

        <ul>
          <h2>Stock Inventory System</h2><br></br>

          <li> <a href="/Insert"><button className='add'>+ Add </button></a></li> 
          <li> <a href="#"><button className='alert'>Alert</button></a></li> 
          <li>
            <form onSubmit={handleSearch}>
              <input type='search' placeholder='Search' name ='search' value={getsearchdata} onChange={(e) => setsearchdata(e.target.value)}/>
             <button type='submit' >Search</button></form>
          </li>
    </ul>

    </div>
  )} 

export default HNavbaar