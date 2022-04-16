import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionCreators } from '../actions/actionCreators';


export default function Loginpage(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginData, setloginData] = useState(
        {
            email: "",
            pwd: ""
        }
    );

    const [loggedInUserData, setloggedInUserData] = useState(
        {
            username: "",
            userDesignation: ""
        })


    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch(`http://localhost:8080/signin`, {
                method: "POST", headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: loginData.email,
                    pwd: loginData.pwd
                }),
            });
            let resJson = await res.json();
            if (res.status === 200 && resJson.success == true) {
                await setloggedInUserData({
                    username: resJson.name,
                    userDesignation: resJson.designation
                });
                dispatch(actionCreators.updateName(resJson.name));
                dispatch(actionCreators.updateDesignation(resJson.designation));
                dispatch(actionCreators.updateState(true));
                // console.log(resJson.success);
                alert("Login successfully");
                navigate("/");
            } else {
                alert("Invalid email & password");
                // navigate("/ViewAllEmp");
            }
        } catch (err) {
            console.log(err);
        }
    }
    const onChange = async (e) => {
        await setloginData({ ...loginData, [e.target.name]: e.target.value });

    }

    return (
        <>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary  my-3" style={{ backgroundColor: "#34495E" }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    Click Here To Login
                </button>
            </div>

            <nav id="navbar-example2" className="navbar navbar-Dark px-3" method='post' action="" style={{ backgroundColor: "#34495E" }}>
                <a className="navbar-brand" href="#" >User Manual</a>
                <ul className="nav nav-pills">
                   
                </ul>
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
                <h4 id="scrollspyHeading1">Login by using the loging and password provided</h4>
                <h4 id="scrollspyHeading2">If you are admin/manager you will see the component as per the rspective role </h4>
                <h4 id="scrollspyHeading3"> Use the Logout button to logout</h4>
                
                
            </div>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">LOGIN</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <form id='empUpdateForm' className="row g-3" onSubmit={handleOnSubmit}>
                            <div className="form-group">
                                <label className="form-label">Email ID </label>
                                <input type="email" className="form-control" maxLength="20" maxLength="50" required={true} name="email" onChange={onChange} />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" maxLength="50" required={true} name="pwd" onChange={onChange} />
                            </div>
                            <div>
                                <button className='btn btn-dark btn-sm' type='submit'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )

}
