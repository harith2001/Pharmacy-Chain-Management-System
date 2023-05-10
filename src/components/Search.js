import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./Details.css";
import { toast } from "react-toastify";
import HNavbaar from "./HNavbaar";
import VNavbaar from "./VNavbaar";
import "./HNavbar.css";
import "./VNavbar.css";

const Search = () => {
  const [getsearchdata, setsearchdata] = useState({});
  //const [searchText, setSearchText] = useState();
  const { Medicine_ID } = useParams("");

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log("getsearchdata " + getsearchdata);
    //console.log("searchText " + searchText);
    console.log("Medicine_ID " + Medicine_ID);

    const res = await fetch(`/stock/searchdata/${getsearchdata}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    //console.log("data " + data);

    if (res.status === 422 || !data) {
      toast.error("empty data");
    } else {
      setsearchdata(data);
      toast.success("Successfully Searched !");
      //console.log("Successful response recieved");
    }
  };

  useEffect(() => {
    handleSearch();
  }, [getsearchdata]);

  const date1 = String(getsearchdata.Expire_Date).split("T")[0];
  const date2 = String(getsearchdata.Purchased_Date).split("T")[0];

  return (
    <div>
      <VNavbaar />
      <HNavbaar />
      <div className="table-container">
        <form onSubmit={handleSearch}>
          <input
            className="search"
            placeholder="Search ..."
            value={Medicine_ID}
            onChange={(e) => setsearchdata(e.target.value)}
          />
          <button className="search-btn" type="submit">
            Search
          </button>
        </form>

        <table className="table">
          <thead>
            <tr className="table-head">
              <th className="th" scope="col">
                Medicine ID
              </th>
              <th className="th" scope="col">
                Medicine Name
              </th>
              <th className="th" scope="col">
                Number of Medicine
              </th>
              <th className="th" scope="col">
                Expire Date
              </th>
              <th className="th" scope="col">
                Purchased Date
              </th>
            </tr>
          </thead>
          <tbody>
            <>
              <tr className="table-data">
                <td className="td">{getsearchdata.Medicine_ID}</td>
                <td className="td">
                  <NavLink to={`/view/${getsearchdata._id}`}>
                    {getsearchdata.Name}
                  </NavLink>
                </td>
                <td className="td">{getsearchdata.Medicine_NO}</td>
                <td className="td">{date1}</td>
                <td className="td">{date2}</td>
              </tr>
            </>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Search;
