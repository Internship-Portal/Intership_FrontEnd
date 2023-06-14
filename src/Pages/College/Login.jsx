import React from "react";
import { launchPoster } from "../../assets";
const Login = (props) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className=" hidden sm:block">
          <div className="w-full h-screen object-cover bg-primary opacity-80"   >
            <img className=" z-1 h-screen p-32 mx-auto flex items-center justify-center" src={launchPoster} alt="" />
          </div>
          
        </div>

        <div className=" flex flex-col justify-center ">
          <form className="max-w-[380px] w-4/5 sm:w-full mx-auto bg-primary opacity-80 p-8 px-8 rounded-3xl">
              <h2 className=" text-4xl dark:text-white font-poppins font-bold text-center">
                Login
              </h2>
              <h4 className=" my-2 mt-4 text-gray-900 text-center">
                Welcome {props.type}
              </h4>
            <div className="max-w-[300px] mx-auto w-full  bg-white p-8 px-8  rounded-3xl ">
              <div className="flex flex-col text-primary opacity-80 py-2">
                <label> Email</label>
                <input
                  type="text"
                  placeholder="Username"
                  className=" rounded-lg bg mt-2 p-2 focus:bottom-1 border-b-2 border-gray-700"
                ></input>
              </div>
              <div className="flex flex-col text-primary opacity-80 py-2">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className=" rounded-lg bg mt-2 p-2 focus:bottom-1 border-b-2  border-gray-800 text-black"
                ></input>
              </div>
              <button className=" my-2 py-1 bg-primary text-black w-full rounded-xl text-xl">
                Login
              </button>
              <div className="text-center text-primary opacity-80">
                <p>Forgot Password ?</p>
              </div>
            </div>
            <div className=" text-center mt-2 text-lg">
                <p>Don't Have Account ?</p>
              </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
