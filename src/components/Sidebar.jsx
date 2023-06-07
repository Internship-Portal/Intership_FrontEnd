import React from 'react'
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        {/* <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin</span>
        </Link> */}
        <span className="logo">Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            {/* <DashboardIcon className="icon" /> */}
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          {/* <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link> */}
          <li>
              {/* <PersonOutlineIcon className="icon" /> */}
              <span>Users</span>
            </li>
          {/* <Link to="/hotels" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" /> 
              <span>Hotels</span>
            </li>
          </Link> */}
          <li>
              {/* <StoreIcon className="icon" />  */}
              <span>Hotels</span>
            </li>
          {/* <Link to="/rooms" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Rooms</span>
            </li>
          </Link> */}
          <li>
              {/* <CreditCardIcon className="icon" /> */}
              <span>Rooms</span>
            </li>
          <li>
            {/* <LocalShippingIcon className="icon" /> */}
            <span>Delivery</span>
          </li>
          <p className="title">USER</p>
          <li>
            {/* <AccountCircleOutlinedIcon className="icon" /> */}
            <span>Profile</span>
          </li>
          <li>
            {/* <ExitToAppIcon className="icon" /> */}
            <span>Logout</span>
          </li>
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  )
}

export default Sidebar

