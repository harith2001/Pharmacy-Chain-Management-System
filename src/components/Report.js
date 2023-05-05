import React, { useEffect,useState,useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./Report.css"
import Logo from '../Images/Logo.png'

const Report = () => {

    const [getstockdata, setStockdata] = useState([]);
    console.log(getstockdata);

    const low = 100;

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
          //console.log("get data ");
        }
    }
        useEffect(()=>{
            getpdata();
          },[])

        
          const componentPDF = useRef();
          const generatePDF = useReactToPrint({
            content:()=> componentPDF.current,
            documentTitle:"Stock Details",
          });


  const total_stock = getstockdata.reduce((total,element)=>total+element.Medicine_NO,0);
  const total_medicine = getstockdata.length;
  const low_stock = getstockdata.filter((element)=>element.Medicine_NO<low).length;


  return (


    <div className="report">

    <div ref ={componentPDF} style={{width:'100%'}}>


    <img className="logo" src ={Logo}></img>
    <h1 className='title'>Ragama Pharamcy </h1>
    <h2 className="S2">Stock Details</h2>

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
    <td className="td">{element.Name}</td>
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
    <br></br>
    <h5 className="total"> Total Stock Count of Every Medicine In the Inventory :- {total_stock}</h5>
    <h5 className="total"> Total Medicines In the Inventory :- {total_medicine}</h5>
    <h5 className="total"> Total Low Stock Medicines In the Inventory :- {low_stock}  </h5>
    </div>
    <div>
      <br></br>
    <button className="PDF" onClick={generatePDF}>Genarate Report</button></div>
    </div>);
};

export default Report;