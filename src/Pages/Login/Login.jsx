import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { launchPoster } from "../../assets";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
const Login = (props) => {
  const [credentials, setCredentials] = useState({
    email_id: undefined,
    password: undefined,
  });

  const [officer, setOfficer] = useState(false);
  const [company, setCompany] = useState(true);

  const { loading, error } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleCompanyRole = () => {
    console.log("clicked");
    setCompany(true);
    setOfficer(false);
  };
  const handleOfficerRole = () => {
    setOfficer(true);
    setCompany(false);
  };

  const successLogin = () => {
    toast.success("Login Successful", {
      position: "top-center",
    });
  };
  const errLogin = () => {
    toast.error("Email or Password is Invalid", {
      position: "top-center",
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (company) {
      try {
        const res = await fetch(
          "http://localhost:4000/api/company/loginCompany",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              email_id: credentials.email_id,
              password: credentials.password,
            }),
          }
        );
        const result = await res.json();
        localStorage.clear();
        localStorage.setItem("jwt", result.token);
        console.log(res.ok);
        if (res.ok) {
          navigate("/company");
        }
        else
        {
          errLogin();
        }
      } catch (error) {
        console.log(error);
      }
    } else if (officer) {
      try {
        const res = await fetch(
          "http://localhost:4000/api/officer/loginOfficer",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              email_id: credentials.email_id,
              password: credentials.password,
            }),
          }
        );

        const result = await res.json();

        localStorage.clear();
        localStorage.setItem("jwt", result.token);

        if (res.ok) {
          navigate("/college");
        }
        else
        {
          errLogin();
        }
      } catch (error) {
        errLogin();
        console.log(error);
      }
    }
  };

  return (
    <div className="w-full h-screen bg-no-repeat bg-cover bg-fixed bg-loginBackground flex items-center justify-center ">
      <div className=" w-[50%] sm:w-[25%] h-[75%] border-solid border-2 border-[#D9D9D9]  rounded-xl flex flex-col items-center justify-evenly backdrop-blur-[20px] shadow-md  bg-[#ffffff78]">
        <h1 className="font-semibold font-poppins text-black text-[2rem]">
          Log In
        </h1>

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

        <div className="flex flex-col w-[75%] my-3">
          <div className="flex flex-row items-center justify-between ">
            <label className="text-primaryText text-[20px] font-semibold">
              {" "}
              Email
            </label>
            <EmailIcon />
          </div>
          <input
            type="text"
            id="email_id"
            placeholder="Username"
            className="bg-transparent placeholder-gray-200 border  border-l-0 border-t-0 border-r-0  border-b-2 focus:border-b-6  border-b-primary outline-none   text-sm   block w-full p-2.5 text-black"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-[75%] my-3">
          <div className="flex flex-row items-center justify-between ">
            <label className="text-primaryText text-[20px] font-semibold">
              Password
            </label>
            <LockIcon />
          </div>

          <input
            type="password"
            id="password"
            placeholder="Password"
            className="bg-transparent placeholder-gray-200 border  border-l-0 border-t-0 border-r-0  border-b-2 focus:border-b-6  border-b-primary outline-none   text-sm   block w-full p-2.5 text-black"
            onChange={handleChange}
            // onClick={successLogin}
          />
        </div>
        <Link
          to="/forgotpassword"
          style={{ textDecoration: "none" }}
          className="text-primaryText"
        >
          <div className="">
            <Link to="/forgotpassword">
              <p>Forgot Password ?</p>
            </Link>
          </div>
        </Link>
        <button
          className="py-2 bg-primary font-poppins font-semibold text-[20px] w-[75%] rounded-lg "
          disabled={loading}
          onClick={handleClick}
          // onClick={successLogin}
        >
          Log In
        </button>

        <div className="">
          <Link to="/verify" className="text-primaryText">
            <p>Don't Have Account ?</p>
          </Link>
        </div>
        {error && <span>{error.message}</span>}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;
