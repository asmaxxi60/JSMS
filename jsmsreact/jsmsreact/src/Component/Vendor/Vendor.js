import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { actionCreators } from '../../actions/actionCreators';
import { useDispatch, useSelector } from 'react-redux';


export default function Vendor() {

    const [empid, setempid] = useState("asas");
    let dispatch = useDispatch();
    let navigate = useNavigate();

    const [vendordata, setvendordata] = useState([
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
    ])

    //setempid("assddfgdg");

    const handleEditOnClick = (event) => {
        // document.getElementById("editbutton").key
        //setempid("assddfgdg");
        // dispatch(actionCreators.getEmpId(vendordata));
        const a = event.target.value
        console.log(a);
        dispatch(actionCreators.getEmpId(a));
        navigate("/EditVendor");

    }

    const handleDeleteClick = async (event) => {
        const a = event.target.value
        //  console.log(a);
        //  dispatch(actionCreators.getEmpId(a));
        //  navigate("/EditEmp");
        event.preventDefault();
        try{
        let res = await fetch(`http://localhost:8080/vendors/${a}`, {
            method: "DELETE"
        });

        let resJson = await res.json();
        if (res.status === 200) {
            alert("Vendor Deleted Successfully");
            navigate("/Vendor");
            window.location.reload();

        } else {
            alert("Some error occured");
            navigate("/Vendor");
        }
    } catch (err) {
        console.log(err);
    }

}

useEffect(() => {
    fetch("http://localhost:8080/vendors").then(respp => respp.json()).then(data => setvendordata(data));
}, [])

return (
    <div className='table-responsive-sm'>
        <h2 className=''>List of all Vendors <Link className="btn btn-dark mx-5" to="/createVendor">+Add New Vendor</Link></h2>
        <table className="table  table-dark" >
            <thead>
                <tr>
                    <th scope="col">VendorID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email ID</th>
                    <th scope="col">Contact</th>
                    <th scope="col">State</th>
                    <th scope="col">City</th>
                    <th scope="col">Pincode</th>
                    <th></th>
                    <th></th>

                </tr>
            </thead>
            <tbody>
                {vendordata.map((e) => {
                    return <tr key={e.id}>
                        <th scope="row">{e.id}</th>
                        <td>{e.firstName}</td>
                        <td>{e.lastName}</td>
                        <td>{e.emailId}</td>
                        <td>{e.contact}</td>
                        <td>{e.state}</td>
                        <td>{e.city}</td>
                        <td>{e.pincode}</td>
                        <td ><button type="button" className="btn btn-primary" onClick={handleEditOnClick} value={e.id}><span className="fa fa-edit"  ></span>Edit</button></td>
                        <td><button type="button" className="btn btn-primary" onClick={handleDeleteClick} value={e.id}><i className="fa fa-trash" ></i> Delete</button></td>

                    </tr>
                })}


            </tbody>
        </table>
    </div>
)
}
