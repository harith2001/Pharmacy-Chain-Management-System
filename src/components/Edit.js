import React,{useState} from 'react'

const Edit = () => {

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


  return (
    <div className='container'>

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
        <button type="submit" class="btn btn-primary">Add New Stock </button>
      </div>
    </form>
    
        </div>
      )
    }

export default Edit