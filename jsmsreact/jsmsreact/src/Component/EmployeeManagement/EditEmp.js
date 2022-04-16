import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function EditEmp(props) {

  const [pcategory, setpcategory] = useState([])
  const empid = useSelector(state => state.EmpID);
  const navigate = useNavigate();
  const [updatedEMPData, setupdatedEMPData] = useState(
    {
      empid: 0,
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      state: "",
      city: "",
      pincode: "",
      designation: "",
      salary: 0,
      joindate: ""
    }
  );
  const [currentEmoData, setcurrentEmoData] = useState(
    {
      "id": 1,
      "firstName": "xyz",
      "lastName": "abc",
      "emailId": "asmax@gmail.com",
      "contact": "983654218",
      "state": "maha",
      "city": "pune",
      "pincode": "411042"
    }

  );

  useEffect(() => {
    if (empid == 0) {
      alert("please select Empoyee ID from Employee Management Tab");
    }
    else fetch(`http://localhost:8080/api/employees/${empid}`).then(respp => respp.json()).then(data => setcurrentEmoData(data));
  }, [])

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(`http://localhost:8080/api/Updateemployees/${empid}`, {
        method: "POST", headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          empid: empid,
          lastName: currentEmoData.lastName,
          firstName: currentEmoData.firstName,
          email: currentEmoData.email,
          contact: updatedEMPData.contact,
          state: updatedEMPData.state,
          city: updatedEMPData.city,
          pincode: updatedEMPData.pincode,
          designation: currentEmoData.designation,
          salary: updatedEMPData.salary,
          joindate: currentEmoData.joindate
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
   await setupdatedEMPData({...updatedEMPData, [e.target.name]: e.target.value }); 
}

  return (
    <div className='container my-5'>
      <h3>Employee ID: {empid}</h3>
      <form id='empUpdateForm' className="row g-3"  onSubmit={handleOnSubmit}>
        <div className="col-md-3">
          <label className="form-label">First Name </label>
          <input type="text" className="form-control" maxLength="20"  maxLength="50" required={true} name="firstName" value={currentEmoData.firstName} onChange={onChange} disabled={true}/>
        </div>
        <div className="col-md-3">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control"  maxLength="50" required={true} name="lastName" value={currentEmoData.lastName} onChange={onChange} disabled={true}/>
        </div>
        <div className="col-md-3">
          <label className="form-label">Email ID</label>
          <input type="email" className="form-control" value={currentEmoData.email} name="email" maxLength="50" required={true} onChange={onChange} disabled={true} />
        </div>
        <div className="col-md-3">
          <label className="form-label">Contact</label>
          <input type="number" className="form-control"  placeholder={currentEmoData.contact} maxLength="20" name="contact" required={true} onChange={onChange}  />
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
          <input className="form-control" type="text" name="designation" maxLength="50" required={true} value={currentEmoData.designation} onChange={onChange} disabled={true}/>
          </div>
        <div className="col-md-3">
          <label className="form-label">salary</label>
          <input className="form-control" type="number" name="salary" maxLength="50"  required={true} placeholder={currentEmoData.salary}  onChange={onChange}/>
        </div>
        <div className="col-md-3">
          <label className="form-label">Date Of Joining</label>
          <input className="form-control" type="date" name="joindate" maxLength="50"  required={true} value={currentEmoData.joindate} onChange={onChange} disabled={true}/>
        </div>
        <div>
          <button className='btn btn-dark btn-sm' type='submit'>Submit</button>
        </div>
      </form>

    </div>
  )

}
