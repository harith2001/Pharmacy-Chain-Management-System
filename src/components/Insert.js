import React from 'react'
import { NavLink } from 'react-router-dom'

const Insert = () => {
  return (
    <div className='container'>

<br></br>
<br></br>
<form class="row g-3">
  <div class="col-md-6">
    <label for="MedicineID" class="form-label">Medicine ID</label>
    <input type="text" class="form-control" id="Medicine_ID"/>
  </div>
  <div class="col-md-6">
    <label for="MedicineName" class="form-label">Medicine Name</label>
    <input type="text" class="form-control" id="Name"/>
  </div>
  <div class="col-md-6">
    <label for="MedicineNo" class="form-label">Number of Medicine Available</label>
    <input type="number" class="form-control" id="Medicine_NO"/>
  </div>
  <div class="col-6">
    <label for="ExpireDate" class="form-label">Expire Date</label>
    <input type="date" class="form-control" id="Expire_Date"/>
  </div>
  <div class="col-6">
    <label for="PurchasedDate" class="form-label">Purchased Date</label>
    <input type="date" class="form-control" id="Purchased_Date"/>
  </div>

  <div class="col-12">
    <button type="submit" class="btn btn-primary">Add New Stock </button>
  </div>
</form>

    </div>
  )
}

export default Insert