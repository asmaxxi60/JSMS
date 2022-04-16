import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function CreateVendor(props) {

    const navigate = useNavigate();
    const [updatedVendorData, setupdatedVendorData] = useState(
        {
            firstName: "xyz",
            lastName: "abc",
            emailId: "asmax@gmail.com",
            contact: "983654218",
            state: "maha",
            city: "pune",
            pincode: "411042"
        }
    );

    //   useEffect(() => {
    //     if (empid == 0) {
    //       alert("please select Empoyee ID from Employee Management Tab");
    //     }
    //     else fetch(`http://localhost:8080/api/employees/${empid}`).then(respp => respp.json()).then(data => setcurrentEmoData(data));
    //   }, [])

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch(`http://localhost:8080/vendors`, {
                method: "POST", headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: updatedVendorData.firstName,
                    lastName: updatedVendorData.lastName,
                    emailId: updatedVendorData.emailId,
                    contact: updatedVendorData.contact,
                    state: updatedVendorData.state,
                    city: updatedVendorData.city,
                    pincode: updatedVendorData.pincode,
                }),
            });

            
            let resJson = await res.json();
            if (res.status === 200) {
                alert("Details Updated successfully");
                navigate("/Vendor");
            } else {
                alert("Some error occured");
                navigate("/Vendor");
            }
        } catch (err) {
            console.log(err);
        }
    }
    const onChange = async (e) => {
        await setupdatedVendorData({ ...updatedVendorData, [e.target.name]: e.target.value });
    }

    return (
        <div className='container my-5'>
            <h3>Create New Vendor</h3>
            <form id='empUpdateForm' className="row g-3" onSubmit={handleOnSubmit}>
                <div className="col-md-3">
                    <label className="form-label">First Name </label>
                    <input type="text" className="form-control" maxLength="20" maxLength="50" required={true} name="firstName" onChange={onChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" maxLength="50" required={true} name="lastName" onChange={onChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Email ID</label>
                    <input type="email" className="form-control" name="emailId" maxLength="50" required={true} onChange={onChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Contact</label>
                    <input type="number" className="form-control" maxLength="20" name="contact" required={true} onChange={onChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">State</label>
                    <input type="text" className="form-control" maxLength="50" name="state" maxLength="50" required={true} onChange={onChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control" name="city" maxLength="50" required={true} onChange={onChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">pincode</label>
                    <input type="number" className="form-control" name="pincode" required={true} onChange={onChange} />
                </div>
               
                <div>
                    <button className='btn btn-dark btn-sm' type='submit'>Submit</button>
                </div>
            </form>

        </div>
    )

}
