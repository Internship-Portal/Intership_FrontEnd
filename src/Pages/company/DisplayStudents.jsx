import React from 'react'
import { useLocation } from 'react-router-dom'

import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'


const DisplayStudents = () => {

  const collegeDetails = useLocation()

  return (
    <div className='bg-white flex'>
      <div className='sm:flex'>
        <Sidebar user={"company"} />
      </div>
      <div className='flex-[3]'>
        <Navbar />
        <hr className='h-0 border-r-[0.5px] border-solid border-[#E6E3E3]' />
        <StudentList collegeDetails={collegeDetails.state} />
      </div>
    </div>
  )
}

export default DisplayStudents