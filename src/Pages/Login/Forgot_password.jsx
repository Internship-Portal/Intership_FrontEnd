import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Forgot_password = () => {
  const [email, setemail] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setemail(event.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/otp/sendOTP", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email_id: email,
        }),
      });

      const result = await res.json();
      console.log(result);

      localStorage.setItem("token", result.token);

      if (res.ok) {
        navigate("/otp");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div className="w-full h-screen bg-no-repeat bg-cover bg-fixed bg-loginBackground flex items-center justify-center">
        <div className="w-[50%] sm:w-[25%] h-[50%] border-solid border-2 border-[#D9D9D9]  rounded-xl flex flex-col items-center justify-evenly backdrop-blur-[20px] shadow-md  bg-[#ffffff78]">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
            Confirm your email
          </h2>
          <div className="flex flex-col w-[75%] my-3">
            <div className="flex flex-row items-center justify-between">
              <label
                htmlFor="email"
                className="text-primaryText text-[20px] font-semibold"
              >
                Your email
              </label>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-transparent placeholder-gray-200 border  border-l-0 border-t-0 border-r-0  border-b-2 focus:border-b-6  border-b-primary outline-none   text-sm   block w-full p-2.5 text-black"
              placeholder="name@company.com"
              required=""
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="py-2 bg-primary font-poppins font-semibold text-[20px] w-[75%] rounded-lg"
            onClick={handleClick}
          >
            Submit
          </button>

          {/* {error && <h4>{error.message}</h4>} */}
        </div>
      </div>
  );
};

export default Forgot_password;
