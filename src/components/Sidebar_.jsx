import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';

const Sidebar_ = () => {
  const [open, setOpen] = useState(false);
  const menus = [
    { title: "Dashboard", src: "img.jpg" },
    { title: "Students", src: "img.jpg" },
    { title: "Dashboard", src: "img.jpg" },
    { title: "Dashboard", src: "img.jpg" },
  ];
  const [showCompany, setshowCompany] = useState(false);
  const [showCalendar, setshowCalendar] = useState(false);
  return (
    <>
      <div className="flex">
        <div
          className={`${
            open ? " w-64" : "w-20" 
          } duration-300 h-screen bg-cardBackground relative p-5 pt-8 z-10 ss:w-40`}
        >
          <img
            src="./src/assets/symbol.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple rounded-full ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
          <SchoolIcon className="text-white" fontSize="large"/>
            <Link to="/officer" style={{ textDecoration: "none" }}>
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
            <p className="text-[10px] font-bold text-[#999] mt-[15px] mb-[5px] py-4">
            <HomeIcon />
              MAIN
            </p>
            <div className={`${!open && "hidden"}`}>
              <Link to="/officer" style={{ textDecoration: "none" }}>
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
              <Link to="/students" style={{ textDecoration: "none" }}>
                <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
                  {/* <PersonOutlineIcon className="icon" /> */}
                  <span className="text-[13px] font-semibold text-[#888] ml-[10px]">
                    Students
                  </span>
                </li>
              </Link>

              <li className="items-center p-[5px] cursor-pointer">
                {/* <StoreIcon className="icon" />  */}
                <div
                  onClick={() => {
                    setshowCompany(!showCompany);
                  }}
                >
                  <span className="text-[13px] mr-2 font-semibold text-[#888] ml-[10px]">
                    Companies
                  </span>
                  <ArrowDropDownRoundedIcon style={{ color: "grey" }} />
                </div>

                {showCompany && (
                  <ul>
                    <div className="flex flex-col">
                      <li className="items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
                        <Link
                          to="/subscribedCompanies"
                          style={{ textDecoration: "none" }}
                        >
                          <span className="text-[13px] font-semibold text-[#888] ml-[10px]">
                            Subscribed Companies
                          </span>
                        </Link>
                      </li>
                      <li className="items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
                        <Link
                          to="/confirmedCompanies"
                          style={{ textDecoration: "none" }}
                        >
                          <span className="text-[13px] font-semibold text-[#888] ml-[10px]">
                            Confirmed Companies
                          </span>
                        </Link>
                      </li>
                    </div>
                  </ul>
                )}
              </li>

              <Link to="/rooms" style={{ textDecoration: "none" }}>
                <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
                  {/* <CreditCardIcon className="icon" /> */}
                  <span className="text-[13px] font-semibold text-[#888] ml-[10px]">
                    Departments
                  </span>
                </li>
              </Link>

              <li className="items-center p-[5px] cursor-pointer">
                {/* <StoreIcon className="icon" />  */}
                <div onClick={() => setshowCalendar(!showCalendar)}>
                  <span className="text-[13px] mr-2 font-semibold text-[#888] ml-[10px]">
                    Calendar
                  </span>
                  <ArrowDropDownRoundedIcon style={{ color: "grey" }} />
                </div>

                {showCalendar && (
                  <ul>
                    <div className="flex flex-col">
                      <li className="items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
                        <Link
                          to="/addstudents"
                          style={{ textDecoration: "none" }}
                        >
                          <span className="text-[13px] font-semibold text-[#888] ml-[10px]">
                            Publish Calendar
                          </span>
                        </Link>
                      </li>
                      <li className="items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
                        <Link
                          to="/displaystudents"
                          style={{ textDecoration: "none" }}
                        >
                          <span className="text-[13px] font-semibold text-[#888] ml-[10px]">
                            Display Calendar
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
        
      </div>
    </>
  );
};

export default Sidebar_;
