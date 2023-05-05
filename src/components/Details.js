import React, { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Details.css"
import { toast } from "react-toastify";

const Details = () => {

  const navigate = useNavigate();

  const [getstockdata, setStockdata] = useState([]);
  console.log(getstockdata);

  const {id} = useParams("");
  console.log(id);
  
  const getdata = async(e)=>{

    const res = await fetch(`/stock/getstock/${id}`, {
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    });

    const data = await res.json();
    console.log(data);

    if (res.status ===422|| !data){
      //console.log("error");
    }else{
      setStockdata(data)
      //console.log("get data ");
    }
  } 

  useEffect(()=>{
    getdata();
  },[])

  const deletestock =async (id)=>{
    const res2 = await fetch(`/stock/deletestock/${id}`,{
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
      toast.warn("Stock Deleted Successfully !");
      navigate("/")
      //console.log("stock deleted ");
      getdata();
    }
  }

     
  const date1 = String(getstockdata.Expire_Date).split("T")[0];
  const date2 = String(getstockdata.Purchased_Date).split("T")[0];

  return (
    <div className='table-container'>
      
<table class="table">
  <thead>
    <tr className ="table-head">
      <th className ="th" scope="col">Medicine ID</th>
      <th className ="th" scope="col">Medicine Name</th>
      <th className ="th" scope="col">Number of Medicine</th>
      <th className ="th" scope="col">Expire Date</th>
      <th className ="th" scope="col">Purchased Date</th>
      <th className ="th" scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
       
          <>
      <tr className="table-data">
      <td className="td">{getstockdata.Medicine_ID}</td>
      <td className="td">{getstockdata.Name}</td>
      <td className="td">{getstockdata.Medicine_NO}</td>
      <td className="td">{date1}</td>
      <td className="td">{date2}</td>
      <td className ="d-flex justify-content-between">
      <NavLink to ={`/Edit/${getstockdata._id}`}><button className ="btn btn-edit">Edit</button></NavLink>
       <button className ="btn btn-delete" onClick={()=>deletestock(getstockdata._id)}>Delete</button>
      </td>
    </tr>
          </>
    </tbody>  
    </table>
    </div>

)}

export default Details