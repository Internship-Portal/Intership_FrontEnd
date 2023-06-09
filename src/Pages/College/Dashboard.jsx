import React from 'react'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Card from '../../components/Card'

function Dashboard() {
  return (
    <div className='bg-white flex'>
        <div className='hidden sm:flex'>
    <Sidebar/>
    </div>
    <div className='flex-[3]'>
    
      <Navbar/>
      <hr className='h-0 border-r-[0.5px] border-solid border-[#E6E3E3]'/>
   
    <div className='flex flex-col sm:flex-row p-[20px] gap-[20px]'>
    <Card type='user'/>
    <Card type='order'/>
    <Card type='earning'/>
    <Card type='balance'/>
    </div>
    
    </div>
    

    
    
   </div>
  )
}

export default Dashboard
