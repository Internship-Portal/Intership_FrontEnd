import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { launchPoster } from "../../assets";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    email_id: undefined,
    password: undefined,
  });

  const [officer, setOfficer] = useState(false);
  const [company, setCompany] = useState(true);

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

  const successLogin = () => {
    toast.success("Login Successful", {
      position: 'top-center'
    })
  }
  const errLogin = () => {
    toast.error("Login Unsuccessful", {
      position: 'top-center'
    })
  }


  const handleClick = async (e) => {
    e.preventDefault();

    if (company) {
      try {
        console.log(credentials);

        const res = await axios.post("http://localhost:4000/api/company/loginCompany", credentials );

        localStorage.clear();
        localStorage.setItem("jwt", res.data.token)
        console.log(res.data.token)

        successLogin();

        navigate("/company");

      } catch (err) {
        errLogin();
      }
    }
     else if (officer) {
      try {
        console.log(credentials);

        const res = await axios.post("http://localhost:4000/api/officer/loginOfficer", credentials );

        localStorage.clear();
        localStorage.setItem("jwt", res.data.token)
        console.log(res.data.token)

        successLogin();

        navigate("/officer")
        
      } catch (err) {
        errLogin();
      }
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className=" hidden sm:block">
          <div className="w-full h-screen object-cover bg-primary opacity-80">
            <img
              className=" z-1 h-screen p-32 mx-auto flex items-center justify-center px-0 py-0 pb-0"
              src={launchPoster}
              alt=""
            />
          </div>
        </div>

        <div className=" flex flex-col justify-center h-screen ">
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
                // onClick={successLogin}
                ></input>
              </div>
              <button
                className=" my-2 py-1 bg-primary text-black w-full rounded-xl text-xl"
                disabled={loading}
                onClick={handleClick}
              // onClick={successLogin}
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
      <ToastContainer />
    </>
  );
};

export default Login;
