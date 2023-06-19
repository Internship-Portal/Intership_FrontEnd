import React from 'react'
import { Link } from 'react-router-dom'

const Confirm_password = () => {
  return (
    <div>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center h-screen px-6 py-8 mx-auto md:h-screen lg:py-0">
          
          <div className="w-full p-6 rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-primary dark:border-gray-700 sm:p-8 ">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Change Password
            </h2>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" >
              
              <div>
                <label for="password" className="block mb-2 font-medium dark:text-white">New Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-white border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-primary " required="" />
              </div>
              <div>
                <label for="confirm-password" className="block mb-2 font-medium dark:text-white">Confirm password</label>
                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-white border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-primary" required="" />
              </div>
              <div className="flex items-start  p-2">
                <div className="flex items-center h-5 ">
                  <input id="newsletter" aria-describedby="newsletter" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                </div>
                <div className="ml-3 text-sm">
                  <label for="newsletter" className="font-light text-black-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/">Terms and Conditions</a></label>
                </div>
              </div>

              <Link to='/login' style={{ textDecoration: "none" }}>
                <button type="submit" className="w-full text-white bg-blue-900 hover:bg-sky-950  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600">Reset passwod</button>
              </Link>

            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Confirm_password
