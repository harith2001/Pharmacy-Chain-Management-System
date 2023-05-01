import React,{useEffect, useState} from 'react'
import {useParams,useNavigate} from "react-router-dom";
import './Insert.css'

const Edit = () => {

  //const [getstockdata, setStockdata] = useState([]);
  //console.log(getstockdata);

  const navigate = useNavigate();

    const[inpval,setINP] = useState(
        {
          Branch_ID: "",
          BranchLocation: "",
          BManager: "",
          Purchases: "",
          ReturnedGoods: "",
          BestSellingProduct: "",
        }
      )
      
      const setdata = (e) =>{
        console.log(e.target.value);
        const {id,value} = e.target;
        setINP((preval) =>{
          return{
            ...preval,
            [id]:value
          }
        })
      }

      const {id} = useParams("");
      console.log(id);
      
      const getdata = async(e)=>{
    
        const res = await fetch(`/branch/getbranch/${id}`, {
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
          setINP(data)
          console.log("get data ");
        }
      } 

      useEffect(()=>{
        getdata();
      },[]);

      const updatebranch = async(e)=>{
        e.preventDefault();

        const{Branch_ID, BranchLocation, BManager,Purchases,ReturnedGoods,BestSellingProduct} = inpval;

        const res2 = await fetch(`/branch/updatebranch/${id}`,{

          method:"PATCH",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            Branch_ID, BranchLocation, BManager,Purchases,ReturnedGoods,BestSellingProduct
          })

        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422||!data2){
          alert("fill the data")
        }else{
          alert("data added")
          navigate("/")
        }
      }

    return (
    <div className='form-container'>
    <form className="form-class">
    <div>
    <div className="form-sub-container">
    <label for="BranchID" className="form-label">Branch ID</label>
    <input type="text" className="form-text" value={inpval.Branch_ID} onChange={setdata} id="Branch_ID"/>
  </div>
  <div className="form-sub-container">
    <label for="BranchLocation" className="form-label">Branch Location</label>
    <input type="text" className="form-text" value={inpval.BranchLocation} onChange={setdata} id="BranchLoction"/>
  </div>
  <div className="form-sub-container">
    <label for="BManager" className="form-label">Manager of the Branch</label>
    <input type="text" className="form-text" value={inpval.BManager} onChange={setdata} id="BManager"/>
  </div>
  </div>

  <div className="form-2">
  <div className="form-sub-container">
    <label for="Purchases" className="form-label">All the Purchases made</label>
    <input type="number" className="form-text" value={inpval.Purchases} onChange={setdata} id="Purchases"/>
  </div>
  <div className="form-sub-container">
    <label for="ReturnedGoods" className="form-label"> Value of Returned Goods</label>
    <input type="number" className="form-text" value={inpval.ReturnedGoods} onChange={setdata} id="ReturnedGoods"/>
  </div>
  <div className="form-sub-container">
    <label for="BestSellingProduct" className="form-label">Best Selling Product last month</label>
    <input type="text" className="form-text" value={inpval.BestSellingProduct} onChange={setdata} id="BestSellingProduct"/>
  </div>
      <div class="btn-update-container">
        <button type="submit" onClick={updatebranch} class="btn btn-update">Update</button>
      </div>
  </div>
    </form>
    
        </div>
      )
    }

export default Edit