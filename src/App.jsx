import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/College/Dashboard'
import Login from './Pages/College/Login'

function App() {
  return (
   <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App