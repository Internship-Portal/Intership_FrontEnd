import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Confirm_password = () => {
  const [pass, setPass] = useState({
    email_id: "",
    new_pass: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setPass({ ...pass, [event.target.name]: event.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:4000/api/otp/changepassword", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${token}`,
        },
        body: JSON.stringify({
          password: pass.password,
        }),
      });

      const result = await res.json();
      console.log(result);

      if (res.ok) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div className="w-full h-screen bg-no-repeat bg-cover bg-fixed bg-loginBackground flex items-center justify-center">
        <div className="w-[50%] sm:w-[25%] h-[75%] border-solid border-2 border-[#D9D9D9]  rounded-xl flex flex-col items-center justify-evenly backdrop-blur-[20px] shadow-md  bg-[#ffffff78]">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
            Change Password
          </h2>
          <div className="flex flex-col w-[75%] my-3" action="#">
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
              name="email_id"
              id="email"
              className="bg-transparent placeholder-gray-200 border  border-l-0 border-t-0 border-r-0  border-b-2 focus:border-b-6  border-b-primary outline-none   text-sm   block w-full p-2.5 text-black"
              placeholder="name@company.com"
              required=""
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-[75%] my-3">
            <div className="flex flex-row items-center justify-between">
              <label
                htmlFor="password"
                className="text-primaryText text-[20px] font-semibold"
              >
                New Password
              </label>
            </div>
            <input
              type="password"
              name="new_pass"
              id="password"
              placeholder="••••••••"
              className="bg-transparent placeholder-gray-200 border  border-l-0 border-t-0 border-r-0  border-b-2 focus:border-b-6  border-b-primary outline-none   text-sm   block w-full p-2.5 text-black"
              required=""
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-[75%] my-3">
            <div className="flex flex-row items-center justify-between">
              <label
                htmlFor="confirm-password"
                className="text-primaryText text-[20px] font-semibold"
              >
                Confirm password
              </label>
            </div>
            <input
              type="confirm-password"
              name="password"
              id="confirm-password"
              placeholder="••••••••"
              className="bg-transparent placeholder-gray-200 border  border-l-0 border-t-0 border-r-0  border-b-2 focus:border-b-6  border-b-primary outline-none   text-sm   block w-full p-2.5 text-black"
              required=""
              onChange={handleChange}
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="newsletter"
                aria-describedby="newsletter"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="newsletter"
                className="font-light text-black-500 dark:text-gray-300"
              >
                I accept the{" "}
                <a
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="/"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>

          <Link to="/login" style={{ textDecoration: "none" }}>
            <button
              type="submit"
              className="py-2 bg-primary font-poppins font-semibold text-[20px] w-[100%] rounded-lg"
              onClick={handleClick}
            >
              Reset passwod
            </button>
          </Link>
        </div>
      </div>
  );
};

export default Confirm_password;
