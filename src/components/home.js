import React,{useState,useEffect}from 'react';
import axios from "axios";

function Home() {
    const[render,setRender]=useState(false);
    const [customers,setCustomers]=useState([]);
    const [value, setValue] = useState("");


useEffect(()=>{
       const getAllData=async()=>{
             const res=await axios.get("http://localhost:8003/customer");
             setCustomers(res.data);
       };
       getAllData();
              },[render]);

          const handleSearch = async (e) => {
                e.preventDefault();
                try {
                  const res = await axios.get(`http://localhost:8003/customer/search?customerName=${value}`);
                  setCustomers(res.data);
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
              
<h1 class="text-center">Customer Details</h1>


                <table class="table">
                    <thead>
                        <tr style={{ backgroundColor:'#264348' , color:'white'  }}>
                            <th scope="col">No</th>
                            <th scope="col">Customer ID</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Customer Phone</th>
                            <th scope="col">Customer order</th>
                        </tr>
                    </thead>
                    <tbody>
                       {customers && customers.map((customer,index)=>{
                        return (
                            <tr key={customer._id}>
                                <td>{index + 1}</td>
                            <td>{customer.customerID}</td>
                            <td>{customer.customerName}</td>
                            <td>{customer.customerNumber}</td>
                            <td>{customer.customerOrder}</td>
                           
                        </tr>

                        )
                       })}
                        
                    </tbody>
                </table>
            </div>
           
       
        
    )
}

export default Home