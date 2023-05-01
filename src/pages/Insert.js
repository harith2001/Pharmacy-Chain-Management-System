import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"
import "./Form.css"

function Insert() {
    const navigate = useNavigate()
    const [medicines, setMedicines] = useState([]);
    const[render,setRender]=useState(false);
     
    const [input, setInput] = useState({
        medID: "",
        brandName: "",
        genericName: "",
        catgType: "",
        manufacturer: "",
        stock: "",
        expNotation: "",
        price: "",
        discount: "",

    });
    useEffect(() => {
        const getAllData = async () => {
            const res = await axios.get("http://localhost:8003/medicines");
            setMedicines(res.data);

        };
        getAllData();
    }, [render]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8003/medicines", input);
        setRender(true)
        setInput({
            medID: "",
            brandName: "",
            genericName: "",
            catgType: "",
            manufacturer: "",
            stock: "",
            expNotation: "",
            price: "",
            discount: "",
        });

        navigate("/");
    };

    return (
            <div className="form-container-class">
                    <div className="form-container">
                        <form className="form-class" onSubmit={handleSubmit}>
                        <div>
                            <div class="form-sub-container">
                                <div>
                                <label for="exampleInputId" class="form-label">Medicine ID</label>
                                </div>
                                <div>
                                <input
                                    name="medID"
                                    value={input.name}
                                    onChange={(e) =>
                                        setInput({ ...input, [e.target.name]: e.target.value })
                                    }
                                    type="text"
                                    className="form-text"
                                    id="exampleInputMedicineId"
                                />
                                </div>
                            </div>


                            <div class="form-sub-container">
                                <div>
                                <label for="exampleInputMedicineName" class="form-label">Brand Name</label>
                                </div>

                                <div>
                                <input
                                    name="brandName"
                                    value={input.name}
                                    onChange={(e) =>
                                        setInput({ ...input, [e.target.name]: e.target.value })
                                    }
                                    type="text"
                                    className="form-text"
                                    id="exampleInputMedicineName"
                                />
                                </div>
                            </div>

                            <div class="form-sub-container">
                                <div>
                                <label for="exampleInputGenericName" class="form-label">Generic Name</label>
                                </div>
                                <div>
                                <input
                                    name="genericName"
                                    value={input.name}
                                    onChange={(e) =>
                                        setInput({ ...input, [e.target.name]: e.target.value })
                                    }
                                    type="text"
                                    className="form-text"
                                    id="exampleInputGenericName"
                                />
                                </div>
                            </div>

                            <div class="form-sub-container">
                                <div>
                                <label for="exampleInputCategory" class="form-label">Category</label>
                                </div>

                                <div>
                                <input
                                    name="catgType"
                                    value={input.name}
                                    onChange={(e) =>
                                        setInput({ ...input, [e.target.name]: e.target.value })
                                    }
                                    type="text"
                                    className="form-text"
                                    id="exampleInputCategory"
                                />
                                </div>
                            </div>

                            <div class="form-sub-container">
                                <div>
                                <label for="exampleInputManufacturer" class="form-label">Manufacturer</label>
                                </div>
                                <div>
                                <input
                                    name="manufacturer"
                                    value={input.name}
                                    onChange={(e) =>
                                        setInput({ ...input, [e.target.name]: e.target.value })
                                    }
                                    type="text"
                                    className="form-text"
                                    id="exampleInputManufacturer"
                                />
                                </div>
                            </div>
                            </div>

                            <div className="form-container form-container-1">
                            <div class="form-sub-container">
                                <div>
                                <label for="exampleInputStock" class="form-label">Stock (Units)</label>
                                </div>
                                <div>
                                <input
                                    name="stock"
                                    value={input.name}
                                    onChange={(e) =>
                                        setInput({ ...input, [e.target.name]: e.target.value })
                                    }
                                    type="number"
                                    className="form-text"
                                    id="exampleInputStock"
                                />
                                </div>
                            </div>

                            <div class="form-sub-container">
                                <div>
                                <label for="exampleInputExp" class="form-label">Exp. Notation (Days)</label>
                                </div>
                                <div>
                                <input
                                    name="expNotation"
                                    value={input.name}
                                    onChange={(e) =>
                                        setInput({ ...input, [e.target.name]: e.target.value })
                                    }
                                    type="number"
                                    className="form-text"
                                    id="exampleInputExp"
                                />
                                </div>
                            </div>

                            <div class="form-sub-container">
                                 <div>
                                <label for="exampleInputPrice" class="form-label">Price (LKR)</label>
                                </div>
                                <div>
                                <input
                                    name="price"
                                    value={input.name}
                                    onChange={(e) =>
                                        setInput({ ...input, [e.target.name]: e.target.value })
                                    }
                                    type="number"
                                    className="form-text"
                                    id="exampleInputPrice"
                                />
                                </div>
                            </div>

                            <div class="form-sub-container">
                                <div>
                                <label for="exampleInputDiscount" class="form-label">Discount (%)</label>
                                </div>
                                <div>
                                <input
                                    name="discount"
                                    value={input.name}
                                    onChange={(e) =>
                                        setInput({ ...input, [e.target.name]: e.target.value })
                                    }
                                    type="number"
                                    className="form-text"
                                    id="exampleInputDiscount"
                                />
                                </div>
                            </div>

                            <button onSubmit={handleSubmit} type="submit" class="btn-submit mt-5">Submit</button>
                        </div>
                        </form>
                    </div>

            </div>
    );
};

export default Insert;