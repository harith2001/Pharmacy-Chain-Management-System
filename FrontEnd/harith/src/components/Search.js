import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';

const Search = () => {
  const [getsearchdata, setsearchdata] = useState({});
  //const [searchText, setSearchText] = useState();
  const { Medicine_ID } = useParams("");

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log("getsearchdata " + getsearchdata);
    //console.log("searchText " + searchText);
    console.log("Medicine_ID " + Medicine_ID);

    const res = await fetch(`/searchdata/${getsearchdata}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();
    //console.log("data " + data);

    if (!data) {
      console.log("empty data");
      if(res.status === 422){
        console.log("error");
      }
    } else {
      setsearchdata(data)
      console.log("Successful response recieved");
    }
  }

  useEffect(() => {
    handleSearch();
  }, [getsearchdata])

    
    const date1 = String(getsearchdata.Expire_Date).split("T")[0];
    const date2 = String(getsearchdata.Purchased_Date).split("T")[0];
    

  return (

    <div className='search'>
      <form onSubmit={handleSearch}>
        <input
          className='search'
          placeholder='Search ...'
          value={Medicine_ID} 
          onChange={(e) => setsearchdata(e.target.value)}/>
        <button type='submit'>Search</button>
      </form>

      <table className="Stable">
        <thead>
          <tr className="table-dark">
            <th scope="col">Medicine ID</th>
            <th scope="col">Medicine Name</th>
            <th scope="col">Number of Medicine</th>
            <th scope="col">Expire Date</th>
            <th scope="col">Purchased Date</th>
          </tr>
        </thead>
        <tbody>
          <>
            <tr>
              <td>{getsearchdata.Medicine_ID}</td>
              <td><NavLink to={`/view/${getsearchdata._id}`}>{getsearchdata.Name}</NavLink></td>
              <td>{getsearchdata.Medicine_NO}</td>
              <td>{date1}</td>
              <td>{date2}</td>
            </tr>
          </>
        </tbody>
      </table>
    </div>
  )
}

export default Search