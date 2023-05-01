import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Details.css"

const Home = () => {

  const [getsupplierdata, setSupplierdata] = useState([]);
  console.log(getsupplierdata);



  //Get Supplier Data Fucntion 
  const getpdata = async (e) => {

    const res = await fetch("/supplier/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error");
    } else {
      setSupplierdata(data)
      //console.log("get data ");
    }
  }



  useEffect(() => {
    getpdata();
  }, [])



  return (

    <div className="table-container">
      <div >

        {/* <h2 className="h2">Supplier Details</h2> */}

        <table className="table">
          <thead>
            <tr className="table-head">
              <th className ="th" scope="col">NO</th>
              <th className ="th" scope="col">Medicine ID</th>
              <th className ="th" scope="col">Supplier Name</th>
              <th className ="th" scope="col">Address</th>
              <th className ="th" scope="col">Email Address</th>
              <th className ="th" scope="col">Contact Number</th>
              <th className ="th"scope="col">Amount</th>
              <th className ="th" scope="col">Price</th>
              <th className ="th" scope="col">Purchased Date</th>
            </tr>
          </thead>
          <tbody>
            {
              getsupplierdata.map((element, id) => {


                return (
                  <>
                    <tr className="table-data">
                      <th scope="row">{id + 1}</th>
                      <td className="td">{element.Medicine_ID}</td>
                      <td className="td"><NavLink to={`view/${element._id}`}>{element.Name}</NavLink></td>
                      <td className="td">{element.Address}</td>
                      <td className="td">{element.Email}</td>
                      <td className="td">{element.Contact_number}</td>
                      <td className="td">{element.Amount}</td>
                      <td className="td">{element.Price}</td>
                      <td className="td">{element.Date}</td>
                    </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
      </div>


    </div>);
};

export default Home;
