import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Insert.css";
import { toast } from "react-toastify";
import HNavbaar from "./HNavbaar";
import VNavbaar from "./VNavbaar";
import "./HNavbar.css";
import "./VNavbar.css";

const Insert = () => {

  const navigate = useNavigate();

  const [inpval, setINP] = useState({
    Medicine_ID: "",
    Name: "",
    Medicine_NO: "",
    Expire_Date: "",
    Purchased_Date: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { id, value } = e.target;

    let isValidMD = inpval.Medicine_ID;

    // if(id === "Medicine_ID"){
    //   isValidMD = false;
    //   if(value.match(/[M][D][0-9]{3}/)){
    //     isValidMD = true;
    //   }
    // }

    if (id === "Medicine_ID") {
      isValidMD = false;
      if (value.match(/[M][D]\d{3}\b/)) { // Matches MD followed by 3 digits and a word boundary
        isValidMD = true;
      }
    }
    


    setINP((preval) => {
      return {
        ...preval,
        [id]: value,
        isValidMD: isValidMD,
      };
    });

  };

  const addinpdata = async (e) => {
    e.preventDefault();

    const { Medicine_ID, Name, Medicine_NO, Expire_Date, Purchased_Date } = inpval;

    const res = await fetch("/stock/Insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Medicine_ID,
        Name,
        Medicine_NO,
        Expire_Date,
        Purchased_Date,
      }),
    });

    const data = await res.json();
    console.log(data);


    if (res.status === 422 || !data) {
      toast.error("Insert Correctly Data !");
      
      //console.log("error");
    } else {
      toast.success("Stock Added Successfully !");
      navigate("/");
      //console.log("data added");
    }

  };

  return (
    <div>
      <HNavbaar />
      <VNavbaar />
      <div className="form-container">
        <form className="form-class">
          <div className="form-sub-container">
            <label for="MedicineID" className="form-label">
              Medicine ID
            </label>
            <input
              type="text"
              placeholder="MD..."
              className="form-text"
              value={inpval.Medicine_ID}
              onChange={setdata}
              id="Medicine_ID"
              pattern="[M][D][0-9]{3}"
              required = "true"
            />
            <br></br>
            {!inpval.isValidMD && (
              <span style={{color: "red"}}>Medicine ID is not valid !! Example :- MD001</span>
            )}
          </div>
          <div className="form-sub-container">
            <label for="MedicineName" className="form-label">
              Medicine Name
            </label>
            <input
              type="text"
              className="form-text"
              value={inpval.Name}
              onChange={setdata}
              id="Name"
              pattern="[A-Za-z]{15,}"
              required = "true"
            />
          </div>
          <div className="form-sub-container">
            <label for="MedicineNo" className="form-label">
              Number of Medicine Available (units)
            </label>
            <input
              type="number"
              className="form-text"
              value={inpval.Medicine_NO}
              onChange={setdata}
              id="Medicine_NO"
              required = "true"
            />
          </div>
          <div className="form-sub-container">
            <label for="ExpireDate" className="form-label">
              Expire Date
            </label>
            <input
              type="date"
              className="form-text"
              value={inpval.Expire_Date}
              onChange={setdata}
              id="Expire_Date"
              required = "true"
            />
          </div>
          <div className="form-sub-container">
            <label for="PurchasedDate" className="form-label">
              Purchased Date
            </label>
            <input
              type="date"
              className="form-text"
              value={inpval.Purchased_Date}
              onChange={setdata}
              id="Purchased_Date"
              required = "true"
            />
          </div>
          <br></br>
          <div className="btn-container">
            <button type="submit" onClick={addinpdata} className="btn-submit">
              SUBMIT
            </button>
            <NavLink to={`/`}>
              <button className="btn-cancel">CANCEL</button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Insert;
