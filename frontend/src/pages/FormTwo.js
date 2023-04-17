import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { read, utils } from "xlsx";
import IndividualData from "../Components/IndividualData";
import Upload from "../images/Upload.png";
import "./FormTwo.css";

const FormTwo = () => {
  //on change states
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);
  const navigate = useNavigate();

  console.log(excelFile);

  //submit
  const [excelData, setExcelData] = useState(null);
  //it will contain array of objects

  //allowing excel files only
  const fileType = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];
  //handleFile function
  const handleFile = async (e) => {
    try {
      let selectedFile = e.target.files[0]; //whatever file we select, it will be saved in selectedFile variable
      if (selectedFile && fileType.includes(selectedFile.type)) {
        //console.log(selectedFile.type)
        const data = await selectedFile.arrayBuffer();
        const workbook = read(data, { type: "buffer" }); //reading excel file as workbook
        console.log("workbook", workbook);

        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];
        console.log("worksheet", worksheet);

        const jsonData = utils.sheet_to_json(worksheet); //coverting sheet data into json
        console.log("Excel data", jsonData);
        setExcelData(jsonData);

        console.log("jsonData", jsonData);
      } else {
        setExcelFileError("Please select only excel file types");
        setExcelFile(null);
      }
    } catch (error) {
      console.log("error", error);
      setExcelFileError("An error occurred. Please try again");
    }
  };

  //handleSubmit function
  const handleSubmit = async (e) => {
    try {
      if (excelData != null) {
        const response = await fetch(
          "http://localhost:4000/api/FinanceDetails/batch",
          {
            method: "POST",
            body: JSON.stringify({ data: excelData }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          alert("Excel sheet added successfully");
          navigate("/financedetails");
        } else {
          console.log("Error!", response);
        }
      }
    } catch (error) {
      console.log("Excel error", error);
    }
  };

  return (
    <div className="container">
      {/*upload file section*/}
      <div className="form">
        <form className="form-group" autoComplete="off">
          <div className="form-btn-container">
            <img className="img-upload" src={Upload} alt="upload"></img>
            <label className="label">
              <h4 className="h5">Select your excel file</h4>
            </label>
            <div className="file-btn-control">
              <label className="file-btn">
                <input
                  type="file"
                  className="form-control"
                  onChange={handleFile}
                  hidden
                  required
                ></input>
                {excelFileError && (
                  <div className="text-danger">{excelFileError}</div>
                )}
                Browse
              </label>
            </div>
          </div>
          <button type="submit" className="btn-success" onClick={handleSubmit}>
            Upload File
          </button>
        </form>
      </div>

      {/* <br></br>
      <hr></hr> */}

      {/* <div>
        <h5 className="h5-2">View Excel File</h5>
        <div className="viewer">
          {excelData !== null && excelData.length ? (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Sales ID</th>
                    <th scope="col">Invoice ID</th>
                    <th scope="col">Date And Time</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Branch ID</th>
                  </tr>
                </thead>
                <tbody>
                  {excelData.map((individualExcelData) => (
                    <IndividualData
                      key={individualExcelData.salesId}
                      individualExcelData={individualExcelData}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
        </div>
      </div> */}
    </div>
  );
};

export default FormTwo;
