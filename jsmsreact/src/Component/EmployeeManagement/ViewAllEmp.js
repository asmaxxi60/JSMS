import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { actionCreators } from '../../actions/actionCreators';
import { useDispatch, useSelector } from 'react-redux';


export default function ViewAllEmp() {

    const [empid, setempid] = useState("asas");
    let dispatch = useDispatch();
    let navigate = useNavigate();

    const [empData, setempData] = useState([
        {
            "empid": 1,
            "firstName": "avantika",
            "lastName": "sahani",
            "email": "anand@gmail",
            "contact": "234989 38465789",
            "state": "maharshtra",
            "city": "pune",
            "pincode": "411046",
            "designation": "emp2",
            "salary": 10000.0,
            "joindate": "20.05.2022"
        }
    ])

    //setempid("assddfgdg");

    const handleEditOnClick = (event) => {
        // document.getElementById("editbutton").key
        //setempid("assddfgdg");
        // dispatch(actionCreators.getEmpId(empData));
        const a = event.target.value
        console.log(a);
        dispatch(actionCreators.getEmpId(a));
        navigate("/EditEmp");

    }

    const handleDeleteClick = async (event) => {
        const a = event.target.value
        //  console.log(a);
        //  dispatch(actionCreators.getEmpId(a));
        //  navigate("/EditEmp");
        event.preventDefault();
        try{
        let res = await fetch(`http://localhost:8080/api/employees/${a}`, {
            method: "DELETE"
        });

        let resJson = await res.json();
        if (res.status === 200) {
            alert("Deleted successfully");
            navigate("/ViewAllEmp");
            ///window.location.reload();

        } else {
            alert("Some error occured");
            navigate("/ViewAllEmp");
        }
    } catch (err) {
        console.log(err);
    }

}

useEffect(() => {
    fetch("http://localhost:8080/api/employees").then(respp => respp.json()).then(data => setempData(data));
}, [])

return (
    <div className='table-responsive-sm'>
        <h2 className=''>List of all Employees <Link className="btn btn-dark mx-5" to="/saveEmployee">+Add New Employee</Link></h2>
        <table className="table  table-dark" >
            <thead>
                <tr>
                    <th scope="col">EmpID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email ID</th>
                    <th scope="col">Contact</th>
                    <th scope="col">State</th>
                    <th scope="col">City</th>
                    <th scope="col">Pincode</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Date Of Joining</th>
                    <th></th>
                    <th></th>

                </tr>
            </thead>
            <tbody>
                {empData.map((e) => {
                    return <tr key={e.empid}>
                        <th scope="row">{e.empid}</th>
                        <td>{e.firstName}</td>
                        <td>{e.lastName}</td>
                        <td>{e.email}</td>
                        <td>{e.contact}</td>
                        <td>{e.state}</td>
                        <td>{e.city}</td>
                        <td>{e.pincode}</td>
                        <td>{e.designation}</td>
                        <td>{e.salary}</td>
                        <td>{e.joindate}</td>
                        <td ><button type="button" className="btn btn-primary" onClick={handleEditOnClick} value={e.empid}><span className="fa fa-edit"  ></span>Edit</button></td>
                        <td><button type="button" className="btn btn-primary" onClick={handleDeleteClick} value={e.empid}><i className="fa fa-trash" ></i> Delete</button></td>

                    </tr>
                })}


            </tbody>
        </table>
    </div>
)
}
