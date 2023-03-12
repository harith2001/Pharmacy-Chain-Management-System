import React, { useEffect,useState } from "react";


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

    if (res.status ===404|| !data){
      console.log("error");
    }else{
      setStockdata(data)
      console.log("get data ");
    }
  } 

  useEffect(()=>{
    getpdata();
  },[])


  return (
  <div className ="container">
<br></br>
<br></br>
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
        return(
          <>
              <tr>
      <th scope="row">{id+1}</th>
      <td>{element.Medicine_ID}</td>
      <td>{element.Name}</td>
      <td>{element.Medicine_NO}</td>
      <td>{element.Expire_Date}</td>
      <td>{element.Purchased_Date}</td>

      <td className ="d-flex justify-content-between">
        <button className ="btn btn-success">view</button>
        <button className ="btn btn-primary">Update</button>
        <button className ="btn btn-danger">Detele</button>
      </td>
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
