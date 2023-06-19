import React from 'react'
import { Link } from 'react-router-dom'

const Forgot_password = () => {
  return (
    <div>
      <section className="h-screen">
        <div className=" h-screen flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          
          <div className="w-full p-6 rounded-lg shadow dark:border md:mt-0 sm:max-w-md  dark:border-gray-700 sm:p-8 bg-primary">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Confirm your email
            </h2>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                <label for="email" className="block mb-2 font-medium dark:text-white">Enter Your email</label>
                <input type="email" name="email" id="email" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 " placeholder="name@company.com" required="" />
              </div>

              <Link to='/otp' style={{ textDecoration: "none" }}>
                <button type="submit" className="w-full text-white bg-blue-900 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 text-center ">Submit</button>
              </Link>

            </form>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Forgot_password
