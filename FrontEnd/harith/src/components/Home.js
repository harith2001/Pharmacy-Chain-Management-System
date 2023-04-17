import React, { useEffect,useState,useRef } from "react";
import { NavLink } from "react-router-dom";
import { useReactToPrint } from "react-to-print";


const Home = () => {

  const [getstockdata, setStockdata] = useState([]);
  console.log(getstockdata);

  const Low_Stock = 100;

 //Get Stock Data Fucntion 
  const getpdata = async(e)=>{

    const res = await fetch("/getdata", {
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
      //console.log("get data ");
    }

   // Low Stock Alert Function for Manage The Stock Levels

    getstockdata.forEach(data => {
      if(data.Medicine_NO<Low_Stock){
        alert (`Low Stock alert : ${data.Medicine_ID} has only : ${data.Medicine_NO} units Remaining Please Re-Order !`);
        //console.log("alert");
      }
      
    });
    
  } 

  useEffect(()=>{
    getpdata();
  },[])

 //PDF Generate
//
  const componentPDF = useRef();
  const generatePDF = useReactToPrint({
    content:()=> componentPDF.current,
    documentTitle:"Stock Details",
    onAfterPrint:()=>alert("Data Printed in PDF")
  });

 setInterval(getpdata,300000); 

 return (

  <div className ="home">
<div ref ={componentPDF} style={{width:'100%'}}>

  <h2 className="h2">Stock Details</h2>

 <table className="table">
  <thead>
    <tr className ="table-dark">
      <th scope="col">NO</th>
      <th scope="col">Medicine ID</th>
      <th scope="col">Medicine Name</th>
      <th scope="col">Number of Medicine</th>
      <th scope="col">Expire Date</th>
      <th scope="col">Purchased Date</th>
    </tr>
  </thead>
  <tbody>
    {
     getstockdata.map((element,id)=>{

        const date1 = String(element.Expire_Date).split("T")[0];
        const date2 = String(element.Purchased_Date).split("T")[0];
        return(
          <>
              <tr>
      <th scope="row">{id+1}</th>
      <td>{element.Medicine_ID}</td>
      <td><NavLink to ={`view/${element._id}`}>{element.Name}</NavLink></td>
      <td>{element.Medicine_NO}</td>
      <td>{date1}</td>
      <td>{date2}</td>
    </tr>
          </>
        )
      }) 
    }
  </tbody>
  </table>
  </div>
  <div className='PDF'>
  <button onClick={generatePDF}>Genarate Report</button></div>
 
  </div>);
};

export default Home;