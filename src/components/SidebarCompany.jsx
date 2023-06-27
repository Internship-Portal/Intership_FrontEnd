import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonIcon from '@mui/icons-material/Person';
import ApartmentIcon from '@mui/icons-material/Apartment';

const SidebarCompany = () => {
  const [open, setOpen] = useState(false);
  const [showCompany, setshowCompany] = useState(false);
  const [showCalendar, setshowCalendar] = useState(false);
  return (
    <>
      <div className="flex">
        <div
          className={`${
            open ? " w-64" : "w-20"
          } duration-300 h-screen bg-cardBackground relative p-5 pt-8`}
        >
          <img
            src="./src/assets/img.jpg"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple rounded-full ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
          <ApartmentIcon className="text-white" fontSize="large"/>
            <Link to="/company" style={{ textDecoration: "none" }}>
              <h1
                className={`text-white origin-left font-medium text-xl duration-300 ${
                  !open && "scale-0"
                }`}
              >
                Dashboard
              </h1>
            </Link>
          </div>
          <ul className="pt-6">
            {/* {menus.map((menu,index)=>(
                <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white hover:bg-opacity-25 rounded-md `}>
                    <img className="h-10" src={`./src/assets/${menu.src}`} />
                    <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                </li>    
            ))} */}

            <p className="text-[10px] font-bold text-[#999] mt-[15px] mb-[5px] py-4">
            <HomeIcon />
              MAIN
            </p>
            <div className={`${!open && "hidden"}`}>
              <Link to="/company" style={{ textDecoration: "none" }}>
                <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
                  {/* <DashboardIcon className="icon" /> */}
                  <span className="text-[13px] font-semibold text-[#888] ml-[10px]">
                    Dashboard
                  </span>
                </li>
              </Link>
            </div>

            <p className="text-[10px] font-bold text-[#999] mt-[15px] mb-[5px] py-4">
              <FormatListBulletedIcon/>
              LISTS
            </p>
            <div className={`${!open && "hidden"}`}>
            
              <li className="items-center p-[5px] cursor-pointer">
                {/* <StoreIcon className="icon" />  */}
                <div
                  onClick={() => {
                    setshowCompany(!showCompany);
                  }}
                >
                  <span className="text-[13px] mr-2 font-semibold text-[#888] ml-[10px]">
                    Colleges
                  </span>
                  <ArrowDropDownRoundedIcon style={{ color: "grey" }} />
                </div>

                {showCompany && (
                  <ul>
                    <div className="flex flex-col">
                      <li className="items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
                        <Link
                          to="/requestedcollege"
                          style={{ textDecoration: "none" }}
                        >
                          <span className="text-[13px] font-semibold text-[#888] ml-[10px]">
                            Requested Colleges
                          </span>
                        </Link>
                      </li>
                      <li className="items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
                        <Link
                          to="/confirmedcollege"
                          style={{ textDecoration: "none" }}
                        >
                          <span className="text-[13px] font-semibold text-[#888] ml-[10px]">
                            Confirmed Colleges
                          </span>
                        </Link>
                      </li>
                    </div>
                  </ul>
                )}
              </li>

            </div>
            <p className="text-[10px] font-bold text-[#999] mt-[15px] mb-[5px] py-4">
                <PersonIcon/>
              USER
            </p>
            <div className={`${!open && "hidden"}`}>
              <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
                {/* <AccountCircleOutlinedIcon className="icon" /> */}
                <span className="text-[13px] font-semibold text-[#888] ml-[10px]">
                  Profile
                </span>
              </li>
              <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
                {/* <ExitToAppIcon className="icon" /> */}
                <span className="text-[13px] font-semibold text-[#888] ml-[10px]">
                  Logout
                </span>
              </li>
            </div>
          </ul>
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
          Dashboard
        </div>
      </div>
    </>
  );
};

export default SidebarCompany;
