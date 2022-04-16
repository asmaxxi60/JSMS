import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddProductForm(props) {

    const [flag, setflag] = useState(true);
    // const [pcategory, setpcategory] = useState(
    //     {
    //         pid:1,
    //         pname:"",
    //         description:"",
    //         qty:0,
    //         weight:0,
    //         color:"",
    //         purity:0,
    //         image: null
    // })
    const navigate = useNavigate();
    const handleFileSize = (event) => {

        if (event.target.files[0].size > 1048576) {
            props.showAlert("file size too big", "warning");
            setflag(false);
        }
        else {
            props.showAlert("Good to go", "sucess");
            setflag(true);
        }
    }
    
    const handleOnSubmit = async(e) => {
    //     console.log("sdasd");
       //e.preventDefault();
    //     try {
    //         const form = document.getElementById("productAddForm")
    // const formData = new FormData(form)
    //         let res = await fetch(`http://localhost:8080/saveProduct`, {
    //             method: "POST", headers:{
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'multipart/form-data;'
    //             },
    //             body: JSON.stringify({
    //                 pname: pcategory.pname,
    //                 description: pcategory.description,
    //                 qty: pcategory.qty,
    //                 weight: pcategory.weight,
    //                 color: pcategory.color,
    //                 file: pcategory.image})
    //             });
            
    //         let resJson = await res.json();
    //         if (res.status === 200) {
    //             alert("Details Updated successfully");
    //             navigate("/productDashboard");
    //         } else {
    //            // alert("Some error occured");
    //             navigate("/productDashboard");
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
       alert("product added successfully");
    //    navigate("/productDashboard");
    //    const form = document.getElementById('productAddForm');

    }

    // const handleCategory = async (e) => {
    //     e.preventDefault();
    //     await fetch("http://localhost:8080/allpCategory").then(respp => (respp.json()).then((data) => {setpcategory(data)}));
    // }
    return (
        <div className='container my-5'>
            {/* <form id='productAddForm' className="row g-3"  onSubmit={handleOnSubmit} > */}
            <form id='productAddForm' className="row g-3" action='http://localhost:8080/saveProduct' method='post' encType='multipart/form-data' onSubmit={handleOnSubmit} >
                <div className="col-md-3">
                    <label className="form-label">Product Name: </label>
                    <input type="text" className="form-control" id="inputEmail4" maxLength="20" name="pname" required={true} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Quantity</label>
                    <input type="number" className="form-control" id="inputPassword4" name="qty" required={true} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Weight</label>
                    <input type="number" className="form-control" id="inputAddress" placeholder="In Grams" name="weight" required={true} />
                </div>
                <div className="col-3">
                    <label className="form-label">Type</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Type of metal" maxLength="20" name="type" required={true} />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Discription</label>
                    <input type="text" className="form-control" id="inputCity" maxLength="255" name="discription" required={true} />
                </div>
                {/* <div className="col-md-3">
                    <label className="form-label">Category</label>
                    <select id="inputState" className="form-select" name="catid" onClick={handleCategory}>
                        {pcategory.map((e) => {
                            return <option key={e.catid} value={parseInt(e.catid, 10)}>{e.cname}</option>
                        })}
                    </select>
                </div> */}
                {/* <div className="col-3">
                    <label className="form-label">Category</label>
                    <input type="number" className="form-control" id="inputZip" name="catid" required={true} />
                </div> */}

                <div className="col-3">
                    <label className="form-label">Purity</label>
                    <input type="number" className="form-control" id="inputZip" name="purity" required={true} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Upload Image File </label>
                    <input className="form-control" type="file" id="formFile" name="file" accept='image/jpeg' onChange={handleFileSize} required={true} />
                </div>
                <div>
                    <button className='btn btn-dark btn-sm' type='submit' disabled={!flag} >Submit</button>
                </div>
            </form>
        </div>
    )
}
