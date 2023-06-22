import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import config from "../../hooks/config";

const SubscribedCollege = () => {

  const [data, setData] = useState([]);
  const { headers } = config();

  const getConf = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/company/getAllRequestsbyCompany",
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

  useEffect(() => {
   getConf()
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
            className=" text-center items-center inline-flex w-full sm:w-1/3"
            key={college.index}
          >
            <div className="border-solid border-black border-2 w-3/4 mx-auto my-2 ">
              <div className=" ">
                <div className=" text-lg font-bold justify-start flex px-4">
                  {college.college_name}
                </div>
                <div className="">{college.college_id}</div>
                <div>{college.message}</div>
              </div>
              
            </div>
          </div>
        ))}
    </div>
  </div>
  )
}

export default SubscribedCollege






