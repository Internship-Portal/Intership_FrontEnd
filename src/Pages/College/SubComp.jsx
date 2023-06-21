import React, { useContext } from 'react'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import { AuthContext } from '../../context/AuthContext'

function SubComp() {

  // const {data} = useContext(AuthContext)
  // console.log(data)

  return (
    <div className='bg-white flex'>
      <div className='hidden sm:flex'>
        <Sidebar />
      </div>
      <div className='flex-[3]'>
        <Navbar />
        <hr className='h-0 border-r-[0.5px] border-solid border-[#E6E3E3]' />
      </div>

    </div>
  )
}

export default SubComp
