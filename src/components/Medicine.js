import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Medicine() {
    const [render, setRender] = useState(false);
    const [input, setInput] = useState({
        dis_ID: "",
        name: "",
        email: "",
        contact_no: "",
        address: "",
        payments: "",
        ammount: ""
    });
    const [medicines, setMedicines] = useState([{
        name: "",
        quantity: ""
    }]);

    const medicineNames = ["Medicine A", "Medicine B", "Medicine C", "Medicine D"];

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
        try {
            await axios.post("http://localhost:9000/api/v1/distributors", data);
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
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
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
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
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
                    <h4><b>Distribution Details</b></h4><br></br>
                    <div className="overflow-y-scroll">
                        {medicines.map((medicine, index) => (
                            <div key={index} style={{ marginBottom: "20px" }}>
                                <select
                                    name="name"
                                    value={medicines[index].name}
                                    onChange={(event) => handleMedInputChange(index, event)}
                                    style={{ marginRight: "20px" }}
                                >
                                    <option value="">Select a medicine</option>
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
                                <button type="button" onClick={() => handleRemoveFields(index)}>
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <button type="button" onClick={() => handleAddFields()} style={{ marginRight: "20px" }}>
                        Add Medicine
                    </button>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Ammount</label>
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

                <div class="my-3">
                    <button type="submit" class="btn btn-primary me-5">Submit</button>
                    <Link to={"/"}><button className='btn btn-warning'>Cancel</button></Link>
                </div>




            </form>
        </div>

    );
}

export default Medicine;
