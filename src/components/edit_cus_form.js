import React,{useEffect,useState}from 'react';
import axios from "axios";
import {  Navigate,useParams,useNavigate} from 'react-router-dom';


function Edit_cus_form() {
    const navigate=useNavigate();
    const {id}=useParams();
 
    const [input, setInput] = useState({
             customerID: "",
        customerName: "",
        customerAge: "",
        customerNumber: "",
        customerEmail: "",
        customerAddress: "",
        customerOrder: ""
    });

    useEffect(()=>{
        const getAllData=async()=>{
              const res=await axios.get(`http://localhost:8003/customer/single/${id}`);
              setInput(res.data);
        };
        getAllData();
               },[id])
    
const handleUpdate=async (e) =>{
    e.preventDefault();
    const confirmed = (window.confirm("Are you sure you want to update this customer?")) 
    if(confirmed){await axios.put(`http://localhost:8003/customer/${id}`, input);
    navigate('/edit');
    }else{
        navigate('/edit');
    }
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setInput({ ...input, [name]: value });
      };
    
  return (
    <div className='container'>
    <form onSubmit={handleUpdate}>
        <div className='row'>
            <h4><b>Customer Details</b></h4><br></br>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputEmail1" class="form-label">customer ID</label>
                <input
                    name="customerID"
                    value={input.customerID}
                    onChange={handleInputChange}
                    type="number"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />

            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">customer Name</label>
                <input
                    name="customerName"
                    value={input.customerName}
                    onChange={handleInputChange}
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">customer Age</label>
                <input
                    name="customerAge"
                    value={input.customerAge}
                    onChange={handleInputChange}
                    type="number"
                    class="form-control"
                    id="exampleInputPassword1"
                />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">customer Email</label>
                <input
                    name="customerEmail"
                    value={input.customerEmail}
                    onChange={handleInputChange}
                    type="email"
                    class="form-control"
                    id="exampleInputPassword1"
                />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">customer Number</label>
                <input
                    name="customerNumber"
                    value={input.customerNumber}
                    onChange={handleInputChange}
                    type="number"
                    class="form-control"
                    id="exampleInputPassword1"
                />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">customeraddress</label>
                <input
                    name="customerAddress"
                    value={input.customerAddress}
                    onChange={handleInputChange}
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                />
            </div>
            
            <div>
                <label for="exampleInputPassword1" class="form-label">customer Orders</label>
                <textarea
                    name="customerOrder"
                    value={input.customerOrder}
                    onChange={handleInputChange}
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                ></textarea>
            </div>

            



        </div>
        

      

        <div class="my-3">
<button type="submit" class="btn btn-primary me-5">Update</button>

</div>








    </form>
</div>
)
}

export default Edit_cus_form