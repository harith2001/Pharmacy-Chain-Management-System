import React, { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Details.css"

const Details = () => {

  const navigate = useNavigate();

  //get supplier data
  const [getsupplierdata, setSupplierdata] = useState([]);
  console.log(getsupplierdata);

  const {id} = useParams("");
  console.log(id);
  
  const getdata = async(e)=>{

    const res = await fetch(`/supplier/getsupplier/${id}`, {
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
      setSupplierdata(data)
      console.log("get data ");
    }
  } 

  useEffect(()=>{
    getdata();
  },[])

  //delete supplier
  const deletesupplier =async (id)=>{
    const res2 = await fetch(`/supplier/deletesupplier/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    });
    const deletesupplier = await res2.json();
    console.log(deletesupplier);

    if(res2.status===422||!deletesupplier){
      console.log("error");
    }else{
      alert("Supplier Data Deleted");
      navigate("/")
      console.log("supplier deleted ");
      getdata();
    }
  }

     
  

  return (
    <div className='table-container'>
      
<table class="table">
  <thead>
    <tr className ="table-head">
      <th className ="th" scope="col">Medicine ID</th>
      <th className ="th" scope="col">Supplier Name</th>
      <th className ="th" scope="col">Address</th>
      <th className ="th" scope="col">Email</th>
      <th className ="th" scope="col">Contact Number</th>
      <th className ="th" scope="col">Amount</th>
      <th className ="th" scope="col">Price</th>
      <th className ="th" scope="col">Purchased Date</th>
      <th className ="th" scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
       
          <>
              <tr className="table-data">
      <td className="td">{getsupplierdata.Medicine_ID}</td>
      <td className="td">{getsupplierdata.Name}</td>
      <td className="td">{getsupplierdata.Address}</td>
      <td className="td">{getsupplierdata.Email}</td>
      <td className="td">{getsupplierdata.Contact_number}</td>
      <td className="td">{getsupplierdata.Amount}</td>
      <td className="td">{getsupplierdata.Price}</td>
      <td className="td">{getsupplierdata.Date}</td>
      
      <td className="d-flex justify-content-between">
      <NavLink to ={`/Edit/${getsupplierdata._id}`}><button className ="btn btn-edit">Edit</button></NavLink>
      <button className ="btn btn-delete" onClick={()=>deletesupplier(getsupplierdata._id)}>Delete</button>
      </td>
    </tr>
          </>
    </tbody>  
    </table>
    </div>

)}

export default Details