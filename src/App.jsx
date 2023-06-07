import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Card from './components/Card'

function App() {
  return (
   <div className='bg-white'>
    <Navbar/>
    <Sidebar/>
    <Card/>
   </div>
  )
}

export default App