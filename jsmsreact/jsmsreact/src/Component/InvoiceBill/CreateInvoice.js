import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function CreateInvoice(props) {

    const navigate = useNavigate();
    // const amount1= invoiceData.pid1qty*invoiceData.pid1rate;
    // const amount2= invoiceData.pid2qty*invoiceData.pid2rate;
    // const amount3= invoiceData.pid3qty*invoiceData.pid3rate;
    const [amount1, setamount1] = useState(0);
    const [amount2, setamount2] = useState(0);
    const [amount3, setamount3] = useState(0);


    const [product, setproduct] = useState([
        {
            "pid": 1,
            "pname": "Necklace",
            "description": "A necklace is an article of jewellery that is worn around the neck",
            "qty": 1,
            "weight": 28.0,
            "color": "Gold",
            "purity": 22.0,
            "image": null,
            "catid": 1
        }
    ])
    const [invoiceData, setinvoiceData] = useState(
        {
            invoiceid: 6,
            cust_name: "arvind",
            emailId: "arvind@gmail.com",
            contact: "5125112",
            state: "maharshtra",
            city: "pune",
            pincode: "411046",
            qty: 1,
            unit: "nos.",
            rate: 500.0,
            amount: 5000.0,
            sgst: 9.0,
            cgst: 9.0,
            gross_Amount: 5200.0,
            pid1: 1,
            pid1rate: 500.0,
            pid1qty: 1.0,
            pid2: 1,
            pid2rate: 200.0,
            pid2qty: 1.0,
            pid3: 1,
            pid3rate: 100.0,
            pid3qty: 1.0
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
            let res = await fetch(`http://localhost:8080/invoice`, {
                method: "POST", headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cust_name: invoiceData.cust_name,
                    emailId: invoiceData.emailId,
                    contact: invoiceData.contact,
                    state: invoiceData.state,
                    city: invoiceData.city,
                    pincode: invoiceData.pincode,
                    qty: invoiceData.qty,
                    unit: invoiceData.unit,
                    rate: invoiceData.rate,
                    amount: invoiceData.amount,
                    sgst: invoiceData.sgst,
                    cgst: invoiceData.cgst,
                    gross_Amount: invoiceData.gross_Amount,
                    pid1: invoiceData.pid1,
                    pid1rate: invoiceData.pid1.rate,
                    pid1qty: invoiceData.pid1qty,
                    pid2: invoiceData.pid2,
                    pid2rate: invoiceData.pid2rate,
                    pid2qty: invoiceData.pid2qty,
                    pid3: invoiceData.pid3,
                    pid3rate: invoiceData.pid3rate,
                    pid3qty: invoiceData.pid3qty
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
        await setinvoiceData({ ...invoiceData, [e.target.name]: e.target.value });
        console.log({ [e.target.name]: e.target.value })
    }

    // setamount2(invoiceData.pid2qty * invoiceData.pid2rate);
    // setamount3(invoiceData.pid3qty * invoiceData.pid3rate);

    const handleProduct = async (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/allproduct").then(respp => respp.json()).then(data => {
            console.log(data)
            setproduct(data)
        });

    }


    return (
        <div className='container my-5'>

            <form id='empUpdateForm' className="row g-3" onSubmit={handleOnSubmit}>
                <div className="col-md-3">
                    <label className="form-label">Customer Name </label>
                    <input type="text" className="form-control" maxLength="20" maxLength="50" required={true} name="cust_name" onChange={onChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Customer Email ID</label>
                    <input type="email" className="form-control" maxLength="50" required={true} name="emailId" onChange={onChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Contact</label>
                    <input type="number" className="form-control" name="contact" maxLength="50" required={true} onChange={onChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">State</label>
                    <input type="text" className="form-control" maxLength="20" name="state" required={true} onChange={onChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control" maxLength="50" name="city" maxLength="50" required={true} onChange={onChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Pincode</label>
                    <input type="text" className="form-control" name="pincode" maxLength="20" required={true} onChange={onChange} />
                </div>
                <div>
                    <table className="table  table-dark" >
                        <thead>
                            <tr>
                                <th scope="col">Sr.No.</th>
                                <th scope="col">Product Name & Discription</th>
                                <th scope="col">Product Rate</th>
                                <th scope="col">Qty. In nos.</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="col">1</td>
                                <td scope="col">
                                    <select id="inputState" className="form-select" name="catid" onClick={handleProduct}>
                                        {product.map((e) => {
                                            return <option key={e.pid} value={e.pid}>{e.pname}..{e.description}</option>
                                        })}
                                    </select>
                                </td>
                                <td scope="col">
                                    <input type="number" className="form-control" maxLength="10" required={true} name="pid1rate" onChange={onChange} />
                                </td>
                                <td scope="col">
                                    <input type="number" className="form-control" maxLength="10" required={true} name="pid1qty" onChange={onChange} />
                                </td>
                                <td scope="col">{invoiceData.pid1rate * invoiceData.pid1qty}</td>
                            </tr>
                            <tr>
                                <td scope="col">2</td>
                                <td scope="col">
                                    <select id="inputState" className="form-select" name="catid" onClick={handleProduct}>
                                        {product.map((e) => {
                                            return <option key={e.pid} value={e.pid}>{e.pname}..{e.description}</option>
                                        })}
                                    </select>
                                </td>
                                <td scope="col">
                                    <input type="number" className="form-control" maxLength="10" required={true} name="pid2rate" onChange={onChange} />
                                </td>
                                <td scope="col">
                                    <input type="number" className="form-control" maxLength="10" required={true} name="pid2qty" onChange={onChange} />
                                </td>
                                <td scope="col">{invoiceData.pid2rate * invoiceData.pid2qty}</td>
                            </tr>
                            <tr>
                                <td scope="col">3</td>
                                <td scope="col">
                                    <select id="inputState" className="form-select" name="catid" onClick={handleProduct}>
                                        {product.map((e) => {
                                            return <option key={e.pid} value={e.pid}>{e.pname}..{e.description}</option>
                                        })}
                                    </select>
                                </td>
                                <td scope="col">
                                    <input type="number" className="form-control" maxLength="10" required={true} name="pid3rate" onChange={onChange} />
                                </td>
                                <td scope="col">
                                    <input type="number" className="form-control" maxLength="10" required={true} name="pid3qty" onChange={onChange} />
                                </td>
                                <td scope="col">{invoiceData.pid3rate * invoiceData.pid3qty}</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col">{(invoiceData.pid1rate * invoiceData.pid1qty) + (invoiceData.pid2rate * invoiceData.pid2qty) + (invoiceData.pid3rate * invoiceData.pid3qty)}</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="col-md-3">
                    <label className="form-label">Amount</label>
                    <input className="form-control" type="number" name="amount" value={(invoiceData.pid1rate * invoiceData.pid1qty) + (invoiceData.pid2rate * invoiceData.pid2qty) + (invoiceData.pid3rate * invoiceData.pid3qty)} disabled={true} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">SGST</label>
                    <input className="form-control" type="number" name="sgst" required={true} placeholder={invoiceData.sgst} onChange={onChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">CGST</label>
                    <input className="form-control" type="number" name="cgst" required={true} placeholder={invoiceData.cgst} onChange={onChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Gross Amount</label>
                    <input className="form-control" type="number" name="gross_Amount" required={true}  value={ 
                        (((invoiceData.pid1rate * invoiceData.pid1qty) + (invoiceData.pid2rate * invoiceData.pid2qty) + (invoiceData.pid3rate * invoiceData.pid3qty)) * ((100 + invoiceData.sgst + invoiceData.cgst) / 100))}  onChange={onChange}/>
                </div>
                <div>
                    <button className='btn btn-dark btn-sm' type='submit'>Submit</button>
                </div>
            </form>

        </div>
    )

}
