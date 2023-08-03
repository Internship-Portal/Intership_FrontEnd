import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { menu, close } from "../assets";
const Navbar = (props) => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <nav className="w-full flex justify-between items-center">
      <div className="w-full p-[0.82rem] flex items-center justify-between">
        <span className="ml-[23px] text-sky-600 font-poppins text-[1.6rem] font-semibold">{props.pageName}</span>
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

       
      </div>
      
    </nav>
  );
};

export default Navbar;

