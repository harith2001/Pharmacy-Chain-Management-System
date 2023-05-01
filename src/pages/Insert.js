import React, { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
function Insert() {
    const [ setRender] = useState(false);

    const [input, setInput] = useState({
       empid: "",
        name: "",
       email: "",
        address: "",
        salary: "",
        phone: "",
       
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.empid || !input.name|| !input.email || !input.address
             || !input.salary || !input.phone) {
            alert("Please fill in all fields");
            return;
        }

       
        await axios.post("http://localhost:8003/emp", input);
        console.log("employee:",input)
        setRender(true)
        setInput({
            empid: "",
            name: "",
           email: "",
            address: "",
            salary: "",
            phone: "",
        })

    };


    const handleInputChange = event => {
        const { name, value } = event.target;
        setInput(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };
    


    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <h2><b>INSERT NEW EMPLOYEE</b></h2><br></br>
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
            <button type="submit" class="btn btn-success me-5">Submit</button>
            <Link to={"/"}><button className='btn btn-warning'>Cancel</button></Link>
        </div>

            </form>
        </div>
    )
}

export default Insert