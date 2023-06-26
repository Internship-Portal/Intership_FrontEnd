import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const OTP = () => {

  const [otp, setOtp] = useState(null)
  const navigate = useNavigate()

  const handleChange = (event) => {
    setOtp(event.target.value);
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token")
      const res = await fetch(
        "http://localhost:4000/api/otp/verifyOTP",
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

      if (res.ok) {
        navigate('/confirmpassword')
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 container">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white flex-col md:flex-row">

          </a>
          <div className="w-full p-6 rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8 bg-blue-400">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Confirm your OTP
            </h2>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your OTP</label>
                <input type="number" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter OTP" required="" onChange={handleChange} />
              </div>


              <button type="submit" className="w-full text-white bg-gray-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800  max-w-full p-4 mt-4" onClick={handleClick}>Submit</button>

              {/* <h4>{error.message}</h4> */}

            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OTP
