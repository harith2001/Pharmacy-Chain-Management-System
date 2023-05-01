import React,{useState,useEffect}from 'react';
import axios from "axios";

function Home() {
    const[render,setRender]=useState(false);
    const [distributors,setDistributors]=useState([]);
    const [value, setValue] = useState("");


useEffect(()=>{
       const getAllData=async()=>{
             const res=await axios.get("http://localhost:9000/api/v1/distributors");
             setDistributors(res.data);
       };
       getAllData();
              },[render]);

              const handleSearch = async (e) => {
                e.preventDefault();
                try {
                  const res = await axios.get(`http://localhost:9000/api/v1/distributors/search?name=${value}`);
                  setDistributors(res.data);
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
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
              
<h1 class="text-center">Distributor Details</h1>


                <table class="table">
                    <thead>
                        <tr style={{ backgroundColor:'black' , color:'white'  }}>
                            <th scope="col">No</th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact No</th>
                            <th scope="col">Address</th>
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
                           
                        </tr>

                        )
                       })}
                        
                    </tbody>
                </table>
            </div>
           
       
        
    )
}

export default Home