import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/College/Dashboard'
import Login from './Pages/Login/Login'
import AddStudent from './Pages/College/AddStudent'
import DisplayStudent from './Pages/College/DisplayStudent'
import Forgot_password from './Pages/Login/Forgot_password'
import Confirm_password from './Pages/Login/Confirm_password'
import OTP from './Pages/Login/OTP'
import SignUp from './Pages/Login/SignUp'
import SubComp from './Pages/College/SubComp'
import ConfComp from './Pages/College/ConfComp'

function App() {
  return (
   <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/addstudents' element={<AddStudent/>}></Route>
          <Route path='/displaystudents' element={<DisplayStudent/>}></Route>
          <Route path='/subscribedCompanies' element={<SubComp/>}></Route>
          <Route path='/confirmedCompanies' element={<ConfComp/>}></Route>
          <Route path='/forgotpassword' element={<Forgot_password/>}></Route>
          <Route path='/confirmpassword' element={<Confirm_password/>}></Route>
          <Route path='/forgotpassword' element={<Forgot_password/>}></Route>
          <Route path='/otp' element={<OTP/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App