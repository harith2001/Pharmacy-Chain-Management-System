import React from 'react'
import './FormDetails.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect} from 'react'
import FormDetails from './FormDetails'

const FormDetailsSearch = () => {

    const navigate = useNavigate()

    const [getSearchData, setSearchData] = useState({})
    const { salesId } = useParams("")
    const [financeRecord, setFinanceRecord] = useState([])
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault()
        console.log("getSearchData", getSearchData)
        console.log("salesId", salesId)

        const response2 = await fetch("http://localhost:4000/api/FinanceDetails", {
            method:"GET",
            headers:{
                "Content-type":"application/json"
            }
        })

        const json = await response2.json()
        console.log(json)

        if(!response2.ok){
            console.log("Error")
            setError(json.error);
        }

        if(response2.ok){
            setSearchData(json)
            console.log("Response received successfully")
        }

        useEffect(() => {
            handleSearch()

        }, [getFinanceData])
    }

    const {Id} = useParams("")
    console.log(Id)

    const getFinanceData = async (e) => {
        try{
            const response = await fetch("http://localhost:4000/api/FinanceDetails", {
            method:"GET",
            headers:{
                "Content-type":"application/json"
            }
        })

        const json = await response.json()
        console.log(json)

        if(!response.ok){
            setError(json.error);
        }

        if(response.ok){
            setFinanceRecord(json)
            setError(null)
        }
        }
        catch(error){
            console.log("Error!", error)
        }
    }

    useEffect(() => {
        getFinanceData()
    }, [])

    //deleteFinanceRecord function
    const deleteFinanceRecord = async (id) => {
        const response1 = await fetch (`http://localhost:4000/api/FinanceDetails/${id}`,{
            method:"DELETE",
            headers:{
                "Content-type":"application/json"
            }
        })

        const json = await response1.json()
        console.log(json)

        if(!response1.ok){
            setError(json.error);
        }

        if(response1.ok){
            //setError(null)
            alert("Finance record deleted successfully")
            navigate("/financedetails")
            console.log("Finance record deleted", json)
            getFinanceData()
        }
    }
  return (
    <div className="table-container">
        <form className='d-flex' role='search'>
              <input type='search' className='search-bar' aria-label='Search'/>
              <button type='submit' className='btn-search'>Search
              <FormDetails handleSearch={handleSearch}/>
              </button>
            </form>
      <table className="table">
        <thead>
            <tr className="table-head">
                <th className="th" scope="col">Sales ID</th>
                <th className="th" scope="col">Invoice ID</th>
                <th className="th" scope="col">Date And Time</th>
                <th className="th" scope="col">Amount</th>
                <th className="th" scope="col">Branch ID</th>
                <th className="th" scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            {/* {financeRecord.length && financeRecord.map((current) => (
                <tr className="table-data">
                <td className="td">{current.salesId}</td>
                <td className="td">{current.invoiceId}</td>
                <td className="td">{current.dateAndTime}</td>
                <td className="td">{current.amount}</td>
                <td className="td">{current.branchId}</td>
                <td className="td">
                    <a href={`/financeedit/${current._id}`}><button className="btn btn-edit">Edit</button></a>
                    <button onClick={() => deleteFinanceRecord(current._id)} className="btn btn-delete">Delete</button>
                    <button onClick={()=>deleteFinanceRecord(getFinanceData._id)}>Delete</button> 
                </td>
                </tr>
            )) 
            } */}
            {setSearchData.map((current) => (
                <tr className="table-data">
                <td className="td">{current.salesId}</td>
                <td className="td">{current.invoiceId}</td>
                <td className="td">{current.dateAndTime}</td>
                <td className="td">{current.amount}</td>
                <td className="td">{current.branchId}</td>
                <td className="td">
                    <a href={`/financeedit/${current._id}`}><button className="btn btn-edit">Edit</button></a>
                    <button onClick={() => deleteFinanceRecord(current._id)} className="btn btn-delete">Delete</button>
                    {/* <button onClick={()=>deleteFinanceRecord(getFinanceData._id)}>Delete</button> */}
                </td>
            </tr>
            ))
            }
        </tbody>
      </table>

      {error && <div className="error">{error}</div>}
    </div>
  )
}

export default FormDetailsSearch
