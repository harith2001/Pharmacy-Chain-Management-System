import React, { useState } from 'react'
import{NavLink, useNavigate} from 'react-router-dom'
import './Insert.css'

const Insert = () => {

  const navigate = useNavigate();

  const[inpval,setINP] = useState(
    {
      Branch_ID: "",
      BranchLocation: "",
      BManager: "",
      Purchases: "",
      ReturnedGoods: "",
      BestSellingProduct: "",
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

    const{ Branch_ID, BranchLocation, BManager,Purchases,ReturnedGoods,BestSellingProduct} = inpval;

    const res = await fetch("/branch/Insert", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        Branch_ID, BranchLocation, BManager,Purchases,ReturnedGoods,BestSellingProduct
      })
    });

    const data = await res.json();
    console.log(data);

    if (res.status ===422|| !data){
      alert("error: Insert data ");
      console.log("error");
    }else{
      alert("data added ");
      navigate("/")
      console.log("data added");

    }

  }

  return (
<div className='form-container'>
<form className="form-class">
<div>
  <div className="form-sub-container">
    <label for="BranchID" className="form-label">Branch ID</label>
    <input type="text" className="form-text" value={inpval.Branch_ID} onChange={setdata} id="Branch_ID"/>
  </div>
  <div className="form-sub-container">
    <label for="BranchLocation" className="form-label">Branch Location</label>
    <input type="text" className="form-text" value={inpval.BranchLocation} onChange={setdata} id="BranchLocation"/>
  </div>
  <div className="form-sub-container">
    <label for="BManager" className="form-label">Manager of the Branch</label>
    <input type="text" className="form-text" value={inpval.BManager} onChange={setdata} id="BManager"/>
  </div>
  </div>

  <div className="form-2">
  <div className="form-sub-container">
    <label for="Purchases" className="form-label">All the Purchases made (LKR)</label>
    <input type="number" className="form-text" value={inpval.Purchases} onChange={setdata} id="Purchases"/>
  </div>
  <div className="form-sub-container">
    <label for="ReturnedGoods" className="form-label"> Value of Returned Goods (LKR)</label>
    <input type="number" className="form-text" value={inpval.ReturnedGoods} onChange={setdata} id="ReturnedGoods"/>
  </div>
  <div className="form-sub-container">
    <label for="BestSellingProduct" className="form-label">Best Selling Product last month</label>
    <input type="text" className="form-text" value={inpval.BestSellingProduct} onChange={setdata} id="BestSellingProduct"/>
  </div>
  <div class="btn-container">
  <NavLink to = {`/`}><button className="btn-cancel">Cancel</button></NavLink>
    <button type="submit" onClick={addinpdata} className="btn-submit">Submit</button>
    {/* <NavLink to = {`/`}><button className="btn-cancel">Cancel</button></NavLink> */}
  </div>
  </div>

</form>

    </div>
  )
}

export default Insert