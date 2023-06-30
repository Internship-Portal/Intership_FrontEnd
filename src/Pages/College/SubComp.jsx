import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import config from "../../hooks/config";


function SubComp() {
  const [data, setData] = useState([]);
  const { headers } = config();

  const getConf = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/officer/getAllRequestedCompanies",
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
    getConf();
  }, []);

  const handleClick = async (company) => {
    try {
      const token = localStorage.getItem("jwt");
      console.log(company);
      const res = await fetch(
        "http://localhost:4000/api/officer/addSubscribedOfficerFromOfficer",
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${token}`,
          },
          body: JSON.stringify({
            company_id: company.company_id,
            message: company.message,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const result = await res.json();
      console.log(result);
      getConf();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white flex">
      <div className="hidden sm:flex">
      <Sidebar user={"officer"}/>
      </div>
      <div className="flex-[3]">
        <Navbar />
        <hr className="h-0 border-r-[0.5px] border-solid border-[#E6E3E3]" />

        {data &&
          data.map((company) => (
            <div
              className=" text-center items-center inline-flex w-full sm:w-1/3"
              key={company.index}
            >
              <div className="bg-primary bg-opacity-30 rounded-xl border-solid w-3/4 mx-auto my-2 ">
                <div className=" ">
                  <div className=" flex justify-center text-lg font-bold sm:justify-start  px-4">
                    {company.company_name}
                  </div>
                  <div className="">{company.company_id}</div>
                  <div>{company.message}</div>
                </div>
                <button className=" bg-indigo-700 bg-opacity-80 m-2 text-white rounded-lg p-2 font-poppins hover:w-3/4" onClick={() => handleClick(company)}>Accept</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SubComp;
