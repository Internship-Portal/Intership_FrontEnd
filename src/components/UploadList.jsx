import React from "react";
import axios from "axios";
import { useState } from "react";
import DropDownB from "./Dropdown_batch";
import DropDownD from "./Dropdown_dept";
import config from "../hooks/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadList = () => {
  const [user, setUser] = useState({
    department_name: "",
    year_batch: null,
    csvFile: null,
  });

  const { id, headers } = config();

  const handleBatchChange = (data) => {
    setUser({ ...user, year_batch: data });
  };

  const handleDeptChange = (data) => {
    setUser({ ...user, department_name: data });
  };

  const handleChange = (event) => {
    setUser({ ...user, csvFile: event.target.files[0] });
  };

  const successfulUpload = () => {
    toast.success("Upload Successfully !", {
      position: "top-center",
    });
  };
  const unsuccessfulUpload = () => {
    toast.error("Upload Unsuccessful !", {
      position: "top-center",
    });
  };
  const handleClick = async () => {
    try {
      const res = await axios.post(
        `http://localhost:4000/api/officer/uploadCSVOfStudents`,
        user,
        { headers }
      );
      successfulUpload();
      console.log(res);
    } catch (error) {
      unsuccessfulUpload();
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-center sm:justify-end sm:pr-32 ">
        <DropDownB onhandleBatchChange={handleBatchChange} />
        <DropDownD onhandleDeptChange={handleDeptChange} />
      </div>
      <div className="flex flex-col items-center text-center sm:text-left mt-6">
        <div className="flex items-center justify-center w-3/4">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-secondary text-black"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-black ">
                <span className="font-semibold font-poppins">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-black font-poppins">CSV</p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              name="csv"
              className="hidden"
              onChange={handleChange}
            />
          </label>
        </div>

        <h1 className="font-bold pt-8">OR</h1>

        <div className="w-3/4">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="file_input"
          >
            Upload file
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
            name="csv"
            onChange={handleChange}
          />
          <p
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            SVG, PNG, JPG or GIF (MAX. 800x400px).
          </p>
        </div>

        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={handleClick}
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Upload</span>
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UploadList;
