import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/College/Dashboard'
import Login from './Pages/College/Login'
import AddStudent from './Pages/College/AddStudent'
import DisplayStudent from './Pages/College/DisplayStudent'

function App() {
  return (
   <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/addstudents' element={<AddStudent/>}></Route>
          <Route path='/displaystudents' element={<DisplayStudent/>}></Route>
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App