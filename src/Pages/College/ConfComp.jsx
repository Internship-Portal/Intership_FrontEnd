import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import config from "../../hooks/config";
import axios from "axios";
import Dropdown_batch from '../../components/Dropdown_batch'
import Dropdown_dept from '../../components/Dropdown_dept'

function ConfComp() {
  const { id ,headers } = config();
  const [data, setData] = useState([])

  const [student, setStudent] = useState({
    year_batch: null,
    departments: ["CS","IT","ENTC"],
  })

  const handleBatch = (data) => {
    setStudent({ ...student, year_batch: data })
  }

  const handleDept = (data) => {
    setStudent({ ...student, department_name: data })
  }

  const getConf = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/officer/getAllSubscribedCompanies",
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
      console.log(id)
      console.log(student)
      const token = localStorage.getItem("jwt")
      const res =await fetch(
        "http://localhost:4000/api/officer/giveAccessToCompanies",
        {
          method: "PUT",
          headers: {
            "content-type":"application/json",
            "authorization": `bearer ${token}`
          },
          body: JSON.stringify({
            company_id: company.company_id,
            access: [student]
          })
        }
      );
      const result = await res.json()
      console.log(result)
    } catch (error) {
      console.log(error);
    }
    getConf();
  };

  return (
    <div className="bg-white flex">
      <div className="hidden sm:flex">
        <Sidebar />
      </div>
      <div className="flex-[3]">
        <Navbar />
        <hr className="h-0 border-r-[0.5px] border-solid border-[#E6E3E3]" />

        {data &&
          data.map((company) => (
            <div
              className=" text-center items-center inline-flex w-full sm:w-1/3"
              key={company.company_id}
            >
              <div className="border-solid border-black border-2 w-3/4 mx-auto my-2 ">
                <div className=" ">
                  <div className=" text-lg font-bold justify-start flex px-4">
                    {company.company_name}
                  </div>
                  <div className="">{company.company_id}</div>
                  <div>{company.message}</div>
                </div>
                <div className="flex">
                  <Dropdown_batch onhandleBatchChange={handleBatch} />
                  <Dropdown_dept onhandleDeptChange={handleDept} />
                </div>

                <button onClick={() => handleClick(company)}>Send</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ConfComp;
