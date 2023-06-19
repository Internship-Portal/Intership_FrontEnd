import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { launchPoster } from "../../assets";
import { toggleButtonGroupClasses } from "@mui/material";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    email_id: undefined,
    password: undefined,
  });

  const [officer, setOfficer] = useState(false);
  const [company, setCompany] = useState(toggleButtonGroupClasses);

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleCompanyRole = () => {
    setCompany(true);
    setOfficer(false);
  };
  const handleOfficerRole = () => {
    setOfficer(true);
    setCompany(false);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (company) {
      dispatch({ type: "LOGIN_START_COMPANY" });
      try {
        console.log(credentials);
        const res = await axios.post(
          "http://localhost:4000/api/company/loginCompany",
          credentials
        );
        dispatch({ type: "LOGIN_SUCCESS_COMPANY", payload: res.data.details });
        navigate("/");
      } catch (err) {
        dispatch({ type: "LOGIN_FAILURE_COMPANY", payload: err.response.data });
      }
    } else if (officer) {
      dispatch({ type: "LOGIN_START_OFFICER" });
      try {
        const res = await axios.post("http://localhost:4000/api/officer/loginOfficer", credentials);
        console.log(res.data.data)
        dispatch({ type: "LOGIN_SUCCESS_OFFICER", payload: res.data.data });
        // console.log(res.data.data[0].college_details[1].student_details)
        // dispatch({ type: "SET_DEPARTMENT", payload: res.data.data[0].college_details[1].student_details })
        navigate("/")
      } catch (err) {
        dispatch({ type: "LOGIN_FAILURE_OFFICER", payload: err.response.data });
      }
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className=" hidden sm:block">
          <div className="w-full h-screen object-cover bg-primary opacity-80">
            <img
              className=" z-1 h-screen p-32 mx-auto flex items-center justify-center"
              src={launchPoster}
              alt=""
            />
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
                <label> Email</label>
                <input
                  type="text"
                  id="email_id"
                  placeholder="Username"
                  className=" rounded-lg bg mt-2 p-2 focus:bottom-1 border-b-2 border-gray-700"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="flex flex-col text-primary opacity-80 py-2">
                <label>Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className=" rounded-lg bg mt-2 p-2 focus:bottom-1 border-b-2  border-gray-800 text-black"
                  onChange={handleChange}
                ></input>
              </div>
              <button
                className=" my-2 py-1 bg-primary text-black w-full rounded-xl text-xl"
                disabled={loading}
                onClick={handleClick}
              >
                Login
              </button>
              <Link to="/forgotpassword" style={{ textDecoration: "none" }}>
                <div className="text-center text-primary opacity-80">
                  <Link to="/forgotpassword">
                    <p>Forgot Password ?</p>
                  </Link>
                </div>
              </Link>
            </div>
            <div className=" text-center mt-2 text-lg">
              <Link to="/signup">
              <p>Don't Have Account ?</p>
              </Link>
            </div>
            {error && <span>{error.message}</span>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
