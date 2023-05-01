import React, {useEffect, useState} from "react";
import { useParams ,useNavigate } from "react-router-dom";
import axios from "axios";
import "./Form.css"

export const MedicineEdit = () => {

    const navigate = useNavigate();
    
    const[input, setInput] = useState({
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

    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        const getAllData = async() => {
            const res = await axios.get(`http://localhost:8003/medicines/single/${id}`);
            setInput(res.data);
        };
        getAllData();
    }, [id]);
/*
    const handleEditData = async(e) => {
        e.preventDefault();
  
        console.log("Form data", input)

        const { medID, brandName, genericName, catgType, manufacturer, stock, expNotation, price, discount} = input;

        const body = JSON.stringify({
            medID,
            brandName,
            genericName,
            catgType,
            manufacturer,
            stock,
            expNotation,
            price,
            discount
        })

        const response = await fetch(
            `http://localhost:8001/api/v1/medicines/${id}`,
            {
                method:"PUT",
                headers:{
                    "Content-Type": "application/json",
                },
                body,
            }
        )

        const json = await response.json()
        console.log(json)

        if(!response.ok){
            console.log("Error occured")
        }

        else{
            console.log("Record edited", json)
            navigate("/");
        }
        //  await axios.put(`http://localhost:8001/api/v1/medicines/${id}`, input);
        //  navigate("/");*/
    
    /*const handleEditData=async (e) =>{
        e.preventDefault();
      
        await axios.put(`http://localhost:8001/api/v1/medicines/${id}`,input);
        console.log("data:",input)
        navigate('/');
       
        };*/
        const handleEditData=async (e) =>{
            e.preventDefault();
            navigate('/');
           console.log("data",input)
           await axios.put(`http://localhost:8003/medicines/${id}`,input);
           navigate('/');
           
           
            };

        const handleInputChange = event => {
            const { name, value } = event.target;
            setInput({ ...input, [name]: value });
          };/*
        const handleAddFields = () => {
            const values = [...medicines];
            values.push({ name: "", quantity: "" });
            setMedicines(values);
        };/*
     const handleEditData = async (e) =>{
         e.preventDefault();
        
         await axios.put(`http://localhost:8001/api/v1/medicines/${id}`,input);
         navigate('/');
       
        }; */

    
      
  return (
    <div className="form-container-class">
                   {/* <div className="col-md-12" >
                        <div style={{ backgroundColor: "green" }}>
                            <h1 className="text-white text-center mt-2">Medicine And Drug Information </h1>
                        </div>
  </div> */}
                    <div className="form-container">
                        <form className="form-class" onSubmit={handleEditData}>
                        <div>
                            <div class="form-sub-container">
                                <div>
                                <label for="exampleInputId" class="form-label">Medicine ID</label>
                                </div>
                                <div>
                                <input
                                    name="medID"
                                    value={input.medID}
                                    onChange={handleInputChange}
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
                                    value={input.brandName}
                                    onChange={handleInputChange}
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
                                    value={input.genericName}
                                    onChange={handleInputChange}
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
                                    value={input.catgType}
                                    onChange={handleInputChange}
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
                                    value={input.manufacturer}
                                    onChange={handleInputChange}
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
                                <label for="exampleInputStock" class="form-label">Stock</label>
                                </div>
                                <div>
                                <input
                                    name="stock"
                                    value={input.stock}
                                    onChange={handleInputChange}
                                    type="number"
                                    className="form-text"
                                    id="exampleInputStock"
                                />
                                </div>
                            </div>

                            <div class="form-sub-container">
                                <div>
                                <label for="exampleInputExp" class="form-label">Exp. Notation</label>
                                </div>
                                <div>
                                <input
                                    name="expNotation"
                                    value={input.expNotation}
                                    onChange={handleInputChange}
                                    type="number"
                                    className="form-text"
                                    id="exampleInputExp"
                                />
                                </div>
                            </div>

                            <div class="form-sub-container">
                                 <div>
                                <label for="exampleInputPrice" class="form-label">Price</label>
                                </div>
                                <div>
                                <input
                                    name="price"
                                    value={input.price}
                                    onChange={handleInputChange}
                                    type="number"
                                    className="form-text"
                                    id="exampleInputPrice"
                                />
                                </div>
                            </div>

                            <div class="form-sub-container">
                                <div>
                                <label for="exampleInputDiscount" class="form-label">Discount</label>
                                </div>
                                <div>
                                <input
                                    name="discount"
                                    value={input.discount}
                                    onChange={handleInputChange}
                                    type="number"
                                    className="form-text"
                                    id="exampleInputDiscount"
                                />
                                </div>
                            </div>

                            <button onClick={handleEditData} type="submit" class="btn-submit mt-5">Submit</button>
                        </div>
                        </form>
                    </div>

            </div>
  )

}

export default MedicineEdit;