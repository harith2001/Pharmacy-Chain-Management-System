import React,{useState,useEffect,useRef} from 'react'
import axios from "axios";
import {useReactToPrint} from "react-to-print";
function View_details() {
      const[disDatas,setDisData]=useState([]);
      const[render,setRender]=useState(false);
      const [value, setValue] = useState("");


      useEffect(()=>{
        const getAllData=async()=>{
            const res=await axios.get("http://localhost:9000/api/v1/distributors");
            setDisData(res.data);
        };
        getAllData()
      },[render]);

      const handleSearch = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.get(`http://localhost:9000/api/v1/distributors/search?name=${value}`);
          setDisData(res.data);
          setValue("");
        } catch (error) {
          console.log(error);
        }
      };
      const componentPDF=useRef();
const generatePDF=useReactToPrint({
    content: ()=>componentPDF.current,
    documentTitle:"User Data",
   
});

    return (

        <div class='container'>
             <form class="d-flex" role="search"   onSubmit={handleSearch}>
        <input class="form-control me-2"
         type="search"
          placeholder="Search Name" 
          aria-label="Search"
          value={value}
          onChange={(e)=>setValue(e.target.value)}/>
        <button class="btn btn-primary" type="submit">Search</button>
       
      </form>
      <button class="btn btn-success" onClick={generatePDF} >Print Report</button>
<div ref={componentPDF} style={{width:'100%'}}>
            <h1>Distributor Details</h1>
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
                {disDatas&& disDatas.map((disData,index)=>{
                        return (
                            <tr key={disData._id}>
                                  <td>{index + 1}</td>
                            <td>{disData.dis_ID}</td>
                            <td>{disData.name}</td>
                            <td>{disData.email}</td>
                            <td>{disData.contact_no}</td>
                            <td>{disData.address}</td>
                           
                        </tr>

                        )
                       })}
                        
                </tbody>
            </table>
            <br></br>
            <div>
<h1>Distribution Details</h1>
        <table class="table">
          
            <thead>
            <tr style={{ backgroundColor:'black' , color:'white'  }}>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Order Details</th>
                            <th scope="col">Ammount</th>
                            <th scope="col">Payment Status</th>
                            <th scope="col">Remark</th>
                        </tr>
            </thead>
            <tbody>
            {disDatas&& disDatas.map((disData)=>{
                        return (
                            <tr key={disData._id} className={disData.payments === 'unpaid' ? 'table-danger' : disData.payments === 'paied' ? 'table-primary' : ''}>
                            <td>{disData.dis_ID}</td>
                            <td>{disData.name}</td>
                            <td>{disData.medicines.map(medicine=>(
                              <div key={medicine._id} style={{ display: 'flex', flexDirection: 'row' }}>
                                 <p> {medicine.medicine}</p>
                                 <p>: {medicine.quantity}</p>
                              </div>
                            ))}</td>
                            <td>{disData.ammount}</td>
                            <td>{disData.payments}</td>
                            <td>{disData.remark}</td>
                           
                        </tr>

                        )
                       })}
            </tbody>
        </table>
        </div>
        </div>

        </div>






    )
}

export default View_details