import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const FormEdit = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    salesId: "",
    invoiceId: "",
    dateAndTime: "",
    amount: "",
    branchId: "",
  });

  const setData = (e, key) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const { id } = useParams("");
  console.log(id);

  const getData = async (e) => {
    const response = await fetch(
      `http://localhost:4000/api/FinanceDetails/${id}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const json = await response.json();
    console.log(json);

    if (!response.ok) {
      console.log("Error occured");
    }

    if (response.ok) {
      setFormData({
        salesId: json.salesId,
        invoiceId: json.invoiceId,
        dateAndTime: json.dateAndTime,
        amount: json.amount,
        branchId: json.branchId,
      });
      console.log("Get finance record", json);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const EditFinanceDetails = async (e) => {
    e.preventDefault();

    console.log("Form data", formData);

    const { salesId, invoiceId, dateAndTime, amount, branchId } = formData;

    const body = JSON.stringify({
      salesId,
      invoiceId,
      dateAndTime,
      amount,
      branchId,
    });

    const response1 = await fetch(
      `http://localhost:4000/api/FinanceDetails/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      }
    );

    const json1 = await response1.json();
    console.log(json1);

    if (!response1.ok) {
      console.log("Error occured");
    }

    if (response1.ok) {
      console.log("Get finance record", json1);
      navigate("/financedetails");
    }
  };

  return (
    <div className="form-container">
      <form className="form-class" onSubmit={EditFinanceDetails}>
        <div className="form-sub-container">
          <div>
            <label className="form-label">Sales ID</label>
          </div>
          <div>
            <input
              disabled
              type="text"
              className="form-text"
              onChange={(e) => setData(e, "salesId")}
              value={formData.salesId}
            />
          </div>
        </div>
        <div className="form-sub-container">
          <div>
            <label className="form-label">Invoice ID</label>
          </div>
          <div>
            <input
              disabled
              type="text"
              className="form-text"
              onChange={(e) => setData(e, "invoiceId")}
              value={formData.invoiceId}
            />
          </div>
        </div>
        <div className="form-sub-container">
          <div>
            <label className="form-label">Date and Time</label>
          </div>
          <div>
            <input
              type="text"
              className="form-text"
              onChange={(e) => setData(e, "dateAndTime")}
              value={formData.dateAndTime}
            />
          </div>
        </div>
        <div className="form-sub-container">
          <div>
            <label className="form-label">Amount</label>
          </div>
          <div>
            <input
              type="text"
              className="form-text"
              onChange={(e) => setData(e, "amount")}
              value={formData.amount}
            />
          </div>
        </div>
        <div className="form-sub-container">
          <div>
            <label className="form-label">Branch ID</label>
          </div>
          <div>
            <input
              type="text"
              className="form-text"
              onChange={(e) => setData(e, "branchId")}
              value={formData.branchId}
            />
          </div>
        </div>
        <div className="btn-container">
          <button
            type="submit"
            onClick={EditFinanceDetails}
            className="btn-update"
          >
            UPDATE
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEdit;
