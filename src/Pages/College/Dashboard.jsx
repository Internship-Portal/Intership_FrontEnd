import React from 'react'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Card from '../../components/Card'

function Dashboard() {
  return (
    <div className='bg-white flex'>
    <Sidebar/>
    <div className='flex-[6]'>
    <Navbar/>
    <div className='flex p-[20px] gap-[20px]'>
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
