import React, { useState } from 'react'
import { Link} from "react-router-dom"
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

function Sidebar() {

  const [showCompany, setshowCompany] = useState(false)
  const [showCalendar, setshowCalendar] = useState(false)

  return (
    <div className="flex flex-col w-[200px] border-r-[0.5px] border-solid border-[#E6E3E3] bg-white min-h-screen z-50 ">
      <div className="h-[50px] flex items-center justify-center">
        <Link to="/officer" style={{ textDecoration: "none" }}>
          <span className="text-xl font-bold text-[#6439ff]">Officer</span>
        </Link>
        {/* <span className="text-xl font-bold text-[#6439ff]">Admin</span> */}
      </div>
      <hr className='h-0 border-r-[0.5px] border-solid border-[#E6E3E3]' />
      <div className="pl-[10px]">
        <ul className='m-0 p-0 list-none'>
          <p className="text-[10px] font-bold text-[#999] mt-[15px] mb-[5px]">MAIN</p>
          <Link to="/officer" style={{ textDecoration: "none" }}>
            <li className='flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]'>
              {/* <DashboardIcon className="icon" /> */}
              <span className='text-[13px] font-semibold text-[#888] ml-[10px]'>Dashboard</span>
            </li>
          </Link>

          <p className="text-[10px] font-bold text-[#999] mt-[15px] mb-[5px]">LISTS</p>
          <Link to="/students" style={{ textDecoration: "none" }}>
            <li className='flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]'>
              {/* <PersonOutlineIcon className="icon" /> */}
              <span className='text-[13px] font-semibold text-[#888] ml-[10px]'>Students</span>
            </li>
          </Link>


          <li className='items-center p-[5px] cursor-pointer'>
            {/* <StoreIcon className="icon" />  */}
            <div onClick={()=>{setshowCompany(!showCompany)}}>
            <span className='text-[13px] mr-2 font-semibold text-[#888] ml-[10px]'>Companies</span>
            <ArrowDropDownRoundedIcon style={{color:"grey"}}/>
            </div>
            
            {showCompany && 
              <ul>
                <div className="flex flex-col">
                  <li className='items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]'>
                    <Link to="/subscribedCompanies" style={{ textDecoration: "none" }}>
                      <span className='text-[13px] font-semibold text-[#888] ml-[10px]'>Subscribed Companies</span>
                    </Link>
                  </li>
                  <li className='items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]'>
                    <Link to="/confirmedCompanies" style={{ textDecoration: "none" }}>
                      <span className='text-[13px] font-semibold text-[#888] ml-[10px]'>Confirmed Companies</span>
                    </Link>
                  </li>
                </div>
              </ul>
            }

          </li>


          <Link to="/rooms" style={{ textDecoration: "none" }}>
            <li className='flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]'>
              {/* <CreditCardIcon className="icon" /> */}
              <span className='text-[13px] font-semibold text-[#888] ml-[10px]'>Departments</span>
            </li>
          </Link>


          <li className='items-center p-[5px] cursor-pointer'>
            {/* <StoreIcon className="icon" />  */}
            <div onClick={()=>setshowCalendar(!showCalendar)}>
            <span className='text-[13px] mr-2 font-semibold text-[#888] ml-[10px]'>Calendar</span>
            <ArrowDropDownRoundedIcon style={{color:"grey"}}/>
            </div>
            
            {showCalendar &&
              <ul>
                <div className="flex flex-col">
                  <li className='items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]'>
                    <Link to="/addstudents" style={{ textDecoration: "none" }}>
                      <span className='text-[13px] font-semibold text-[#888] ml-[10px]'>Publish Calendar</span>
                    </Link>
                  </li>
                  <li className='items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]'>
                    <Link to="/displaystudents" style={{ textDecoration: "none" }}>
                      <span className='text-[13px] font-semibold text-[#888] ml-[10px]'>Display Calendar</span>
                    </Link>
                  </li>
                </div>
              </ul>
            }

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









