import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Link, Navigate} from "react-router-dom";

function Edit_customer() {
    const[render,setRender]=useState(false); 
       const [customers,setCustomers]=useState([]);

       
useEffect(()=>{
       const getAllData=async()=>{
             const res=await axios.get("http://localhost:8003/customer");
             setCustomers(res.data);
       };
       getAllData();
              },[])

   const handleDelete=async(id)=>{
    const confirmed = window.confirm("Are you sure you want to delete this distributor?");
    if(confirmed){await axios.delete(`http://localhost:8003/customer/${id}`);
    const newCustomers=customers.filter((item)=>{
        return item._id!==id;
        
    });
    setCustomers(newCustomers);
}else{
    Navigate('/edit');
}
    
   };           
  return (
    <div className="mt-5">
    <div className='container'>
       

    <table className="table">
  <thead >
  <tr style={{ backgroundColor:'#264348' , color:'white'  }}>
      <th scope="col">No</th>
      <th scope="col">customer ID</th>
      <th scope="col">customer Name</th>
      <th scope="col">customer Age</th>
      <th scope="col">customer phone</th>
      <th scope="col">Customer Email</th>
      <th scope="col">Customer Address</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
               
              {customers && customers.map((customer,index)=>{
                        return (
                          <tr key={customer._id}>
                          <td>{index + 1}</td>
                      <td>{customer.customerID}</td>
                      <td>{customer.customerName}</td>
                      <td>{customer.customerAge}</td>
                      <td>{customer.customerNumber}</td>
                      <td>{customer.customerEmail}</td>
                      <td>{customer.customerAddress}</td>
                            <td> <Link to={`/edit_cus_form/${customer._id}`}>
                            <button className='btn  btn-success'>Edit</button>
                          </Link></td>
                           
                            <td> <button onClick={()=>handleDelete(customer._id)} className='btn  btn-danger'>Delete</button></td>
                        </tr>

                        )
                       })}
                   
                     

                
            </tbody>
        </table>
    </div>

</div>
  )
}

export default Edit_customer