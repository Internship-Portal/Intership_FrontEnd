import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import config from "../../hooks/config";

import Dropdown_batch from "../../components/Dropdown_batch";
import Dropdown_dept from "../../components/Dropdown_dept";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Setmessage = () => {
  const collegeDetails = useLocation();
  const initialState = {
    job_description: "",
    department_name: [],
    year_batch: [],
    msg: "",
  };
  const [message, setmessage] = useState(initialState);

  const { id } = config();

  useEffect(() => {
    console.log(id);
  }, []);

  const handleJobDescription = (e) => {
    setmessage({ ...message, job_description: e.target.value });
    console.log(message);
    console.log(message);
  };

  const handleDept = (data) => {
    if (data != "Dept") {
      if (message.department_name.indexOf(data) == -1) {
        setmessage((prevState) => ({
          ...prevState,
          department_name: [...prevState.department_name, data], // Add the random number to the array
        }));
      }
    }
  };

  const handleBatch = (data) => {
    if (data != "Batch") {
      if (message.year_batch.indexOf(data) == -1) {
        setmessage((prevState) => ({
          ...prevState,
          year_batch: [...prevState.year_batch, data], // Add the random number to the array
        }));
      }
    }
  };

  const handleClick = async () => {
    try {
      const token = localStorage.getItem("jwt");
      const res = await fetch("http://localhost:4000/api/company/setMessage", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${token}`,
        },
        body: JSON.stringify({
          officer_id: collegeDetails.state.officer_id,
          message: message,
        }),
      });
      const result = await res.json();
      if (result.message == "Message set successfully") {
        setmessage(initialState);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="box">
      <div className="m-4 flex justify-between">
        <div className="flex flex-col">
          <label
            for="fname"
            className="block mb-2 text-gray-900 text-[20px] font-semibold"
          >
            Job Position:
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Job Position"
            onChange={handleJobDescription}
            value={message.job_description}
            className="block p-2.5 w-max text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-5"
          ></input>
        </div>
        <div className="flex">
          <Dropdown_dept onhandleDeptChange={handleDept} />
          <Dropdown_batch onhandleBatchChange={handleBatch} />
        </div>
      </div>

      <div className="m-4">
        <label
          for="message"
          class="block mb-2 text-[20px] font-semibold text-gray-900 "
        >
          Your message:
        </label>
        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
          placeholder="Write your thoughts here..."
          onChange={(e) => {
            setmessage({ ...message, msg: e.target.value });
          }}
          value={message.msg}
        ></textarea>
      </div>

      <button
        className="mx-4 my-3 font-medium text-gray-100 bg-blue-500 hover:bg-blue-600 font-poppins px-4 py-2 rounded-lg "
        onClick={handleClick}
      >
        {" "}
        Send{" "}
      </button>
    </div>
  );
};

export default Setmessage;
