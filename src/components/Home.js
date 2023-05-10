import React, { useEffect,useState} from "react";
import { NavLink } from "react-router-dom";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./HNavbar.css"
import "./Details.css"
import VNavbaar from './VNavbaar';
import HNavbaar from './HNavbaar';

const Home = () => {
 

  const [getstockdata, setStockdata] = useState([]);
  console.log(getstockdata);

  const Low_Stock = 100;

 //Get Stock Data Fucntion 
  const getpdata = async(e)=>{

    const res = await fetch("/stock/getdata", {
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    });

    const data = await res.json();
    console.log(data);

    if (res.status ===422|| !data){
      console.log("error");
    }else{
      setStockdata(data)
      //console.log("get data");
    }

   // Low Stock Alert Function for Manage The Stock Levels

    getstockdata.forEach(data => {
      if(data.Medicine_NO<Low_Stock){

        toast.warn (`Low Stock alert : ${data.Medicine_ID} has only : ${data.Medicine_NO} units Remaining Please Re-Order !`,{
          position:"top-right",
          autoClose:5000,
          theme:"dark",
          draggable:true,
          delay:6000,//6000
        });
      }
      
    });
    
  } 

  useEffect(()=>{
    getpdata();
  },[])

setInterval(getpdata,60000); //60000 = 1 min

 return (

  <div className ="home">
  <VNavbaar/>
    <HNavbaar/>

 <table className="table">
  <thead>
    <tr className ="table-head">
      <th className ="th" scope="col">NO</th>
      <th className ="th" scope="col">Medicine ID</th>
      <th className ="th" scope="col">Medicine Name</th>
      <th className ="th" scope="col">Number of Medicine</th>
      <th className ="th" scope="col">Expire Date</th>
      <th className ="th" scope="col">Purchased Date</th>
    </tr>
  </thead>
  <tbody>
    {
     getstockdata.map((element,id)=>{

        const date1 = String(element.Expire_Date).split("T")[0];
        const date2 = String(element.Purchased_Date).split("T")[0];
        return(
          <>
              <tr className="table-data">
      <th scope="row">{id+1}</th>
      <td className="td">{element.Medicine_ID}</td>
      <td className="td"><NavLink to ={`view/${element._id}`}>{element.Name}</NavLink></td>
      <td className="td">{element.Medicine_NO}</td>
      <td className="td">{date1}</td>
      <td className="td">{date2}</td>
    </tr>
          </>
        )
      }) 
    }
  </tbody>
  </table>
  </div>);
};

export default Home;