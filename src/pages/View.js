import React, { useState, useEffect,useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./FormDetails.css"

function View() {
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

    const handelDelete = async (id) => {
        await axios.delete(`http://localhost:8003/medicines/${id}`);
        const newMedicines = medicines.filter((item) => {
            return item._id !== id;
        });
        setMedicines(newMedicines);
    };
    return (
        <>
            <div className="table-container">
                        <table class="table">
                            <thead>
                                <tr className="table-head">
                                <th className="th" scope="col">Medicine ID</th>
                                    <th className="th" scope="col">Brand Name</th>
                                    <th className="th" scope="col">Generic Name</th>
                                    <th className="th" scope="col">Category</th>
                                    <th className="th" scope="col">Manufacturer</th>
                                    <th className="th" scope="col">Stock</th>
                                    <th className="th" scope="col">Exp.Notation</th>
                                    <th className="th" scope="col">Price </th>
                                    <th className="th" scope="col">Discount</th>
                                    <th className="th" scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {medicines && medicines.map((medicine) => {
                                    return (
                                        <tr key={medicine._id}>
                                            <td className="td">{medicine.medID}</td>
                                            <td className="td">{medicine.brandName}</td>
                                            <td className="td">{medicine.genericName}</td>
                                            <td className="td">{medicine.catgType}</td>
                                            <td className="td">{medicine.manufacturer}</td>
                                            <td className="td">{medicine.stock}</td>
                                            <td className="td">{medicine.expNotation}</td>
                                            <td className="td">{medicine.price}</td>
                                            <td className="td">{medicine.discount}</td>
                                            <td className="td">
                                                <Link to={`/edit/${medicine._id}`}>
                                                    <button className="btn btn-edit">Edit</button>
                                                </Link>
                                                <button
                                                    onClick={() => handelDelete(medicine._id)}
                                                    className="btn btn-delete"
                                                >
                                                    Delete
                                                </button>
                                            </td>

                                            {/* <td className="td">
                                                <button
                                                    onClick={() => handelDelete(medicine._id)}
                                                    className="btn btn-danger"
                                                >
                                                    Delete
                                                </button>
                                            </td> */}
                                        </tr>
                                    );
                                })}

                            </tbody>
                        </table>
                               

                    </div>

        </>
    );
};

export default View;