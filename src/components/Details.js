import React, { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Details = () => {

  const navigate = useNavigate();

  const [getstockdata, setStockdata] = useState([]);
  console.log(getstockdata);

  const {id} = useParams("");
  console.log(id);
  
  const getdata = async(e)=>{

    const res = await fetch(`/getstock/${id}`, {
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
      setStockdata(data)
      console.log("get data ");
    }
  } 

  useEffect(()=>{
    getdata();
  },[])

  const deletestock =async (id)=>{
    const res2 = await fetch(`/deletestock/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    });
    const deletedata = await res2.json();
    console.log(deletedata);

    if(res2.status===422||!deletedata){
      console.log("error");
    }else{
      alert("Stock Data Deleted");
      navigate("/")
      console.log("stock deleted ");
      getdata();
    }
  }

  return (
    <div className='container mb-3 '>
        <br></br>
        <h1 style={{fontWeight:400}}>Medicine Details</h1>

        <br></br>
<br></br>
<table class="table">
  <thead>
    <tr className ="table-dark">
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
      <td>{getstockdata.Medicine_ID}</td>
      <td>{getstockdata.Name}</td>
      <td>{getstockdata.Medicine_NO}</td>
      <td>{getstockdata.Expire_Date}</td>
      <td>{getstockdata.Purchased_Date}</td>

      <td className ="d-flex justify-content-between">
      <NavLink to ={`/Edit/${getstockdata._id}`}><button className ="btn btn-primary">Update</button></NavLink>
       <button className ="btn btn-danger" onClick={()=>deletestock(getstockdata._id)}>Detele</button>
      </td>
    </tr>
          </>
    </tbody>  
    </table>
    </div>

)}

export default Details