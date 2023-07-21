import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OTP = () => {
  const [otp, setOtp] = useState(null);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setOtp(event.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        "http://localhost:4000/api/otp/verifyOTPValidation",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${token}`,
          },
          body: JSON.stringify({
            otp: otp,
          }),
        }
      );

      const result = await res.json();
      console.log(result);
        console.log(res.ok);
      if (res.ok) {
        localStorage.clear();
        localStorage.setItem("jwt", result.token);
        navigate("/signup");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="w-full h-screen bg-no-repeat bg-cover bg-fixed bg-loginBackground flex items-center justify-center">
        <div className="w-[50%] sm:w-[25%] h-[50%] border-solid border-2 border-[#D9D9D9]  rounded-xl flex flex-col items-center justify-evenly backdrop-blur-[20px] shadow-md  bg-[#ffffff78]">
          <h2 className="font-semibold font-poppins text-black text-[2rem]">
            Confirm your OTP
          </h2>
          <div className="flex flex-col w-[75%] my-3">
            <div className="flex flex-row items-center justify-between ">
              <label
                htmlFor="email"
                className="text-primaryText text-[20px] font-semibold"
              >
                Your OTP
              </label>
            </div>
            <input
              type="number"
              name="email"
              id="email"
              className="bg-transparent placeholder-gray-200 border  border-l-0 border-t-0 border-r-0  border-b-2 focus:border-b-6  border-b-primary outline-none   text-sm   block w-full p-2.5 text-black"
              placeholder="Enter OTP"
              required=""
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="py-2 bg-primary font-poppins font-semibold text-[20px] w-[75%] rounded-lg "
            onClick={handleClick}
          >
            Submit
          </button>

          {/* <h4>{error.message}</h4> */}
        </div>
      </div>
    </div>
  );
};

export default OTP;
