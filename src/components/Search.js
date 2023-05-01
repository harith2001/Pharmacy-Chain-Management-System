import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import './Details.css'

const Search = () => {
  const [getsearchdata, setSearchdata] = useState({});
  //const [searchText, setSearchText] = useState();
  const { Medicine_ID } = useParams("");
  //search function
  const handleSearch = async (e) => {
    e.preventDefault();
    console.log("getsearchdata " + getsearchdata);
    //console.log("searchText " + searchText);
    console.log("Medicine_ID " + Medicine_ID);

    const res = await fetch(`/supplier/searchdata/${getsearchdata}`, {
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
      setSearchdata(data)
      console.log("Successful response recieved");
    }
  }

  useEffect(() => {
    handleSearch();
  }, [getsearchdata])

    
    
    

  return (

    <div className='table-container'>
      <form onSubmit={handleSearch}>
        <input
          className='search'
          placeholder='Search ...'
          value={Medicine_ID} 
          onChange={(e) => setSearchdata(e.target.value)}/>
        <button className="search-btn" type='submit'>Search</button>
      </form>

      <table className="table">
        <thead>
          <tr className="table-head">
          <th className="th" scope="col">Medicine ID</th>
          <th className="th" scope="col">Supplier Name</th>
          <th className="th" scope="col">Address</th>
          <th className="th" scope="col">Email Address</th>
          <th className="th" scope="col">Contact Number</th>
          <th className="th" scope="col">Amount</th>
          <th className="th" scope="col">Price</th>
          <th className="th" scope="col">Purchased Date</th>
          </tr>
        </thead>
        <tbody>
          <>
            <tr className="table-data">
              <td className="td">{getsearchdata.Medicine_ID}</td>
              <td className="td"><NavLink to={`/view/${getsearchdata._id}`}>{getsearchdata.Name}</NavLink></td>
              <td className="td">{getsearchdata.Address}</td>
              <td className="td">{getsearchdata.Email}</td>
              <td className="td">{getsearchdata.Contact_number}</td>
              <td className="td">{getsearchdata.Amount}</td>
              <td className="td">{getsearchdata.Price}</td>
              <td className="td">{getsearchdata.Date}</td>
            </tr>
          </>
        </tbody>
      </table>
    </div>
  )
}

export default Search