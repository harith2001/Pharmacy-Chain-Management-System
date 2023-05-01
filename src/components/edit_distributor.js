import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Link, Navigate} from "react-router-dom";

function Edit_distributor() {
    const[render,setRender]=useState(false); 
       const [distributors,setDistributors]=useState([]);

       
useEffect(()=>{
       const getAllData=async()=>{
             const res=await axios.get("http://localhost:9000/api/v1/distributors");
             setDistributors(res.data);
       };
       getAllData();
              },[])

   const handleDelete=async(id)=>{
    const confirmed = window.confirm("Are you sure you want to delete this distributor?");
    if(confirmed){await axios.delete(`http://localhost:9000/api/v1/distributors/${id}`);
    const newDistributors=distributors.filter((item)=>{
        return item._id!==id;
        
    });
    setDistributors(newDistributors);
}else{
    Navigate('/edit');
}
    
   };           
  return (
    <div className="mt-5">
    <div className='container'>
       

    <table className="table">
  <thead >
  <tr style={{ backgroundColor:'black' , color:'white'  }}>
      <th scope="col">No</th>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Contact No</th>
      <th scope="col">Address</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
               
              {distributors && distributors.map((distributor,index)=>{
                        return (
                            <tr key={distributor._id}>
                                  <td>{index + 1}</td>
                            <td>{distributor.dis_ID}</td>
                            <td>{distributor.name}</td>
                            <td>{distributor.email}</td>
                            <td>{distributor.contact_no}</td>
                            <td>{distributor.address}</td>
                            <td> <Link to={`/edit_form/${distributor._id}`}>
                            <button className='btn  btn-success'>Edit</button>
                          </Link></td>
                           
                            <td> <button onClick={()=>handleDelete(distributor._id)} className='btn  btn-danger'>Delete</button></td>
                        </tr>

                        )
                       })}
                   
                     

                
            </tbody>
        </table>
    </div>

</div>
  )
}

export default Edit_distributor