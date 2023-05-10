import React,{useEffect, useState} from 'react'
import {useParams,useNavigate} from "react-router-dom";
import './Insert.css'
import { toast } from 'react-toastify';
import HNavbaar from './HNavbaar';
import VNavbaar from './VNavbaar';
import "./HNavbar.css"
import "./VNavbar.css"



const Edit = () => {

  //const [getstockdata, setStockdata] = useState([]);
  //console.log(getstockdata);

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
          console.log("error");
        }else{
          setINP(data)
          console.log("get data ");
        }
      } 

      useEffect(()=>{
        getdata();
      },[]);

      const updatestock = async(e)=>{
        e.preventDefault();

        const{Medicine_ID, Name, Medicine_NO,Expire_Date,Purchased_Date} = inpval;

        const res2 = await fetch(`/stock/updatestock/${id}`,{

          method:"PATCH",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            Medicine_ID, Name, Medicine_NO,Expire_Date,Purchased_Date
          })

        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422||!data2){
          toast.error("Update Stock Correctlty !")
        }else{
          toast.success("Stock Updated Successfully !")
          navigate("/")
        }
      }

    return (
      <div>
        <HNavbaar/>
        <VNavbaar/>
    <div className='form-container'>
    <form class="form-class">
      <div class="form-sub-container">
        <label for="MedicineID" class="form-label">Medicine ID</label>
        <input type="text" class="form-text" value={inpval.Medicine_ID} onChange={setdata} id="Medicine_ID"/>
      </div>
      <div class="form-sub-container">
        <label for="MedicineName" class="form-label">Medicine Name</label>
        <input type="text" class="form-text" value={inpval.Name} onChange={setdata} id="Name"/>
      </div>
      <div class="form-sub-container">
        <label for="MedicineNo" class="form-label">Number of Medicine Available</label>
        <input type="number" class="form-text" value={inpval.Medicine_NO} onChange={setdata} id="Medicine_NO"/>
      </div>
      <div class="form-sub-container">
        <label for="ExpireDate" class="form-label">Expire Date</label>
        <input type="date" class="form-text" value={inpval.Expire_Date} onChange={setdata} id="Expire_Date"/>
      </div>
      <div class="form-sub-container">
        <label for="PurchasedDate" class="form-label">Purchased Date</label>
        <input type="date" class="form-text" value={inpval.Purchased_Date} onChange={setdata} id="Purchased_Date"/>
      </div>
    <br></br>
      <div class="btn-update-container">
        <button type="submit" onClick={updatestock} class="btn-update">Update Stock </button>
      </div>
    </form>
    
        </div>
        </div>
      )
    }

export default Edit