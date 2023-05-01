import React, { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Details.css"

const Details = () => {

  const navigate = useNavigate();

  const [getbranchdata, setBranchdata] = useState([]);
  console.log(getbranchdata);

  const {id} = useParams("");
  console.log(id);
  
  const getdata = async(e)=>{

    const res = await fetch(`/branch/getbranch/${id}`, {
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
      setBranchdata(data)
      console.log("get data ");
    }
  } 

  useEffect(()=>{
    getdata();
  },[])

  const deletebranch =async (id)=>{
    const res2 = await fetch(`/branch/deletebranch/${id}`,{
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
      alert("Branch Data Deleted");
      navigate("/")
      console.log("branch deleted ");
      getdata();
    }
  }

     


  return (
<div className='table-container'>
      
<table class="table">
  <thead>
    <tr className ="table-head">
      <th className ="th" scope="col">Branch ID</th>
      <th className ="th" scope="col">Branch Location</th>
      <th className ="th" scope="col">Branch Manager</th>
      <th className ="th" scope="col">Purchases</th>
      <th className ="th" scope="col">Value of Returned Goods</th>
      <th className ="th" scope="col">Best Selling Product</th>
      <th className ="th" scope="col">Actions</th>
    </tr>

  </thead>
  <tbody>
       
          <>
              <tr className="table-data">
      <td className="td">{getbranchdata.Branch_ID}</td>
      <td className="td">{getbranchdata.BranchLocation}</td>
      <td className="td">{getbranchdata.BManager}</td>
      <td className="td">{getbranchdata.Purchases}</td>
      <td className="td">{getbranchdata.ReturnedGoods}</td>
      <td className="td">{getbranchdata.BestSellingProduct}</td>
      <td className ="d-flex justify-content-between">
      <NavLink to ={`/Edit/${getbranchdata._id}`}><button className ="btn btn-edit">Edit</button></NavLink>
       <button className ="btn btn-delete" onClick={()=>deletebranch(getbranchdata._id)}>Delete</button>
      </td>
    </tr>
          </>
    </tbody>  
    </table>
    </div>

)}

export default Details