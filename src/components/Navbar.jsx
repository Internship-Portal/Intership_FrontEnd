import React from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";


const Navbar = () => {
    const [toggle, setToggle] = React.useState(false);
  return (
    <nav className='w-full flex  justify-between items-center'>
        <h1 className='text-primary text-[1.3rem] sm:text-[2.2rem] font-bold'>College</h1>
        <div className="flex items-center border-solid border-gray-600 p-1">
          <input type="text" placeholder="Search..." className='bg-transparent outline-none border-none' />
          <SearchOutlinedIcon />
        </div>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <div className="flex items-center mr-5 relative">
            <FullscreenExitOutlinedIcon className="icon font-[20px]" />
          </div>
          <div className="flex items-center mr-5 relative">
            <NotificationsNoneOutlinedIcon className="icon font-[20px]" />
            <div className="counter">1</div>
          </div>
          <div className="flex items-center mr-5 relative">
            <ChatBubbleOutlineOutlinedIcon className="icon font-[20px]" />
            <div className="counter">2</div>
          </div>
          
          <div className="flex items-center mr-5 relative">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="w-[30px] h-[20px] rounded-[50%]"
            />
          </div>
                        
  </ul>


    </nav>

  )
}

export default Navbar





     
    //      <nav className="w-full flex py-6 justify-between items-center">


    //   <ul className="list-none sm:flex hidden justify-end items-center flex-1">
    //     {navLinks.map((nav, index) => (
    //       <li
    //         key={nav.id}
    //         className={`font-poppins font-normal cursor-pointer text-[16px] ${
    //           index === navLinks.length ? "mr-0" : "mr-10 "
    //         }text-white mr-10`}
    //       >
    //         <a href={`#${nav.id}`}>{nav.title}</a>
    //       </li>
    //     ))} 
    //   </ul>

    //   <div className="sm:hidden flex flex-1 justify-end items-center">
    //     <img
    //       src={toggle ? close : menu}
    //       alt="menu"
    //       className="w-[28px] h-[28px] object-contain"
    //       onClick={() => setToggle((prev) => !prev)}
    //     />
    //     <div
    //       className={`${
    //         toggle ? `flex` : `hidden`
    //       } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px]rounded-xl`}
    //     >
    //       <ul className="list-none flex flex-col  justify-end items-center flex-1 ">
    //         {navLinks.map((nav, index) => (
    //           <li
    //             key={nav.id}
    //             className={`font-poppins
    //                  font-normal
    //                  cursor-pointer 
    //                  text-[16px] ${
    //                    index === navLinks.length - 1 ? "mr-0" : "mb-4 "
    //                  }
    //                  text-blue-300 `}
    //           >
    //             <a href={`#${nav.id}`}>{nav.title}</a>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </nav> 


