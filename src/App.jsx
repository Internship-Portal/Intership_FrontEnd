import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
   <div className='bg-white flex'>
    <Sidebar/>
    <div className="flex-[6]">
      <Navbar/>
    </div> 
   </div>
  )
}

export default App
