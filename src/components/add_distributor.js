import React, { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
function Add_distributos() {
    const [render, setRender] = useState(false);
   const navigate=useNavigate();
    const [input, setInput] = useState({
        dis_ID: "",
        name: "",
        email: "",
        contact_no: "",
        address: "",
        payments: "",
        ammount: "",
        remark:""
    });
    const [medicines, setMedicines] = useState([{
        name: "",
        quantity: ""
    }]);

    const medicineNames = ["MD 001", "MD 002", "MD 003", "MD 004", "MD 005", "MD 006", "MD 007"];

    const handleAddFields = () => {
        const values = [...medicines];
        values.push({ name: "", quantity: "" });
        setMedicines(values);
    };

    const handleRemoveFields = (index) => {
        const values = [...medicines];
        values.splice(index, 1);
        setMedicines(values);
    };

    const handleMedInputChange = (index, event) => {
        const values = [...medicines];
        values[index][event.target.name] = event.target.value;
        setMedicines(values);


    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInput((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const data = {
        ...input,
        medicines: medicines.map((medicine) => ({ medicine: medicine.name, quantity: medicine.quantity })),
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const requiredFields = ['dis_ID', 'name', 'email', 'contact_no', 'address', 'payments', 'ammount'];

      
        const isFilled = requiredFields.every((field) => Boolean(input[field]));
        
        if (!isFilled) {
        
          alert('Please fill all required fields');
          return;
        }
        try {
            await axios.post("http://localhost:9000/api/v1/distributors", data);
            navigate('/view');
        } catch (error) {
            console.error(error);
            console.log("Patient: ",data);
           
           
        }
        setRender(true)
        setInput({
            dis_ID: "",
            name: "",
            email: "",
            contact_no: "",
            address: "",
            payments: "",
            ammount: ""
        });
       setMedicines([{ medicine: "", quantity: "" }]);
       
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <h4><b>Personel Details</b></h4><br></br>
                    <div class="mb-3 col-lg-6 col-md-6 col-12 mt-5">
                        <label for="exampleInputEmail1" class="form-label">Dis.ID</label>
                        <input
                            name="dis_ID"
                            value={input.dis_ID}
                            onChange={handleInputChange}
                            type="number"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />

                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12 mt-5">
                        <label for="exampleInputPassword1" class="form-label">Name</label>
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
                        <label for="exampleInputPassword1" class="form-label">contact no</label>
                        <input
                            name="contact_no"
                            value={input.contact_no}
                            onChange={handleInputChange}
                            type="number"
                            class="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">address</label>
                        <input
                            name="address"
                            value={input.address}
                            onChange={handleInputChange}
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                        />
                        
                    </div>
                    <h4 class="mt-5"><b>Distribution Details</b></h4><br></br>
                    <label for="exampleInputPassword1" class="form-label">Order Details</label>
                    <div className="medlist mt-5">
                        
                    <div className="overflow-y-scroll">
                        {medicines.map((medicine, index) => (
                            <div key={index} style={{ marginBottom: "20px" }}>
                                <select
                                    name="name"
                                    value={medicines[index].name}
                                    onChange={(event) => handleMedInputChange(index, event)}
                                    style={{ marginRight: "20px" }}
                                >
                                    <option value="" >Select Medicine ID</option>
                                    {medicineNames.map((name, i) => (
                                        <option key={i} value={name}>
                                            {name}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="text"
                                    placeholder="Quantity"
                                    name="quantity"
                                    value={medicines[index].quantity}
                                    onChange={(event) => handleMedInputChange(index, event)}
                                    style={{ marginRight: "20px" }}
                                />
                                <button  class="btn btn-danger me-5" type="button" onClick={() => handleRemoveFields(index)}>
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <button  class="btn btn-primary me-5 mt-2" type="button" onClick={() => handleAddFields()} style={{ marginRight: "20px" ,width: "150px",height:"40px"}}>
                        Add Medicine
                    </button>
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12 mt-5">
                        <label for="exampleInputPassword1" class="form-label">Amount</label>
                        <input
                            name="ammount"
                            value={input.ammount}
                            onChange={handleInputChange}
                            type="number"
                            class="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>



                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input "
                        type="radio"
                        name="payments"
                        value="paied"
                        checked={input.payments === 'paied'}
                        onChange={handleInputChange}
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                        <b>paid</b>
                    </label>
                </div>

                <div class="form-check form-check-inline my-3">
                    <input class="form-check-input"
                        type="radio"
                        name="payments"
                        value="unpaid"
                        checked={input.payments === 'unpaid'}
                        onChange={handleInputChange}
                    />

                    <label class="form-check-label"
                        for="flexRadioDefault2">
                        <b>unpaid</b>
                    </label>
                </div>
                <div>
                        <label for="exampleInputPassword1" class="form-label mt-5">Remark</label>
                        <textarea
                            name="remark"
                            value={input.remark}
                            onChange={handleInputChange}
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                        ></textarea>
                    </div>

                <div class="my-3">
                    <button type="submit" class="btn btn-primary me-5">Submit</button>
                    <Link to={"/"}><button className='btn btn-danger'>Cancel</button></Link>
                </div>




            </form>
        </div>

    );
}

export default Add_distributos;
