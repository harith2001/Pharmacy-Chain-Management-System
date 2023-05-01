import React,{useState,useEffect,useRef} from 'react'
import axios from "axios";
import {useReactToPrint} from "react-to-print";


function View_details() {
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

            const componentPDF=useRef();
            const generatePDF=useReactToPrint({
                content: ()=>componentPDF.current,
                documentTitle:"customer Data",
                onAfterPrint:()=>alert("Data saved in PDF")
            });
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
    <button class="btn btn-success" onClick={generatePDF} >Print Report</button>
<div ref={componentPDF} style={{width:'100%'}}>
            
<h1 class="text-center">Customer Details</h1>


              <table class="table">
                  <thead>
                      <tr style={{ backgroundColor:'#264348' , color:'white'  }}>
                          <th scope="col">No</th>
                          <th scope="col">Customer ID</th>
                          <th scope="col">Customer Name</th>
                          <th scope="col">Customer age</th>
                          <th scope="col">Customer Phone</th>
                          <th scope="col">Customer Email</th>
                          <th scope="col">Customer Address</th>
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
                          <td>{customer.customerAge}</td>
                          <td>{customer.customerNumber}</td>
                          <td>{customer.customerEmail}</td>
                          <td>{customer.customerAddress}</td>
                          <td>{customer.customerOrder}</td>
                         
                      </tr>

                      )
                     })}
                      
                  </tbody>
              </table>
          </div>
          </div>
         
         
     
      
  )
}

export default View_details