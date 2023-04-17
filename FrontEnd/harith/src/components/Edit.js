import React,{useEffect, useState} from 'react'
import {useParams,useNavigate} from "react-router-dom";

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

        const res2 = await fetch(`/updatestock/${id}`,{

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
          alert("fill the data")
        }else{
          alert("data added")
          navigate("/")
        }
      }

    return (
    <div className='edit'>

    <br></br>
    <br></br>
    <form class="row g-3">
      <div class="col-md-6">
        <label for="MedicineID" class="form-label">Medicine ID</label>
        <input type="text" class="form-control" value={inpval.Medicine_ID} onChange={setdata} id="Medicine_ID"/>
      </div>
      <div class="col-md-6">
        <label for="MedicineName" class="form-label">Medicine Name</label>
        <input type="text" class="form-control" value={inpval.Name} onChange={setdata} id="Name"/>
      </div>
      <div class="col-md-6">
        <label for="MedicineNo" class="form-label">Number of Medicine Available</label>
        <input type="number" class="form-control" value={inpval.Medicine_NO} onChange={setdata} id="Medicine_NO"/>
      </div>
      <div class="col-6">
        <label for="ExpireDate" class="form-label">Expire Date</label>
        <input type="date" class="form-control" value={inpval.Expire_Date} onChange={setdata} id="Expire_Date"/>
      </div>
      <div class="col-6">
        <label for="PurchasedDate" class="form-label">Purchased Date</label>
        <input type="date" class="form-control" value={inpval.Purchased_Date} onChange={setdata} id="Purchased_Date"/>
      </div>
    <br></br>
      <div class="col-12">
        <button type="submit" onClick={updatestock} class="btn btn-primary">Update Stock </button>
      </div>
    </form>
    
        </div>
      )
    }

export default Edit