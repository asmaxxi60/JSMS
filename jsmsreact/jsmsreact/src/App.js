import logo from './logo.svg';
import './App.css';
import Loginpage from './Component/Loginpage';
import NavBar from './Component/NavBar';
import TextForm from './Component/TextForm';
import About from './Component/About';
import Alert from './Component/Alert';
import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './Component/Footer';
import JSMS_disciption from './Component/JSMS_disciption';
import ContactUs from './Component/ContactUs';
import ProductCatlogue from './Component/Products';
import ProductDashboard from './Component/ProductDashboard';
import AddProductForm from './Component/Product/AddProductForm';
import ViewAllEmp from './Component/EmployeeManagement/ViewAllEmp';
import EditEmp from './Component/EmployeeManagement/EditEmp';
import CreateEmp from './Component/EmployeeManagement/CreateEmp';
import InvoicePrintPage from './Component/InvoiceBill/InvoicePrintPage';
import InvoiceDashboard from './Component/InvoiceBill/InvoiceDashboard';
import CreateInvoice from './Component/InvoiceBill/CreateInvoice';
import CreateVendor from "./Component/Vendor/CreateVendor";
import Vendor from './Component/Vendor/Vendor';
import EditVendor from "./Component/Vendor/EditVendor"
import backgroundImage from "./Component/BackGroundImg1.jpg"
//import LoginUserState from './Context/LoginUserState';


function App() {
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 5000);
  }


  const [authstatus, setauthstatus] = useState(localStorage.getItem("sucess"));

  return (
    <div style={{
      marginTop: '150px',
      fontSize: '25px'
      
    }}>
      <BrowserRouter>
        <NavBar title="JSMS" />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            {/* <Route path="/" element={<TextForm headings="Enter the Text to analyze" showAlert={showAlert} />}/> */}
            <Route path="/" element={<JSMS_disciption /> } />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/login" element={<><Loginpage /></>} />
            <Route path="/productDashboard" element={<ProductDashboard />} />
            <Route path="/addProductForm" element={<AddProductForm showAlert={showAlert} />} />
            <Route path="/ViewAllEmp" element={<ViewAllEmp />} />
            <Route path="/EditEmp" element={<EditEmp />} />
            <Route path="/saveEmployee" element={<CreateEmp />} />
            <Route path="/InvoiceDashboard" element={<InvoiceDashboard />} />
            <Route path="/invoicePrintPage" element={<InvoicePrintPage />} />
            <Route path="/CreateInvoice" element={<CreateInvoice />} />
            <Route path="/Vendor" element={<Vendor />} />
            <Route path="/EditVendor" element={<EditVendor />} />
            <Route path="CreateVendor" element={<CreateVendor />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;
