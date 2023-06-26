import { NavLink } from "react-router-dom";
import { FaAngleDown, FaArrowDown, FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/",
    name: "MAIN",
    icon: <FaHome />,
    subRoutes:[
      {
        path: "/settings/Billing",
        name: "Dashboard",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/messages",
    name: "LIST",
    // icon: <MdMessage />,
  },
  
    {
      path: "/settings/profile",
      name: "Students",
      icon: <FaUser />,
      className:'text-[13px] font-semibold text-[#888] ml-[10px]',
    },
    {
      path: "/settings/Billing",
      name: "Departments",
      icon: <FaMoneyBill />,
      
    },
 
  {
    path: "/analytics",
    name: "Companies",
    // icon: <FaLock />,
    subRoutes:[
      {
        path: "/settings/profile",
        name: "Subsribed Companies",
        icon: <FaUser />,
      },
      {
        path: "/settings/Billing",
        name: "Pending Companies",
        icon: <FaMoneyBill />,
      },
    ],
  },

  {
    path: "/file-manager",
    name: "Calender",
    // icon: <BsCartCheck/>,
    subRoutes:[
      {
        path: "/settings/profile",
        name: "Publish Calendar",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "Display Calendar",
        icon: <FaLock />,
      },

    ],
  },

  {
    path: "/settings",
    name: "USER",
    // icon: <BiCog />,
    subRoutes:[
      {
        path: "/settings/profile",
        name: "Profile",
        icon: <FaUser />,
      },

      {
        path: "/settings/Billing",
        name: "Logout",
        icon: <FaMoneyBill />,
      },
    ],
  },

];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",
            transition: { duration: 0.5, type: "spring", damping: 10 },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Officer
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          {/* <div className="">
            <div className="">
            <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div> */}





          <section className="routes">
            {routes.map((route, index) => {
              if(route.subRoutes){
                return(
                  <SidebarMenu 
                  setIsOpen = {setIsOpen}
                  showAnimation={showAnimation} 
                  isOpen={isOpen} 
                  route={route}
                  key={route.name}
                  />
              );
              }
            


              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
