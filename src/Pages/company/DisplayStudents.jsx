import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import StudentData from '../../components/StudentData'
import 'react-toastify/dist/ReactToastify.css';
import StudentList from '../../components/StudentList';
import { useLocation } from 'react-router-dom';
const DisplayStudents = () => {
  
  const collegeDetails=useLocation()
 
  return (
    <div className='bg-white flex'>
    <div className='sm:flex'>
      <Sidebar />
    </div>
    <div className='flex-[3]'>
      <Navbar />
      <hr className='h-0 border-r-[0.5px] border-solid border-[#E6E3E3]' />
      <StudentList collegeDetails={collegeDetails.state}/>
    </div>
  </div>
  )
}

export default DisplayStudents