import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import HomeIcon from "@mui/icons-material/Home";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SchoolIcon from "@mui/icons-material/School";
const Sidebar = (props) => {
  const user = props.user;

  const [open, setOpen] = useState(false);
  const [showCompany, setshowCompany] = useState(false);
  const [showCalendar, setshowCalendar] = useState(false);
  const [officer, isOfficer] = useState(user);
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate("/")
    
  }
  useState(() => {}, []);

  return (
    <>
      <div className="flex h-full  bg-cardBackground">
        <div
          className={`${
            open ? " w-64" : "w-20"
          } duration-300 h-screen bg-cardBackground relative p-5 pt-8`}
        >
          <img
            src="./src/assets/symbol.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple rounded-full ${
              open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            {user == "officer" ? (
              <SchoolIcon className="text-white" fontSize="large" />
            ) : (
              <ApartmentIcon className="text-white" fontSize="large" />
            )}

            <Link
              to={user != "officer" ? "/Company" : "/college"}
              style={{ textDecoration: "none" }}
            >
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
            <p className="text-[10px] font-bold text-white mt-[15px] mb-[5px] py-4">
              <HomeIcon />
              MAIN
            </p>
            <div className={`${!open && "hidden"}`}>
              <Link
                to={user != "officer" ? "/Company" : "/college"}
                style={{ textDecoration: "none" }}
              >
                <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#77b0e5]">
                  {/* <DashboardIcon className="icon" /> */}
                  <span className="text-[13px] font-semibold text-white ml-[10px]">
                    Dashboard
                  </span>
                </li>
              </Link>
            </div>

            <p className="text-[10px] font-bold text-white mt-[15px] mb-[5px] py-4">
              <FormatListBulletedIcon />
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
                  <span className="text-[13px] mr-2 font-semibold text-white ml-[10px]" id="display_info">
                    {user == "officer" ? "Companies" : "Colleges"}
                  </span>
                  <ArrowDropDownRoundedIcon style={{ color: "powderblue" }} />
                </div>

                {showCompany && (
                  <ul>
                    <div className="flex flex-col">
                      {user != "officer" && (
                        <li className="items-center p-[5px] cursor-pointer hover:bg-[#77b0e5]" id="display_college">
                          <Link
                            to={"/getcollege"}
                            style={{ textDecoration: "none" }}
                          >
                            <span className="text-[13px] font-semibold text-white ml-[10px]">
                              Display{" "}
                              {user == "officer" ? "Companies" : "Colleges"}
                            </span>
                          </Link>
                        </li>
                      )}
                      <li className="items-center p-[5px] cursor-pointer hover:bg-[#77b0e5]">
                        <Link
                          to={
                            user == "officer"
                              ? "/subscribedCompanies"
                              : "/requestedcollege"
                          }
                          style={{ textDecoration: "none" }}
                        >
                          <span className="text-[13px] font-semibold text-white ml-[10px]">
                            Requested{" "}
                            {user == "officer" ? "Companies" : "Colleges"}
                          </span>
                        </Link>
                      </li>
                      <li className="items-center p-[5px] cursor-pointer hover:bg-[#77b0e5]">
                        <Link
                          to={
                            user == "officer"
                              ? "/confirmedCompanies"
                              : "/confirmedcollege"
                          }
                          style={{ textDecoration: "none" }}
                        >
                          <span className="text-[13px] font-semibold text-white ml-[10px]">
                            Confirmed{" "}
                            {user == "officer" ? "Companies" : "Colleges"}
                          </span>
                        </Link>
                      </li>
                    </div>
                  </ul>
                )}
              </li>
            </div>
            {user == "officer" && (
              <div className={`${!open && "hidden"}`}>
                <li className="items-center p-[5px] cursor-pointer">
                  {/* <StoreIcon className="icon" />  */}
                  <div
                    onClick={() => {
                      setshowCalendar(!showCalendar);
                    }}
                  >
                    <span className="text-[13px] mr-2 font-semibold text-white ml-[10px]">
                      Calender
                    </span>
                    <ArrowDropDownRoundedIcon style={{ color: "powderblue" }} />
                  </div>

                  {showCalendar && (
                    <ul>
                      <div className="flex flex-col">
                        <li className="items-center p-[5px] cursor-pointer hover:bg-[#77b0e5]">
                          <Link
                            to="/addstudents"
                            style={{ textDecoration: "none" }}
                          >
                            <span className="text-[13px] font-semibold text-white ml-[10px]">
                              Publish Calender
                            </span>
                          </Link>
                        </li>
                        <li className="items-center p-[5px] cursor-pointer hover:bg-[#77b0e5]">
                          <Link
                            to="/displaystudents"
                            style={{ textDecoration: "none" }}
                          >
                            <span className="text-[13px] font-semibold text-white ml-[10px]">
                              Display Calender
                            </span>
                          </Link>
                        </li>
                      </div>
                    </ul>
                  )}
                </li>
              </div>
            )}

            <p className="text-[10px] font-bold text-white mt-[15px] mb-[5px] py-4">
              <PersonIcon />
              USER
            </p>
            <div className={`${!open && "hidden"}`}>
              <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#77b0e5]">
                {/* <AccountCircleOutlinedIcon className="icon" /> */}
                <span className="text-[13px] font-semibold text-white ml-[10px]">
                  Profile
                </span>
              </li>
              <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#77b0e5]">
                {/* <ExitToAppIcon className="icon" /> */}
                <span className="text-[13px] font-semibold text-white ml-[10px]" onClick={logout}>
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

export default Sidebar;
