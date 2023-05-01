import React, { useState, useEffect,useRef } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import "./FormDetails.css"
import "./HNavbar.css"

function Home() {
    const [medicines, setMedicines] = useState([]);
    const[render,setRender]=useState(false);
    const [filterOption, setFilterOption] = useState("search_by_medID");
    const [searchQuery, setSearchQuery] = useState("");
     
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
    };

    const handelDelete = async (id) => {
        await axios.delete(`http://localhost:8003//medicines/${id}`);
        const newMedicines = medicines.filter((item) => {
            return item._id !== id;
        });
        setMedicines(newMedicines);
    };
                //PDF Generate
                const componentPDF = useRef();
                const generatePDF = useReactToPrint({
                    content:()=> componentPDF.current,
                    documentTitle:"Medicine Details",
                    onAfterPrint:()=>alert("Data Printed in PDF")
                });

                // const handleSearch = async (e) => {
                //     e.preventDefault();
                
                //     if (!searchQuery) {
                //       getAllData(e);
                //       return;
                //     }
                
                //     let body = {};
                
                //     if (filterOption == "search_by_medID") {
                //       body = {
                //         medID: searchQuery,
                //       };
                //     } 
                    
                
                //     console.log("Body", body);
                
                //     try {
                //       const response = await fetch(
                //         `http://localhost:8001/api/v1/medicines/search`,
                //         {
                //           method: "POST",
                //           body: JSON.stringify({ query: body }),
                //           headers: {
                //             "Content-type": "application/json",
                //           },
                //         }
                //       );
                
                //       const json = await response.json();
                //       console.log("Search", json);
                //       setMedicines(json);
                //     } catch (error) {}
                //   };
                

                
    return (
        <>
            <div className="table-container">
            {/* <form className="d-flex" role="search">
            <input
                type="search"
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                }}
                className="search-bar"
                aria-label="Search"
                />
            <button className="btn-search" onClick={handleSearch}>
                Search
            </button>
        
      </form> */}
            <div ref ={componentPDF} style={{width:'100%'}}>
                <div>
                    <div>
                        {/* <div style={{ backgroundColor: "green" }}>
                            <h5>Medicine And Drug Information </h5>
                        </div> */}
                    </div>
                    <div>
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
                
                                </tr>
                            </thead>
                            <tbody>
                                {medicines && medicines.map((medicine) => {
                                    return (
                                        <tr className="table-data" key={medicine._id}>
                                            <td className="td">
                                                <NavLink to={`View/${medicine._id}`}>
                                                    {medicine.medID}

                                                </NavLink>
                                            </td>
                                            <td className="td">{medicine.brandName}</td>
                                            <td className="td">{medicine.genericName}</td>
                                            <td className="td">{medicine.catgType}</td>
                                            <td className="td">{medicine.manufacturer}</td>
                                            <td className="td">{medicine.stock}</td>
                                            <td className="td">{medicine.expNotation}</td>
                                            <td className="td">{medicine.price}</td>
                                            <td className="td">{medicine.discount}</td>
                            
                                        </tr>
                                    );
                                })}

                            </tbody>
                        </table>
                        </div>
                        </div>
 
                    </div>
                    <button className='PDF' onClick={generatePDF}>Generate PDF</button>
                                {/* <Link to={`/Insert`}>
                                    <button className="btn btn-primary">Add New Medicine</button>
                                </Link> */}
            </div>
                
                  
        </>
    );


  
};

export default Home;