import React, { useState } from 'react'
import{NavLink, useNavigate} from 'react-router-dom'
import './Insert.css'
import { toast } from 'react-toastify';

const Insert = () => {

  const navigate = useNavigate();

  const[inpval,setINP] = useState(
    {
      Medicine_ID :"",
      Name:"",
      Medicine_NO:"",
      Expire_Date:"",
      Purchased_Date:""
    }
  )
  
  const setdata = (e) =>{
    console.log(e.target.value);
    const {id,value} = e.target;
    setINP((preval) =>{
      return{
        ...preval,
        [id]:value
      }
    })
  }
  
  const addinpdata = async(e)=>{
    e.preventDefault();

    const{ Medicine_ID, Name, Medicine_NO,Expire_Date,Purchased_Date} = inpval;

    const res = await fetch("/stock/Insert", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        Medicine_ID, Name, Medicine_NO,Expire_Date,Purchased_Date
      })
    });

    const data = await res.json();
    console.log(data);

    if (res.status ===422|| !data){
      toast.error("Insert Data !");
      //console.log("error");
    }else{
      toast.success("Stock Added Successfully !");
      navigate("/")
      //console.log("data added");

    }

  }

  return (
    <div className='form-container'>
<form className="form-class">
  <div className="form-sub-container">
    <label for="MedicineID" className="form-label">Medicine ID</label>
    <input type="text" placeholder="MD..."className="form-text" value={inpval.Medicine_ID} onChange={setdata} id="Medicine_ID"/>
  </div>
  <div className="form-sub-container">
    <label for="MedicineName" className="form-label">Medicine Name</label>
    <input type="text" className="form-text" value={inpval.Name} onChange={setdata} id="Name"/>
  </div>
  <div className="form-sub-container">
    <label for="MedicineNo" className="form-label">Number of Medicine Available (units)</label>
    <input type="number" className="form-text" value={inpval.Medicine_NO} onChange={setdata} id="Medicine_NO"/>
  </div>
  <div className="form-sub-container">
    <label for="ExpireDate" className="form-label">Expire Date</label>
    <input type="date" className="form-text" value={inpval.Expire_Date} onChange={setdata} id="Expire_Date"/>
  </div>
  <div className="form-sub-container">
    <label for="PurchasedDate" className="form-label">Purchased Date</label>
    <input type="date" className="form-text" value={inpval.Purchased_Date} onChange={setdata} id="Purchased_Date"/>
  </div>
<br></br>
  <div className="btn-container">
    <button type="submit" onClick={addinpdata} className="btn-submit">SUBMIT</button>
    <NavLink to = {`/`}><button className="btn-cancel">CANCEL</button></NavLink>
  </div>
</form>

    </div>
  )
}

export default Insert