import React,{useEffect, useState} from 'react'
import {useParams,useNavigate} from "react-router-dom";
import './Insert.css'

const Edit = () => {

  //const [getstockdata, setStockdata] = useState([]);
  //console.log(getstockdata);

  const navigate = useNavigate();

    const[inpval,setINP] = useState(
        {
          Medicine_ID :"",
          Name:"",
          Address:"",
          Email:"",
          Contact_number:"",
          Amount:"",
          Price:"",
          Date:""
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
          setINP(data)
          console.log("get data ");
        }
      } 

      useEffect(()=>{
        getdata();
      },[]);
      // update supplier data
      const updatesupplier = async(e)=>{
        e.preventDefault();

        const{Medicine_ID, Name, Address, Email, Contact_number, Amount, Price, Date} = inpval;

        const res2 = await fetch(`/supplier/updatesupplier/${id}`,{

          method:"PATCH",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            Medicine_ID, Name, Address, Email, Contact_number, Amount, Price, Date
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
    <div className='form-container'>
    <form className="form-class">
    <div>
      <div className="form-sub-container">
        <label for="MedicineID" className="form-label">Medicine ID</label>
        <input type="text" className="form-text" value={inpval.Medicine_ID} onChange={setdata} id="Medicine_ID"/>
      </div>
      <div className="form-sub-container">
        <label for="Name" className="form-label">Supplier Name</label>
        <input type="text" className="form-text" value={inpval.Name} onChange={setdata} id="Name"/>
      </div>
      <div className="form-sub-container">
        <label for="Address" className="form-label">Address</label>
        <input type="text" className="form-text" value={inpval.Address} onChange={setdata} id="Address"/>
      </div>
      <div className="form-sub-container">
        <label for="Email" className="form-label">Email Address</label>
        <input type="email" className="form-text" value={inpval.Email} onChange={setdata} id="Email"/>
      </div>
      <div className="form-sub-container">
        <label for="Contact_number" className="form-label">Contact number</label>
        <input type="number" className="form-text" value={inpval.Contact_number} onChange={setdata} id="Contact_number"/>
      </div>
      </div>
      
      <div className="form-2">
      <div className="form-sub-container">
        <label for="Amount" className="form-label">Amount</label>
        <input type="number" className="form-text" value={inpval.Amount} onChange={setdata} id="Amount"/>
      </div>
      <div className="form-sub-container">
        <label for="Price" className="form-label">Price</label>
        <input type="number" className="form-text" value={inpval.Price} onChange={setdata} id="Price"/>
      </div>
      <div className="form-sub-container">
        <label for="Date" className="form-label">Date</label>
        <input type="date" className="form-text" value={inpval.Date} onChange={setdata} id="Date"/>
      </div>
      <div className="btn-update-container">
        <button type="submit" onClick={updatesupplier} className="btn btn-update">Update </button>
      </div>

      </div>
    </form>
    
        </div>
      )
    }

export default Edit