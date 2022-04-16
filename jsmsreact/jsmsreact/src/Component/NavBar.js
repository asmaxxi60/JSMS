import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionCreators } from '../actions/actionCreators';
import { bindActionCreators } from 'redux';


export default function NavBar(props) {
    let location = useLocation();
    let userLoginValid = useSelector(state => state.userAccess);
    let userLoginName = useSelector(state => state.userName);
    let userLoginDesignation = useSelector(state => state.userDesignation);
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const actions = bindActionCreators(actionCreators, dispatch);
    console.log(userLoginValid);

    useEffect(() => {
    }, [location])

    const handleLogoutOnClick = async () => {
        dispatch(actionCreators.updateState(false));
        dispatch(actionCreators.updateName(""));
        dispatch(actionCreators.updateDesignation(""));
        alert("logged out successfully");
        navigate("/");
        window.location.reload();
    }
    return (

        <nav className="navbar  fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                        ${userLoginDesignation == 'admin' ?
                            <>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/productDashboard" ? "active" : ""}`} to="/productDashboard">Product Catlogue</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/EmployeeManagement" ? "active" : ""}`} to="/ViewAllEmp">EmployeeManagement</Link>
                                </li> */}

                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/PurchaseBill" ? "active" : ""}`} to="/PurchaseBill">PurchaseBill</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/InvoiceDashboard" ? "active" : ""}`} to="/InvoiceDashboard">Sales</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/Vendor" ? "active" : ""}`} to="/Vendor">Vendor</Link>
                                </li>``


                                {/* <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/InvoiceDashboard" ? "active" : ""}`} to="/ViewAllEmp">InvoiceDashboard</Link>
                                </li> */}
                            </>
                            :
                            <>
                                {/* <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/contactUs" ? "active" : ""}`} to="/contactUs">ContactUS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/productDashboard" ? "active" : ""}`} to="/productDashboard">Product Catlogue</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/InvoiceDashboard" ? "active" : ""}`} to="/InvoiceDashboard">Sales</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/Vendor" ? "active" : ""}`} to="/Vendor">Vendor</Link>
                                </li> */}

                            </>
                        };

                        ${userLoginDesignation == 'manager' ?
                            <>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/productDashboard" ? "active" : ""}`} to="/productDashboard">Product Catlogue</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/EmployeeManagement" ? "active" : ""}`} to="/ViewAllEmp">EmployeeManagement</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/PurchaseBill" ? "active" : ""}`} to="/PurchaseBill">PurchaseBill</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/InvoiceDashboard" ? "active" : ""}`} to="/InvoiceDashboard">Sales</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/Vendor" ? "active" : ""}`} to="/Vendor">Vendor</Link>
                                </li>


                                {/* <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/InvoiceDashboard" ? "active" : ""}`} to="/ViewAllEmp">InvoiceDashboard</Link>
                                </li> */}
                            </>
                            :
                            <>
                                {/* <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/contactUs" ? "active" : ""}`} to="/contactUs">ContactUS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/productDashboard" ? "active" : ""}`} to="/productDashboard">Product Catlogue</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/InvoiceDashboard" ? "active" : ""}`} to="/InvoiceDashboard">Sales</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/Vendor" ? "active" : ""}`} to="/Vendor">Vendor</Link>
                                </li> */}

                            </>
                        };
                        ${userLoginDesignation == null ?
                            <>
                               <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/contactUs" ? "active" : ""}`} to="/contactUs">ContactUS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/productDashboard" ? "active" : ""}`} to="/productDashboard">Product Catlogue</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/InvoiceDashboard" ? "active" : ""}`} to="/InvoiceDashboard">Sales</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/Vendor" ? "active" : ""}`} to="/Vendor">Vendor</Link>
                                </li> */}


                                {/* <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/InvoiceDashboard" ? "active" : ""}`} to="/ViewAllEmp">InvoiceDashboard</Link>
                                </li> */}
                            </>
                            :
                            <>
                               

                            </>
                        };

                    </ul>
                    <h4 className='nav-link' style={{ color: 'White' }}>Welcome {userLoginName}</h4>
                    ${userLoginValid == null ? <Link className="btn btn-primary mx-2" to="/login">User</Link> : <button className="btn btn-primary mx-2" onClick={handleLogoutOnClick}>Logout</button>}
                    {/* ${userLoginValid ? <button className="btn btn-primary mx-2" onClick={handleLogoutOnClick}>Logout</button> : ""} */}
                    {/* <Link className="btn btn-primary mx-2" to="/login" hidden="">User</Link>  */}
                    {/* <button className="btn btn-primary mx-2" onClick={handleLogoutOnClick}>Logout</button> */}
                </div>
            </div>

        </nav>
    )
}

NavBar.prototype = { title: PropTypes.string.isRequired };
NavBar.defaultProps = { title: 'Set the title' };
