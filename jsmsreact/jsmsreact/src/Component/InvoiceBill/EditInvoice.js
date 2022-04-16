// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';


// export default function EditInvoice() {

//  // const [pcategory, setpcategory] = useState([])
//   const invoiceid = useSelector(state => state.InvoiceId);
//   var amount = updatedInvoiceData.rate * updatedInvoiceData.qty;
//   const navigate = useNavigate();
//   const [updatedInvoiceData, setupdatedInvoiceData] = useState(
//     {
        
//         invoiceid: 1,
//         cust_name: "",
//         emailId: "",
//         contact: "",
//         state: "",
//         city: "",
//         pincode: "",
//         qty: 2,
//         unit: "nos.",
//         rate: 0,
//         amount: 0,
//         sgst: 0,
//         cgst: 0,
//         gross_Amount : 0,
//         p_id: [{}]
//     }
//   );
//   const [currentInvoiceData, setcurrentInvoiceData] = useState(
//     {
        
//         "invoiceid": 1,
//         "cust_name": "xyz",
//         "emailId": "asas@asas.sa",
//         "contact": "5612315",
//         "state": "maha",
//         "city": "pune",
//         "pincode": "5423156",
//         "qty": 2,
//         "unit": "nos.",
//         "rate": 2200.0,
//         "amount": 5000.0,
//         "sgst": 9.0,
//         "cgst": 9.0,
//         "gross_Amount" :0,
//         "p_id": [2,2]
//     }

//   );

//   useEffect(() => {
//     if (invoiceid == 0) {
//       alert("please select Empoyee ID from Employee Management Tab");
//     }
//     else fetch(`http://localhost:8080/invoicebill/${invoiceid}`).then(respp => respp.json()).then(data => setcurrentInvoiceData(data));
//   }, [])

//   const handleOnSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let res = await fetch(`http://localhost:8080/updateInvoiceBill/${invoiceid}`, {
//         method: "POST", headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//       },
//         body: JSON.stringify({
//             invoiceid: invoiceid,
//             cust_name: updatedInvoiceData.cust_name,
//             emailId: updatedInvoiceData.emailId,
//             contact: updatedInvoiceData.contact,
//             state: updatedInvoiceData.state,
//             city: updatedInvoiceData.city,
//             pincode: updatedInvoiceData.pincode,
//             qty: updatedInvoiceData.qty,
//             unit: updatedInvoiceData.unit,
//             rate: updatedInvoiceData.rate,
//             amount: updatedInvoiceData.amount,
//             sgst : updatedInvoiceData.sgst,
//             cgst: updatedInvoiceData.cgst,
//             gross_Amount: updatedInvoiceData.gross_Amount,
//             p_id: updatedInvoiceData.p_id,

//         }),
//       });
//       let resJson = await res.json();
//       if (res.status === 200) {
//         alert("Details Updated successfully");
//         navigate("/InvoiceDashboard");
//       } else {
//         alert("Some error occured");
//         navigate("/InvoiceDashboard");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   const onChange = async (e) => {
//    await setupdatedInvoiceData({...updatedInvoiceData, [e.target.name]: e.target.value }); 
// }

//   return (
//     <div className='container my-5'>
//       <h3>Employee ID: {empid}</h3>
//       <form id='empUpdateForm' className="row g-3"  onSubmit={handleOnSubmit}>
//         <div className="col-md-3">
//           <label className="form-label">Customer Name </label>
//           <input type="text" className="form-control" maxLength="20"  maxLength="50" required={true} name="cust_name" placeholder={currentInvoiceData.cust_name} onChange={onChange} />
//         </div>
//         <div className="col-md-3">
//           <label className="form-label">Customer Email ID</label>
//           <input type="text" className="form-control"  maxLength="50" required={true} name="emailId" placeholder={currentInvoiceData.emailId} onChange={onChange}/>
//         </div>
//         <div className="col-md-3">
//           <label className="form-label">Contact</label>
//           <input type="email" className="form-control" placeholder={currentInvoiceData.contact} name="contact" maxLength="50" required={true} onChange={onChange} />
//         </div>
//         <div className="col-md-3">
//           <label className="form-label">State</label>
//           <input type="number" className="form-control" placeholder={currentInvoiceData.state} maxLength="20" name="state" required={true} onChange={onChange} />
//         </div>
//         <div className="col-md-3">
//           <label className="form-label">City</label>
//           <input type="text" className="form-control" maxLength="50" name="city" maxLength="50" required={true} placeholder={currentInvoiceData.city}  onChange={onChange}/>
//         </div>
//         <div className="col-md-3">
//           <label className="form-label">Pincode</label>
//           <input type="text" className="form-control" name="pincode" maxLength="20" required={true} placeholder={currentInvoiceData.pincode}  onChange={onChange}/>
//         </div>
//         <div className="col-md-3">
//           <label className="form-label">Qty</label>
//           <input type="number" className="form-control" name="qty" required={true} placeholder={currentInvoiceData.qty}  onChange={onChange}/>
//         </div>
//         <div className="col-md-3">
//           <label className="form-label">Unit</label>
//           <input className="form-control" type="text" name="unit"   required={true} placeholder={currentInvoiceData.unit} onChange={onChange}/>
//           </div>
//         <div className="col-md-3">
//           <label className="form-label">Rate</label>
//           <input className="form-control" type="number" name="rate"   required={true} placeholder={currentInvoiceData.rate}  onChange={onChange}/>
//         </div>
//         <div className="col-md-3">
//           <label className="form-label">Amount</label>
//           <input className="form-control" type="number" name="amount"  required={true} placeholder={currentInvoiceData.tax} onChange={onChange}/>
//         </div>
//         <div className="col-md-3">
//           <label className="form-label">SGST</label>
//           <input className="form-control" type="number" name="sgst"  required={true} placeholder={currentInvoiceData.Amount} onChange={onChange}/>
//         </div>
//         <div className="col-md-3">
//           <label className="form-label">CGST</label>
//           <input className="form-control" type="number" name="cgst"  required={true} placeholder={currentInvoiceData.Amount} onChange={onChange}/>
//         </div>
//         <div className="col-md-3">
//           <label className="form-label">Gross Amount</label>
//           <input className="form-control" type="number" name="gross_Amount"  required={true} placeholder={currentInvoiceData.Amount} onChange={onChange}/>
//         </div>
//         <div>
//           <button className='btn btn-dark btn-sm' type='submit'>Submit</button>
//         </div>
//       </form>

//     </div>
//   )

// }
