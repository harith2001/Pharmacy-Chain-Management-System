import React, { useEffect,useState,useRef } from "react";
import { NavLink } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const Home = () => {

  const [getbranchdata, setBranchdata] = useState([]);
  console.log(getbranchdata);

//Get Stock Data Fucntion 
  const getpdata = async(e)=>{

    const res = await fetch("/branch/getdata", {
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
      setBranchdata(data)
      console.log("get data ");
    }
  } 

  useEffect(()=>{
    getpdata();
  },[])

//PDF Generate

const componentPDF = useRef();
const generatePDF = useReactToPrint({
  content:()=> componentPDF.current,
  documentTitle:"Stock Details",
  onAfterPrint:()=>alert("Data Printed in PDF")
});

 return (

  <div className ="table-container">
<div ref ={componentPDF} style={{width:'100%'}}>

  {/* <h2 className="h2">Branch Details</h2> */}

 <table className="table">
  <thead>
    <tr className ="table-head">
      <th className ="th" scope="col">NO</th>
      <th className ="th" scope="col">Branch_ID</th>
      <th className ="th" scope="col">BranchLocation</th>
      <th className ="th" scope="col">BManager</th>
      <th className ="th" scope="col">Purchases</th>
      <th className ="th" scope="col">ReturnedGoods</th>
      <th className ="th" scope="col">BestSellingProducts</th>
    </tr>
  </thead>
  <tbody>
    {
     getbranchdata.map((element,id)=>{
        return(
          <>
              <tr className="table-data">
      <th scope="row">{id+1}</th>
      <td className="td">{element.Branch_ID}</td>
      <td className="td"><NavLink to ={`view/${element._id}`}>{element.BranchLocation}</NavLink></td>
      <td className="td">{element.BManager}</td>
      <td className="td">{element.Purchases}</td>
      <td className="td">{element.ReturnedGoods}</td>
      <td className="td">{element.BestSellingProduct}</td>

    </tr>
          </>
        )
      }) 
    }
  </tbody>
  </table>
  </div>
  <div>
  <button className="PDF" onClick={generatePDF}>Genarate Report</button></div>

  </div>);
};
export default Home;
