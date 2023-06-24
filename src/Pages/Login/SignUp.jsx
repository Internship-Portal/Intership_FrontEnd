import React from "react";
import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { launchPoster } from "../../assets";
import { toggleButtonGroupClasses } from "@mui/material";
import { Link } from "react-router-dom";


const SignUp = () => {


  const [officer, setOfficer] = useState(false);
  const [company, setCompany] = useState(true);

  const [companyDetails, setCompanyDetails] = useState({
    username: "",
    email_id: "",
    mobile_no: "",
    company_name: "",
    password:""
  })

  

  const [officerDetails, setOfficerDetails] = useState({
    username: "",
    email_id: "",
    mobile_no: "",
    college_name: "Pimpri Chinchwad College of Engineering,Pune",
    password:""
  })

  const handleCompanyRole = () => {
    setCompany(true);
    setOfficer(false);
  };
  const handleOfficerRole = () => {
    setOfficer(true);
    setCompany(false);
  };


  const navigate = useNavigate()

  const handleChangeOfficer = (event) => {
    console.log(event.target)
    setOfficerDetails({ ...officerDetails, [event.target.name]: event.target.value })
    console.log(officerDetails)
  }

  const handleChangeCompany = (event) => {
    console.log(event.target)
    setCompanyDetails({ ...companyDetails, [event.target.name]: event.target.value })
   
  }


  

  const handleClick = async () => {
    try {
      if(officer)
      {
        console.log(officerDetails)
        const res = await axios.post("http://localhost:4000/api/officer/createOfficer", officerDetails)
        console.log(res)
        localStorage.clear()
        localStorage.setItem("jwt",res.data.token)
        navigate('/')

      }
      else if(company) {
        console.log(companyDetails)
        const res = await axios.post("http://localhost:4000/api/company/createCompany", companyDetails)
        console.log(res)
        localStorage.clear()
        localStorage.setItem("jwt",res.data.token)
        navigate('/')
      }
     
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-fit w-full">
        <div className=" hidden sm:block">
          <div className="w-full h-screen object-cover bg-primary opacity-80">
            <img
              className=" z-1 h-full p-32 mx-auto flex items-center justify-center  px-0 py-0 pb-0"
              src={launchPoster}
              alt=""
            />
          </div>
        </div>

        <div className=" flex flex-col justify-center py-0 h-full">
          <form className="max-w-[380px] w-4/5 sm:w-full mx-auto bg-primary opacity-80 p-8 px-8 rounded-3xl h-fit " onSubmit={e=>e.preventDefault()}>
            <h2 className=" text-4xl dark:text-white font-poppins font-bold text-center">
              SignUp
            </h2>
            <h4 className=" my-2 mt-4 text-gray-900 text-center">
              Welcome
            </h4>

            <div className="flex items-center pl-3">
              <input
                id="company radio"
                defaultChecked
                type="radio"
                value=""
                name="list-radio"
                onClick={handleCompanyRole}
              />
              <label htmlFor="company radio">Company </label>

              <input
                id="officer radio"
                type="radio"
                value=""
                name="list-radio"
                onClick={handleOfficerRole}
              />
              <label htmlFor="officer radio">Officer</label>
            </div>

            <div className="max-w-[300px] mx-auto w-full  bg-white p-8 px-8  rounded-3xl ">
              <div className="flex flex-col text-primary opacity-80 py-2">
                <label>Username</label>
                <input
                  name="username"
                  type="text"
                  id="username"
                  placeholder="Username"
                  className=" rounded-lg bg mt-2 p-2 focus:bottom-1 border-b-2 border-gray-700"
                  onChange={officer?handleChangeOfficer:handleChangeCompany}
                ></input>
              </div>
              <div className="flex flex-col text-primary opacity-80 py-2">
                <label>Email</label>
                <input
                  name="email_id"
                  type="text"
                  id="email_id"
                  placeholder="Email Id"
                  className=" rounded-lg bg mt-2 p-2 focus:bottom-1 border-b-2 border-gray-700"
                  onChange={officer?handleChangeOfficer:handleChangeCompany}
                ></input>
              </div>
              <div className="flex flex-col text-primary opacity-80 py-2">
                <label>Mobile No.</label>
                <input
                  name="mobile_no"
                  type="text"
                  id="mobile_no"
                  placeholder="Mobile No."
                  className=" rounded-lg bg mt-2 p-2 focus:bottom-1 border-b-2 border-gray-700"
                  onChange={officer?handleChangeOfficer:handleChangeCompany}
                ></input>
              </div>
           {officer &&   <div className="flex flex-col text-primary opacity-80 py-2">
                <label>College Name</label>
                <input
                name="college_name"
                  type="text"
                  id="college_name"
                  placeholder="College Name"
                  defaultValue={officerDetails.college_name}
                  className=" rounded-lg bg mt-2 p-2 focus:bottom-1 border-b-2 border-gray-700"
                  onChange={handleChangeOfficer}
                ></input>
              </div>}
              {
            company &&  <div className="flex flex-col text-primary opacity-80 py-2">
            <label>company Name</label>
            <input
            name="company_name"
              type="text"
              id="company_name"
              placeholder="Company Name"
              defaultValue={companyDetails.company_name}
              className=" rounded-lg bg mt-2 p-2 focus:bottom-1 border-b-2 border-gray-700"
              onChange={handleChangeCompany}
            ></input>
          </div>

              }
              <div className="flex flex-col text-primary opacity-80 py-2">
                <label>Password</label>
                <input  
                  type="password"
                  id="password"
                  placeholder="Password"
                  className=" rounded-lg bg mt-2 p-2 focus:bottom-1 border-b-2  border-gray-800 text-black"
                  // onChange={handleChange}
                ></input>
              </div>
              <div className="flex flex-col text-primary opacity-80 py-2">
                <label>Confirm Password</label>
                <input
                name="password"
                  type="password"
                  id="password"
                  placeholder="Confirm Password"
                  className=" rounded-lg bg mt-2 p-2 focus:bottom-1 border-b-2  border-gray-800 text-black"
                  onChange={officer?handleChangeOfficer:handleChangeCompany}
                ></input>
              </div>

              <button
                className=" my-2 py-1 bg-primary text-black w-full rounded-xl text-xl"
                // disabled={loading}
               onClick={()=>handleClick()}
              >
                Create New Account
                
              </button>

            </div>
            {/* {error && <span>{error.message}</span>} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
