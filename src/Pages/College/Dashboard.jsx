import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Sidebar_ from '../../components/Sidebar_'
import config from '../../hooks/config'

function Dashboard() {
  const {id} =config()

  useEffect(() => {
    console.log(id)
  }, []);

  return (
    <div className='bg-white flex'>
      <div className='hidden sm:flex'>
        <Sidebar_ />
      </div>
      <div className='flex-[3]'>
        <Navbar />
        <hr className='h-0 border-r-[0.5px] border-solid border-[#E6E3E3]' />
      </div>
    </div>
  )
}

export default Dashboard
