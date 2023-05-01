import React,{useEffect,useState}from 'react';
import axios from "axios";
import { useParams,useNavigate} from 'react-router-dom';


function Edit() {
    const navigate=useNavigate();
    const {id}=useParams();
 
    const [input, setInput] = useState({
        empid: "",
        name: "",
       email: "",
        address: "",
        salary: "",
        phone: "",
    });

    useEffect(()=>{
        const getAllData=async()=>{
              const res=await axios.get(`http://localhost:8003/emp/single/${id}`);
              setInput(res.data);
        };
        getAllData();
               },[id])
    
    const handleUpdate=async (e) =>{
    e.preventDefault();
    const confirmed = (window.confirm("Are you sure you want to update this Employee?")) 
    if(confirmed){await axios.put(`http://localhost:8003/emp/${id}`, input);
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
                    <h4><b>EMPLOYEE DETAILS</b></h4><br></br>
                    <div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">employee ID</label>
                        <input
                            name="empid"
                            value={input.empid}
                            onChange={handleInputChange}
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">customer Name</label>
                        <input
                            name="name"
                            value={input.name}
                            onChange={handleInputChange}
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">email</label>
                        <input
                            name="email"
                            value={input.email}
                            onChange={handleInputChange}
                            type="email"
                            class="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">employee address</label>
                        <input
                            name="address"
                            value={input.address}
                            onChange={handleInputChange}
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">salary</label>
                        <input
                            name="salary"
                            value={input.salary}
                            onChange={handleInputChange}
                            type="number"
                            class="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">phone No</label>
                        <input
                            name="phone"
                            value={input.phone}
                            onChange={handleInputChange}
                            type="number"
                            class="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    
                    </div>
                </div>
        <div class="my-3">
            <button type="submit" class="btn btn-primary me-5">Update</button>
        </div>
    </form>
    </div>
    )
}

export default Edit