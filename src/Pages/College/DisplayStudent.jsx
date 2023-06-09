import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import StudentData from '../../components/StudentData'
import 'react-toastify/dist/ReactToastify.css';


function DisplayStudent() {
  
  return (
    <div className='bg-white flex'>
      <div className='hidden sm:flex'>
        <Sidebar user={"officer"}/>
      </div>
      <div className='flex-[3]'>
        <Navbar />
        <hr className='h-0 border-r-[0.5px] border-solid border-[#E6E3E3]' />
        <StudentData />
      </div>
    </div>
  )
  
}

export default DisplayStudent
