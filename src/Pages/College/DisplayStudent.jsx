import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import StudentData from '../../components/StudentData'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

function DisplayStudent() {

  // const displayStu=()=>{
  //   toast.success("Displaying the Students",{
  //     position:'top-center'
  //   })
  // }
  // useEffect(() => {
  //   displayStu();
  // }, [])
  
  return (
    <div className='bg-white flex'>
      <div className='hidden sm:flex'>
        <Sidebar />
      </div>
      <div className='flex-[3]'>
        <Navbar />
        <hr className='h-0 border-r-[0.5px] border-solid border-[#E6E3E3]' />
        <StudentData />
      </div>
      {/* <ToastContainer/> */}
    </div>
  )
}

export default DisplayStudent
