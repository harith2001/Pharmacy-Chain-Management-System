import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Link, Navigate} from "react-router-dom";

function View() {
    
       const [employees,setEmployees]=useState([]);

       
useEffect(()=>{
       const getAllData=async()=>{
             const res=await axios.get("http://localhost:8003/emp");
             setEmployees(res.data);
             console.log("employee :",setEmployees)
       };
       getAllData();
              },[])

   const handleDelete=async(id)=>{
    const confirmed = window.confirm("Are you sure you want to delete this employee?");
    if(confirmed){await axios.delete(`http://localhost:8003/emp/${id}`);
    const newEmployee=employees.filter((item)=>{
        return item._id!==id;
        
    });
    setEmployees(newEmployee);
}else{
    Navigate('/edit');
}
    
   };           
  return (
    
    <div className="mt-5">
    <div className='container'> 
    <h2 class="text-center"> <b>EMPLOYEE DETAILS </b></h2>
    <table className="table">
    <thead >
      <tr style={{ backgroundColor:'#0d0d0d' , color:'white'  }}>
              <th scope="col">No</th>
              <th scope="col">Employee ID</th>
              <th scope="col">Employee Name</th>
              <th scope="col">Employee email</th>
              <th scope="col">Employee address</th>
              <th scope="col">salary</th>
              <th scope="col"> phone No</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>

  <tbody>
               
              {employees && employees.map((employee,index)=>{
                        return (
                          <tr key={employee._id}>
                            <td>{index + 1}</td>
                            <td>{employee.empid}</td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.address}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.phone}</td>
                           
                     
                            <td> <Link to={`/edit_emp_form/${employee._id}`}>
                            <button className='btn btn-primary'>Edit</button>
                          </Link></td>
                           
                            <td> <button onClick={()=>handleDelete(employee._id)} className='btn  btn-danger'>Delete</button></td>
                        </tr>

                        )
                       })}
            </tbody>
        </table>
        
    </div>

</div>

  )
}

export default View