import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Insert.css'

const Insert = () => {
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState();

  const navigate = useNavigate();
  // adding new suppliers
  const [inpval, setINP] = useState(
    {
      Medicine_ID: "",
      Name: "",
      Address: "",
      Email: "",
      Contact_number: "",
      Amount: "",
      Price: "",
      Date: ""
    }
  )

  const setdata = (e) => {
    console.log(e.target.value);
    const { id, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [id]: value
      }
    })
  }

  const addinpdata = async (e) => {
    e.preventDefault();

    const { Medicine_ID, Name, Address, Email, Contact_number, Amount, Price, Date } = inpval;

    const res = await fetch("/supplier/Insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Medicine_ID, Name, Address, Email, Contact_number, Amount, Price, Date
      })
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      alert("error: Insert data ");
      console.log("error");
    } else {
      alert("data added ");
      navigate("/")
      console.log("data added");

    }

  }
  // image uploading function
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };

  const uploadImage = async (base64EncodedImage) => {
    console.log(base64EncodedImage);
    try {
      await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { "Content-type": "application/json" },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='form-container'>
      <form className="form-class">
        <div>
        <div className="form-sub-container">
          <label for="MedicineID" className="form-label">Medicine ID</label>
          <input type="text" className="form-text" value={inpval.Medicine_ID} onChange={setdata} id="Medicine_ID" />
        </div>
        <div className="form-sub-container">
          <label for="Name" className="form-label">Supplier Name</label>
          <input type="text" className="form-text" value={inpval.Name} onChange={setdata} id="Name" />
        </div>
        <div className="form-sub-container">
          <label for="Address" className="form-label">Address</label>
          <input type="text" className="form-text" value={inpval.Address} onChange={setdata} id="Address" />
        </div>
        <div className="form-sub-container">
          <label for="Email" className="form-label">Email Address</label>
          <input type="email" className="form-text" value={inpval.Email} onChange={setdata} id="Email" />
        </div>
        <div className="form-sub-container">
          <label for="Contact_number" className="form-label">Contact number</label>
          <input type="number" className="form-text" value={inpval.Contact_number} onChange={setdata} id="Contact_number" />
        </div>
        
        </div>
        <div className="form-2">
        <div className="form-sub-container">
          <label for="Amount" className="form-label">Amount (Units)</label>
          <input type="number" className="form-text" value={inpval.Amount} onChange={setdata} id="Amount" />
        </div>
        <div className="form-sub-container">
          <label for="Price" className="form-label">Price (LKR)</label>
          <input type="number" className="form-text" value={inpval.Price} onChange={setdata} id="Price" />
        </div>
        <div className="form-sub-container">
          <label for="Date" className="form-label">Date</label>
          <input type="date" className="form-text" value={inpval.Date} onChange={setdata} id="Date" />
        </div>
        <div class="btn-container">
          <button type="submit" onClick={addinpdata} className="btn btn-submit">SUBMIT</button>
          <NavLink to={`/`}><button className="btn btn-cancel">CANCEL</button></NavLink>
        </div>

        <div className='upload-file-container'>
        <h5 >Upload Goods receive note:</h5>
        <form onSubmit={handleSubmitFile} className="form">
          <input
            type="file"
            name="image"
            onChange={handleFileInputChange}
            value={fileInputState}
            className="form-input"
          />
          <button className="btn btn-upload" type="submit" >
            Upload
          </button>
        </form>
        {previewSource && (
          <img src={previewSource} alt="chosen" style={{ height: "300px", backgroundColor: 'green' }} />
        )}
      </div>
        </div>


      </form>
      
    </div>


  )
}

export default Insert