import React,{useState,useEffect}from 'react';
import axios from "axios";

function Home() {
    const[render]=useState(false);
    const [employees,setEmployees]=useState([]);
    const [value, setValue] = useState("");


useEffect(()=>{
       const getAllData=async()=>{
             const res=await axios.get("http://localhost:8003/emp");
             setEmployees(res.data);
       };
       getAllData();
              },[render]);

          const handleSearch = async (e) => {
                e.preventDefault();
                try {
                  const res = await axios.get(`http://localhost:8003/emp/search?name=${value}`);
                  setEmployees(res.data);
                  setValue("");
                } catch (error) {
                  console.log(error);
                }
              };
    return (
       
            <div className='container' >
         
      <form class="d-flex" role="search"   onSubmit={handleSearch}>
        <input class="form-control me-2"
         type="search"
          placeholder="Search Name" 
          aria-label="Search"
          value={value}
          onChange={(e)=>setValue(e.target.value)}/>
        <button class="btn btn-outline-success" type="submit">SEARCH</button>
      </form>
      
      <h2 class="text-center"><b>EMPLOYEE DETAILS</b></h2>
            
                <table class="table">
                    <thead>
                        <tr style={{ backgroundColor:'#0d0d0d' , color:'white'  }}>
                            <th scope="col">No</th>
                            <th scope="col">Employee ID</th>
                            <th scope="col">Employee Name</th>
                            <th scope="col">Employee email</th>
                            <th scope="col">Employee address</th>
                            <th scope="col">salary</th>
                            <th scope="col"> phone No</th>
                        </tr>
                    </thead>
                    <tbody>
                       {employees&& employees.map((employee,index)=>{
                        return (
                            <tr key={employee._id}>
                                <td>{index + 1}</td>
                            <td>{employee.empid}</td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.address}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.phone}</td>
                           
                        </tr>

                        )
                       })}
                        
                    </tbody>
                    
                </table>
                
            </div>
           
       
        
    )
}

export default Home