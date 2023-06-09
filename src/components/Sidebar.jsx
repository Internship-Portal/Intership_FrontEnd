import React, { useState } from 'react'
import { Link } from "react-router-dom"

function Sidebar() {

  const [show, setshow] = useState(false)

  return (
    <div className="flex-1 border-r-[0.5px] border-solid border-[#E6E3E3] bg-white min-h-screen">
      <div className="h-[50px] flex items-center justify-center">
        <Link to="/" style={{ textDecoration: "none" }}>
        <span className="text-xl font-bold text-[#6439ff]">Admin</span>
        </Link>
        {/* <span className="text-xl font-bold text-[#6439ff]">Admin</span> */}
      </div>
      <hr className='h-0 border-r-[0.5px] border-solid border-[#E6E3E3]'/>
      <div className="pl-[10px]">
        <ul className='m-0 p-0 list-none'>
          <p className="text-[10px] font-bold text-[#999] mt-[15px] mb-[5px]">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li className='flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]'>
            {/* <DashboardIcon className="icon" /> */}
            <span className='text-[13px] font-semibold text-[#888] ml-[10px]'>Dashboard</span>
          </li>
          </Link>
          
          <p className="text-[10px] font-bold text-[#999] mt-[15px] mb-[5px]">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li className='flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]'>
              {/* <PersonOutlineIcon className="icon" /> */}
              <span className='text-[13px] font-semibold text-[#888] ml-[10px]'>Students</span>
            </li>
          </Link>
          
          <Link to="/hotels" style={{ textDecoration: "none" }}>
          <li className='items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]'>
              {/* <StoreIcon className="icon" />  */}
              <span className='text-[13px] font-semibold text-[#888] ml-[10px]'>Companies</span>
              {show && <div className="flex flex-col">
                <span className='text-[13px] font-semibold text-[#888] ml-[10px]'>Subscribed Companies</span> 
                <span className='text-[13px] font-semibold text-[#888] ml-[10px]'>Confirmed Companies</span> 
              </div>}
              
            </li>
          </Link>
          
          <Link to="/rooms" style={{ textDecoration: "none" }}>
          <li className='flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]'>
              {/* <CreditCardIcon className="icon" /> */}
              <span className='text-[13px] font-semibold text-[#888] ml-[10px]'>Departments</span>
            </li>
          </Link>
          
          <li className='flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]'>
            {/* <LocalShippingIcon className="icon" /> */}
            <span className='text-[13px] font-semibold text-[#888] ml-[10px]'>Calender</span>
          </li>

          <p className="text-[10px] font-bold text-[#999] mt-[15px] mb-[5px]">USER</p>
          <li className='flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]'>
            {/* <AccountCircleOutlinedIcon className="icon" /> */}
            <span className='text-[13px] font-semibold text-[#888] ml-[10px]'>Profile</span>
          </li>
          <li className='flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]'>
            {/* <ExitToAppIcon className="icon" /> */}
            <span className='text-[13px] font-semibold text-[#888] ml-[10px]'>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar

