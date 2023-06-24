import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import config from "../../hooks/config";
import axios from "axios";
import Dropdown_batch from "../../components/Dropdown_batch";
import Dropdown_dept from "../../components/Dropdown_dept";
import { useNavigate } from "react-router-dom";

const ConfirmedCollege = () => {
  const { id, headers } = config();
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const [student, setStudent] = useState({
    _id: "123",
    year_batch: null,
    departments: ["CS", "IT", "ENTC"],
    department_name: "IT",
  });

  const handleBatch = (data) => {
    setStudent({ ...student, year_batch: data });
  };

  const handleDept = (data) => {
    setStudent({ ...student, department_name: data });
  };

  const getConf = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/company/getAllSubscribedOfficers",
        {
          headers: headers,
        }
      );

      if (!response.ok) {
        throw new Error("Request failed with status code " + response.status);
      }

      const data = await response.json();
      console.log(data);
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (college) => {
    if (student.year_batch != null)
      navigate("/companystudent", {
        state: {
          officer_id: college.officer_id,
          year_batch: student.year_batch,
          department_name: student.department_name,
        },
      });
  };

  useEffect(() => {
    getConf();
  }, []);

  return (
    <div className="bg-white flex">
      <div className="hidden sm:flex">
        <Sidebar />
      </div>
      <div className="flex-[3]">
        <Navbar />
        <hr className="h-0 border-r-[0.5px] border-solid border-[#E6E3E3]" />

        {data &&
          data.map((college) => (
            <div
              className=" text-center items-center flex w-full "
              key={college.college_id}
            >
              <div className="bg-primary  bg-opacity-30 rounded-xl w-3/4 mx-auto my-2 shadow-[0_35px_60px_0px_rgba(0,0,0,0.3)] flex">
                <div className=" flex w-[55%]">
                  <div className=" font-poppins flex justify-center text-lg font-bold sm:justify-start  px-4 w-1/2">
                    {college.college_name}
                  </div>
                  <div className="w-1/2 border-l-2 border-l-black border-r-2 border-r-black">{college.message}</div>
                </div>
                <div className="flex">
                  <Dropdown_batch onhandleBatchChange={handleBatch} />
                  <Dropdown_dept onhandleDeptChange={handleDept} />
                </div>

                <button className="font-poppins bg-indigo-700 bg-opacity-80 m-2 text-white rounded-lg p-2 w-32 h-10 hover:w-1/5 items-center text-center mx-auto my-auto" onClick={() => handleClick(college)}>View List</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ConfirmedCollege;
