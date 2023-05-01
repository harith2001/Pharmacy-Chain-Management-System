import React, { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
function Add_customer() {
    const [render, setRender] = useState(false);

    const [input, setInput] = useState({
        customerID: "",
        customerName: "",
        customerAge: "",
        customerNumber: "",
        customerEmail: "",
        customerAddress: "",
        customerOrder: ""
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.customerID || !input.customerName|| !input.customerEmail || !input.customerAge
             || !input.customerNumber || !input.customerAddress|| !input.customerOrder ) {
            alert("Please fill in all fields");
            return;
        }

       

        await axios.post("http://localhost:8003/customer", input);
        console.log("customer:",input)
        setRender(true)
        setInput({
            customerID: "",
            customerName: "",
            customerAge: "",
            customerNumber: "",
            customerEmail: "",
            customerAddress: "",
            customerOrder: ""
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
  <button type="submit" class="btn btn-primary me-5">Submit</button>
  <Link to={"/"}><button className='btn btn-warning'>Cancel</button></Link>
</div>








            </form>
        </div>
    )
}

export default Add_customer