import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function EditVendor(props) {

  
  const empid = useSelector(state => state.EmpID);
  const navigate = useNavigate();
  const [updatedVendorData, setupdatedVendorData] = useState(
    {
        id: 0,
        firstName: "",
        lastName: "",
        emailId: "",
        contact: "",
        state: "",
        city: "",
        pincode: ""
    }
  );
  const [currentEmoData, setcurrentEmoData] = useState(
    {
        "id": 2,
        "firstName": "abx",
        "lastName": "hhh",
        "emailId": "asd@hdh.com",
        "contact": "632321231",
        "state": "maha",
        "city": "mumbai",
        "pincode": "5421564"
    }

  );

  useEffect(() => {
    if (empid == 0) {
      alert("please select Vendor ID ");
    }
    else fetch(`http://localhost:8080/vendors/${empid}`).then(respp => respp.json()).then(data => setcurrentEmoData(data));
  }, [])

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(`http://localhost:8080/vendors/${empid}`, {
        method: "POST", headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          empid: empid,
          lastName: updatedVendorData.lastName,
          firstName: updatedVendorData.firstName,
          email: updatedVendorData.emailId,
          contact: updatedVendorData.contact,
          state: updatedVendorData.state,
          city: updatedVendorData.city,
          pincode: updatedVendorData.pincode,

        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        alert("Details Updated successfully");
        navigate("/ViewAllEmp");
      } else {
        alert("Some error occured");
        navigate("/ViewAllEmp");
      }
    } catch (err) {
      console.log(err);
    }
  }
  const onChange = async (e) => {
   await setupdatedVendorData({...updatedVendorData, [e.target.name]: e.target.value }); 
}

  return (
    <div className='container my-5'>
      <h3>Vendor ID: {empid}</h3>
      <form id='empUpdateForm' className="row g-3"  onSubmit={handleOnSubmit}>
        <div className="col-md-3">
          <label className="form-label">First Name </label>
          <input type="text" className="form-control" maxLength="20"  maxLength="50" required={true} name="firstName" placeholder={currentEmoData.firstName} onChange={onChange} />
        </div>
        <div className="col-md-3">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control"  maxLength="50" required={true} name="lastName" placeholder={currentEmoData.lastName} onChange={onChange}/>
        </div>
        <div className="col-md-3">
          <label className="form-label">Email ID</label>
          <input type="email" className="form-control" placeholder={currentEmoData.email} name="email" maxLength="50" required={true} onChange={onChange} />
        </div>
        <div className="col-md-3">
          <label className="form-label">Contact</label>
          <input type="number" className="form-control" placeholder={currentEmoData.contact} maxLength="20" name="contact" required={true} onChange={onChange} />
        </div>
        <div className="col-md-3">
          <label className="form-label">State</label>
          <input type="text" className="form-control" maxLength="50" name="state" maxLength="50" required={true} placeholder={currentEmoData.state}  onChange={onChange}/>
        </div>
        <div className="col-md-3">
          <label className="form-label">City</label>
          <input type="text" className="form-control" name="city" maxLength="50" required={true} placeholder={currentEmoData.city}  onChange={onChange}/>
        </div>
        <div className="col-md-3">
          <label className="form-label">pincode</label>
          <input type="number" className="form-control" name="pincode" required={true} placeholder={currentEmoData.pincode}  onChange={onChange}/>
        </div>
        <div className="col-md-3">
          <label className="form-label">Designation</label>
          <input className="form-control" type="text" name="designation" maxLength="50" required={true} placeholder={currentEmoData.designation} onChange={onChange}/>
          </div>
        <div className="col-md-3">
          <label className="form-label">salary</label>
          <input className="form-control" type="number" name="salary" maxLength="50"  required={true} placeholder={currentEmoData.salary}  onChange={onChange}/>
        </div>
        <div className="col-md-3">
          <label className="form-label">Date Of Joining</label>
          <input className="form-control" type="date" name="joindate" maxLength="50"  required={true} placeholder={currentEmoData.joindate} onChange={onChange}/>
        </div>
        <div>
          <button className='btn btn-dark btn-sm' type='submit'>Submit</button>
        </div>
      </form>

    </div>
  )

}
