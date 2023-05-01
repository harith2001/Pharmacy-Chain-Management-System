import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useParams, useNavigate } from "react-router-dom";
import "./FormDetails.css";

const FormDetails = () => {
  const navigate = useNavigate();

  const [financeRecord, setFinanceRecord] = useState([]);
  const [error, setError] = useState(null);
  const [filterOption, setFilterOption] = useState("search_by_sales_id");
  const [searchQuery, setSearchQuery] = useState("");

  const { Id } = useParams("");

  const getFinanceData = async (e) => {
    try {
      const response = await fetch("http://localhost:8003/finance", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      const json = await response.json();
      console.log(json);

      if (!response.ok) {
        setError(json.error);
      }

      if (response.ok) {
        setFinanceRecord(json);
        setError(null);
      }
    } catch (error) {
      console.log("Error!", error);
    }
  };

  useEffect(() => {
    getFinanceData();
  }, []);

  //deleteFinanceRecord function
  const deleteFinanceRecord = async (id) => {
    const response1 = await fetch(
      `http://localhost:8003/finance/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const json = await response1.json();
    console.log(json);

    if (!response1.ok) {
      setError(json.error);
    }

    if (response1.ok) {
      //setError(null)
      alert("Finance record deleted successfully");
      navigate("/financedetails");
      console.log("Finance record deleted", json);
      getFinanceData();
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery) {
      getFinanceData(e);
      return;
    }

    let body = {};

    if (filterOption == "search_by_sales_id") {
      body = {
        salesId: searchQuery,
      };
    } else if (filterOption == "search_by_date") {
      body = {
        dateAndTime: searchQuery,
      };
    }

    console.log("Body", body);

    try {
      const response = await fetch(
        `http://localhost:8003/finance/search`,
        {
          method: "POST",
          body: JSON.stringify({ query: body }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      const json = await response.json();
      console.log("Search", json);
      setFinanceRecord(json);
    } catch (error) {}
  };

  return (
    <div className="table-container">
      <form className="d-flex" role="search">
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
        <div className="radio-btn-container">
          <Form.Check
            inline
            className="radio-btn"
            label="Search by sales Id"
            name="group1"
            type="radio"
            id={`search_by_sales_id`}
            checked={filterOption == "search_by_sales_id"}
            onChange={() => {
              setFilterOption("search_by_sales_id");
            }}
          />
          <Form.Check
            inline
            className="radio-btn"
            label="Search by date"
            name="group1"
            type="radio"
            id={`search_by_date`}
            checked={filterOption == "search_by_date"}
            onChange={() => {
              setFilterOption("search_by_date");
            }}
          />
        </div>
      </form>
      <table className="table">
        <thead>
          <tr className="table-head">
            <th className="th" scope="col">
              Sales ID
            </th>
            <th className="th" scope="col">
              Invoice ID
            </th>
            <th className="th" scope="col">
              Date And Time
            </th>
            <th className="th" scope="col">
              Amount
            </th>
            <th className="th" scope="col">
              Branch ID
            </th>
            <th className="th" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {financeRecord.length
            ? financeRecord.map((current) => (
                <tr className="table-data">
                  <td className="td">{current.salesId}</td>
                  <td className="td">{current.invoiceId}</td>
                  <td className="td">{current.dateAndTime}</td>
                  <td className="td">{current.amount}</td>
                  <td className="td">{current.branchId}</td>
                  <td className="td">
                    <a href={`/financeedit/${current._id}`}>
                      <button className="btn btn-edit">Edit</button>
                    </a>
                    <button
                      onClick={() => deleteFinanceRecord(current._id)}
                      className="btn btn-delete"
                    >
                      Delete
                    </button>
                    {/* <button onClick={()=>deleteFinanceRecord(getFinanceData._id)}>Delete</button> */}
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>

      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default FormDetails;
