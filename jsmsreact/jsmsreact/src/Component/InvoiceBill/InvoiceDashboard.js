import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { actionCreators } from '../../actions/actionCreators';
import { useDispatch, useSelector } from 'react-redux';


export default function InvoiceDashboard() {

    const [empid, setempid] = useState("asas");
    let dispatch = useDispatch();
    let navigate = useNavigate();

    const [invoiceData, setinvoiceData] = useState([
        {
            "invoiceid": 1,
        "cust_name": "arvind",
        "emailId": "arvind@gmail.com",
        "contact": "5125112",
        "state": "maharshtra",
        "city": "pune",
        "pincode": "411046",
        "amount": 5000.0,
        "sgst": 9.0,
        "cgst": 9.0,
        "gross_Amount": 5200.0,
        "pid1": 1,
        "pid1rate": 500.0,
        "pid1qty": 1.0,
        "pid2": 1,
        "pid2rate": 200.0,
        "pid2qty": 1.0,
        "pid3": 1,
        "pid3rate": 100.0,
        "pid3qty": 1.0
        }
    ])


    const handleEditOnClick = (event) => {

        const a = event.target.value
        console.log(a);
        dispatch(actionCreators.getInvoiceId(a));
        navigate("/EditInvoice");

    }

    const handleDeleteClick = async (event) => {
        const a = event.target.value

        event.preventDefault();
        try {
            let res = await fetch(`http://localhost:8080/invoicebill/${a}`, {
                method: "DELETE"
            });

            let resJson = await res.json();
            if (res.status === 200) {
                alert("Details Updated successfully");
                navigate("/InvoiceDashboard");
                window.location.reload();

            } else {
                alert("Some error occured");
                navigate("/InvoiceDashboard");
            }
        } catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        fetch("http://localhost:8080/invoicebill").then(respp => respp.json()).then(data => setinvoiceData(data));
    }, [])

    return (
        <div className='table-responsive-sm'>
            <h2 className=''>List of all Invoice Bill <Link className="btn btn-dark mx-5" to="/CreateInvoice">+Add New InvoiceBill</Link></h2>
            <table className="table  table-dark" >
                <thead>
                    <tr>
                        <th scope="col">Invoice No.</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Customer Email</th>
                        <th scope="col">Customer Contact</th>
                        <th scope="col">Customer city</th>
                        <th scope="col">Customer State</th>
                        <th scope="col">Pincode</th>
                        <th scope="col">Gross Amount </th>
                        <th></th>
                        <th></th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    {invoiceData.map((e) => {
                        return <tr key={e.invoiceid}>
                            <th scope="row">{e.invoiceid}</th>
                            <td>{e.cust_name}</td>
                            <td>{e.emailId}</td>
                            <td>{e.contact}</td>
                            <td>{e.city}</td>
                            <td>{e.state}</td>
                            <td>{e.pincode}</td>
                           <td>{e.gross_Amount}</td>
                            <td><button type="button" className="btn btn-primary" onClick={handleDeleteClick} value={e.invoiceid}><i className="fa fa-trash" ></i> Delete</button></td>
                            <td><button type="button" className="btn btn-primary" onClick={handleDeleteClick} value={e.invoiceid}><i className="fa fa-trash" ></i> Print</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
