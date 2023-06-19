import React from 'react'
import { Link } from 'react-router-dom'

const OTP = () => {
  return (
    <div>
      <section className="h-screen my-auto">
        <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
         
          <div className="w-full p-6 rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-primary dark:border-gray-700 sm:p-8 bg-blue-400">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Confirm your OTP
            </h2>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                <label for="email" className="block mb-2 font-medium text-gray-900 dark:text-white">Enter Your OTP</label>
                <input type="email" name="email" id="email" className=" bg-white border mb-4 border-gray-300 text-primary sm:text-sm rounded-lg focus:ring-primary-600 w-full h-9 dark:placeholder-gray-400 placeholder:px-2 dark:focus:ring-blue-500 " placeholder="Enter OTP" required="" />
              </div>

              <Link to='/confirmpassword' style={{ textDecoration: "none" }}>
                <button type="submit" className="w-full text-white bg-indigo-900 hover:bg-blue-950 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
              </Link>

            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OTP
