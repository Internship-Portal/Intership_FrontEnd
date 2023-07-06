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
      <div className="grid grid-cols-1 sm:grid-cols-2 h-fit w-full">
        <div className=" hidden sm:block">
          <div className="w-full h-full object-cover bg-primary opacity-80">
            <img
              className=" z-1 h-full p-32 mx-auto flex items-center justify-center  px-0 py-0 pb-0"
              src={launchPoster}
              alt=""
            />
          </div>
        </div>

        <div className=" flex flex-col justify-center py-0 h-full">
          <form
            className="max-w-[380px] w-4/5 sm:w-full mx-auto bg-primary opacity-80 p-8 px-8 rounded-3xl h-fit "
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className=" text-4xl dark:text-white font-poppins font-bold text-center">
              SignUp
            </h2>
            <h4 className=" my-2 mt-4 text-gray-900 text-center">Welcome</h4>

            <div className="flex flex-col text-primary opacity-80 py-2">
              <label>Email</label>
              <input
                name="email_id"
                type="text"
                id="email_id"
                placeholder="Enter Email Address"
                className=" rounded-lg bg mt-2 p-2 focus:bottom-1 border-b-2 border-gray-700"
                onChange={handleEmailChange}
              ></input>
            </div>
            <button
              className=" my-2 py-1 bg-primary text-black w-full rounded-xl text-xl"
              // disabled={loading}
              onClick={handleClick}
            >
              Send Otp
            </button>

            {/* {error && <span>{error.message}</span>} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verfication;
