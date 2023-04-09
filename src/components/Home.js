import React, { useEffect,useState } from "react";
import { NavLink } from "react-router-dom";


const Home = () => {

  const [getstockdata, setStockdata] = useState([]);
  console.log(getstockdata);

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
      console.log("get data ");
    }
  } 

  useEffect(()=>{
    getpdata();
  },[])


  const deletestock =async (id)=>{
    const res2 = await fetch(`/deletestock/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    });
    const deletedata = await res2.json();
    console.log(deletedata);

    if(res2.status===422||!deletedata){
      console.log("error");
    }else{
      alert("Stock Data Deleted");
      console.log("stock deleted ");
      getpdata();
    }
  }


  return (
    
  <div className ="home">

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
        const date1 = element.Expire_Date.split("T")[0];
        const date2 = element.Purchased_Date.split("T")[0];
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

  </div>);
};

export default Home;
