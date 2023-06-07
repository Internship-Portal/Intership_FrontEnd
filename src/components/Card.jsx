// import React from 'react'

// const Card = () => {
//   return (
//     <div >
//          <div className="widget">
//       <div className="left">
//         <span className="title">User</span>
//         <span className="counter">
//           {true && "$"} 100
//         </span>
//         <span className="link">Click Here</span>
//       </div>
//       <div className="right">
//         <div className="percentage positive">
//           {/* <KeyboardArrowUpIcon /> */}
//           200 %
//         </div>
//         {data.icon}
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Card

// import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Card = () => {
  let data;
  let type = "user";
  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="flex justify-between p-[10px] drop-shadow-[2px_4px_10px_1px_rgba(0,0,0,0.47)] shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] border-r-4 h-[100px] flex-1 w-1/5">
      <div className="flex flex-col justify-between">
        <span className=" font-bold text-[14px] text-[#A0A0A0] ">
          {data.title}
        </span>
        <span className="text-[28px] font-light">
          {data.isMoney && "$"} {amount}
        </span>
        <span className=" w-max text-[12px] border-b-[1px] border-black">
          {data.link}
        </span>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex items-center text-[14px] text-[#35B000]">  
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Card;
