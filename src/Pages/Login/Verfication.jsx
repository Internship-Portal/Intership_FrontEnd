import React from "react";
import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { launchPoster } from "../../assets";
import { toggleButtonGroupClasses } from "@mui/material";
import { Link } from "react-router-dom";

const Verfication = () => {
  const [email_id, setEmail] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleClick = async () => {
    try {
      const res = await fetch(`http://localhost:4000/api/otp/verifyEmailOTP`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email_id: email_id }),
      });
      const result = await res.json();
      if (result.message.message == "Email sent succesfuly") {
        console.log(result.message.message);
        localStorage.clear();
        localStorage.setItem("token", result.token);
        navigate("/otp");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="w-full h-screen bg-no-repeat bg-cover bg-fixed bg-loginBackground flex items-center justify-center">
        <div className=" w-[50%] sm:w-[25%] h-[55%] border-solid border-2 border-[#D9D9D9]  rounded-xl flex flex-col items-center justify-evenly backdrop-blur-[20px] shadow-md  bg-[#ffffff78]">
          <h2 className=" font-semibold font-poppins text-black text-[2rem]">
            SignUp
          </h2>
          <h4 className=" my-2 mt-4 text-gray-900 font-semibold text-lg text-center">Welcome</h4>
          <div className="flex flex-col w-[75%] my-3">
          <div className="flex flex-row items-center justify-between ">
            <label className="text-primaryText text-[20px] font-semibold">Email</label>
          </div>
            <input
              name="email_id"
              type="text"
              id="email_id"
              placeholder="Enter Email Address"
              className=" bg-transparent placeholder-gray-200 border  border-l-0 border-t-0 border-r-0  border-b-2 focus:border-b-6  border-b-primary outline-none   text-sm   block w-full p-2.5 text-black"
              onChange={handleEmailChange}
            ></input>
          </div>
          <button
            className=" py-2 bg-primary font-poppins font-semibold text-[20px] w-[75%] rounded-lg "
            // disabled={loading}
            onClick={handleClick}
          >
            Send Otp
          </button>

          {/* {error && <span>{error.message}</span>} */}
        </div>
      </div>
    </div>
  );
};

export default Verfication;
