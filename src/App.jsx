import { BrowserRouter, Route, Routes } from "react-router-dom";

//Login Pages Imports 
import SignUp from "./Pages/Login/SignUp";
import Login from "./Pages/Login/Login";
import Forgot_password from "./Pages/Login/Forgot_password";
import Confirm_password from "./Pages/Login/Confirm_password";
import OTP from "./Pages/Login/OTP";
import Verfication from "./Pages/Login/Verfication";

//College Pages Imports
import Dashboard from "./Pages/College/Dashboard";
import AddStudent from "./Pages/College/AddStudent";
import DisplayStudent from "./Pages/College/DisplayStudent";
import SubComp from "./Pages/College/SubComp";
import ConfComp from "./Pages/College/ConfComp";
import SendList from "./Pages/College/SendList";
import ConfirmStudents from "./Pages/College/ConfirmStudents";
import SelectStudents from "./Pages/College/SelectStudents";

//Company Page Imports
import DashBoard from "./Pages/company/DashBoard";
import GetCompany from "./Pages/company/GetCollege";
import ConfirmedCollege from "./Pages/company/ConfirmedCollege";
import SubscribedCollege from "./Pages/company/SubscribedCollege";
import DisplayStudents from "./Pages/company/DisplayStudents";
import SelectedStudents from "./Pages/company/Students"
import GetStudents from "./Pages/company/GetStudents";

import DataTable from "./components/DataTable";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          /* Login and Sign Up Routes */
          <Route path="/" element={<Login />}></Route>
          <Route path="/forgotpassword" element={<Forgot_password/>}></Route>
          <Route path="/confirmpassword" element={<Confirm_password/>}></Route>
          <Route path="/otp" element={<OTP/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/verify" element={<Verfication/>}></Route>

          /* College Side Routes */
          <Route path="/college" element={<Dashboard/>}></Route>
          <Route path="/addstudents" element={<AddStudent/>}></Route>
          <Route path="/displaystudents" element={<DisplayStudent/>}></Route>
          <Route path="/subscribedCompanies" element={<SubComp/>}></Route>
          <Route path="/confirmedCompanies" element={<ConfComp/>}></Route>
          <Route path="/confirmStudents" element={<ConfirmStudents/>}></Route>
          <Route path="/selectStudents" element={<SelectStudents/>}></Route>
          <Route path="/sendList" element={<SendList/>}></Route>


          /* Company Side Routes */
          <Route path="/company" element={<DashBoard />}></Route>
          <Route path="/getcollege" element={<GetCompany/>}></Route>
          <Route path="/confirmedcollege" element={<ConfirmedCollege/>}></Route>
          <Route path="/requestedcollege" element={<SubscribedCollege/>}></Route>
          <Route path="/companystudent" element={<DisplayStudents/>}></Route>
          <Route path="/datatable" element={<DataTable/>}></Route> 
          <Route path="/getStudents" element={<GetStudents/>}></Route>
          <Route path="/selectedStudents" element={<SelectedStudents/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
