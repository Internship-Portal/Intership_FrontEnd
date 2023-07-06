import React from "react";
import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { launchPoster } from "../../assets";
import { toggleButtonGroupClasses } from "@mui/material";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import config from "../../hooks/config";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const SignUp = () => {
  const [officer, setOfficer] = useState(false);
  const [company, setCompany] = useState(true);

  const [companyDetails, setCompanyDetails] = useState({
    username: "",

    mobile_no: "",
    company_name: "",
    password: "",
  });

  const [officerDetails, setOfficerDetails] = useState({
    username: "",

    mobile_no: "",
    college_name: "Pimpri Chinchwad College of Engineering,Pune",
    password: "",
  });

  const handleCompanyRole = () => {
    setCompany(true);
    setOfficer(false);
  };
  const handleOfficerRole = () => {
    setOfficer(true);
    setCompany(false);
  };

  const { headers } = config();
  const navigate = useNavigate();

  const handleChangeOfficer = (event) => {
    console.log(event.target);
    setOfficerDetails({
      ...officerDetails,
      [event.target.name]: event.target.value,
    });
    console.log(officerDetails);
  };

  const handleChangeCompany = (event) => {
    console.log(event.target);
    setCompanyDetails({
      ...companyDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = async () => {
    try {
      if (officer) {
        console.log(officerDetails);
        const res = await axios.post(
          "http://localhost:4000/api/officer/createOfficer",
          officerDetails,
          { headers: headers }
        );
        console.log(res);
        localStorage.clear();
        localStorage.setItem("jwt", res.data.token);
        navigate("/");
      } else if (company) {
        console.log(companyDetails);
        const res = await axios.post(
          "http://localhost:4000/api/company/createCompany",
          companyDetails,
          { headers: headers }
        );
        console.log(res);
        localStorage.clear();
        localStorage.setItem("jwt", res.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full bg-no-repeat bg-cover bg-fixed bg-loginBackground flex items-center justify-center p-4">
      <div className=" w-[50%] sm:w-[25%] h-[100%] border-solid border-2 border-[#D9D9D9]  rounded-xl flex flex-col items-center justify-evenly backdrop-blur-[20px] shadow-md  bg-[#ffffff78]">
        <h2 className=" font-semibold font-poppins text-black text-[2rem]">
          SignUp
        </h2>

        <div className="grid w-[75%] gap-6 grid-cols-2">
          <div
            className={`border-solid  p-1 text-center  ${
              officer ? `border-none` : `border-b-primary border-b-4`
            }`}
          >
            <input
              id="company radio"
              defaultChecked
              type="radio"
              value=""
              name="list-radio"
              onClick={handleCompanyRole}
              className={`hidden peer`}
            />
            <label
              htmlFor="company radio"
              className="text-primaryText font-semibold"
            >
              Company{" "}
            </label>
          </div>

          <div
            className={`border-solid  p-1  text-center ${
              officer ? `border-b-primary border-b-4` : `border-none`
            }`}
          >
            <input
              id="officer radio"
              type="radio"
              value=""
              name="list-radio"
              className={`hidden peer ${
                officer ? `border-primary text-white` : "text-black"
              }`}
              onClick={handleOfficerRole}
            />
            <label
              htmlFor="officer radio"
              className="text-primaryText font-semibold"
            >
              Officer
            </label>
          </div>
        </div>

        <div className="flex flex-col w-[75%] my-3 ">
          <div className="flex flex-row items-center justify-between">
            <label className="text-primaryText text-[20px] font-semibold">
              {" "}
              Username
            </label>
            <EmailIcon />
          </div>
          <input
            name="username"
            type="text"
            id="username"
            placeholder="Username"
            className="bg-transparent placeholder-gray-200 border  border-l-0 border-t-0 border-r-0  border-b-2 focus:border-b-6  border-b-primary outline-none   text-sm   block w-full p-2.5 text-black"
            onChange={officer ? handleChangeOfficer : handleChangeCompany}
          ></input>
        </div>

        <div className="flex flex-col w-[75%] my-3">
          <div className="flex flex-row items-center justify-between">
            <label className="text-primaryText text-[20px] font-semibold">
              Mobile No.
            </label>
          </div>
          <input
            name="mobile_no"
            type="text"
            id="mobile_no"
            placeholder="Mobile No."
            className=" placeholder:text-white bg-transparent placeholder-gray-200 border  border-l-0 border-t-0 border-r-0  border-b-2 focus:border-b-6  border-b-primary outline-none   text-sm   block w-full p-2.5 text-black"
            onChange={officer ? handleChangeOfficer : handleChangeCompany}
          ></input>
        </div>

        {officer && (
          <div className="flex flex-col w-[75%] my-3">
            <div className="flex flex-row items-center justify-between">
              <label className="text-primaryText text-[20px] font-semibold">
                College Name
              </label>
            </div>
            <input
              name="college_name"
              type="text"
              id="college_name"
              placeholder="College Name"
              // defaultValue={officerDetails.college_name}
              className=" bg-transparent placeholder-gray-200 border  border-l-0 border-t-0 border-r-0  border-b-2 focus:border-b-6  border-b-primary outline-none   text-sm   block w-full p-2.5 text-black"
              onChange={handleChangeOfficer}
            ></input>
          </div>
        )}
        {company && (
          <div className="flex flex-col w-[75%] my-3">
            <div className="flex flex-row items-center justify-between">
              <label className="text-primaryText text-[20px] font-semibold">
                company Name
              </label>
            </div>
            <input
              name="company_name"
              type="text"
              id="company_name"
              placeholder="Company Name"
              className=" bg-transparent placeholder-gray-200 border  border-l-0 border-t-0 border-r-0  border-b-2 focus:border-b-6  border-b-primary outline-none   text-sm   block w-full p-2.5 text-black"
              onChange={handleChangeCompany}
            ></input>
          </div>
        )}
        <div className="flex flex-col w-[75%] my-3">
          <div className="flex flex-row items-center justify-between">
            <label className="text-primaryText text-[20px] font-semibold">
              Password
            </label>
          </div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className=" bg-transparent placeholder-gray-200 border  border-l-0 border-t-0 border-r-0  border-b-2 focus:border-b-6  border-b-primary outline-none   text-sm   block w-full p-2.5 text-black"
            // onChange={handleChange}
          ></input>
        </div>
        <div className="flex flex-col w-[75%] my-3">
          <div className="flex flex-row items-center justify-between">
            <label className="text-primaryText text-[20px] font-semibold">Confirm Password</label>
          </div>
          <input
            name="password"
            type="password"
            id="password"
            placeholder="Confirm Password"
            className="  bg-transparent placeholder-gray-200 border  border-l-0 border-t-0 border-r-0  border-b-2 focus:border-b-6  border-b-primary outline-none   text-sm   block w-full p-2.5 text-black"
            onChange={officer ? handleChangeOfficer : handleChangeCompany}
          ></input>
        </div>

        <button
          className="py-2  bg-primary font-poppins font-semibold text-[20px] w-[75%] rounded-lg"
          // disabled={loading}
          onClick={() => handleClick()}
        >
          Create New Account
        </button>
        <div className="m-1">
          <Link to='/'> Already have account? </Link>
        </div>
      </div>
      {/* {error && <span>{error.message}</span>} */}
    </div>
    // </div>
    // </div>
  );
};

export default SignUp;
