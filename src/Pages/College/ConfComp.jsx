import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import config from "../../hooks/config";
import Dropdown_batch from "../../components/Dropdown_batch";
import Dropdown_dept from "../../components/Dropdown_dept";
import DataTable from "../../components/DataTable";
import { useNavigate } from "react-router-dom";
function ConfComp() {
  const { id, headers } = config();
  const [data, setData] = useState([]);
  const navigate=useNavigate();
  const col = [
    {
      name: "Logo",
      diplay: false,
    },
    {
      name: "Company",
      diplay: true,
    },
    {
      name: "Location",
      diplay: true,
    },
    {
      name: "Job Profile",
      diplay: true,
    },
    {
      name: "Internship Period",
      diplay: true,
    },

    {
      name: "Year",
      diplay: false,
      displayRow: false,
    },
    {
      name: "Department",
      diplay: false,
      displayRow: false,
    },
    {
      name: "Send List",
      diplay: false,
      displayRow: false,
    },
  ];

  const [student, setStudent] = useState({
    year_batch: null,
    departments: ["CS", "IT", "ENTC"],
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

      navigate('/sendList',{
        state: {
          company_id: company.company_id,
            message: company.message,
            company_name:company.company_name
        },
      })
      // console.log(id);
      // console.log(student);
      // const token = localStorage.getItem("jwt");
      // const res = await fetch(
      //   "http://localhost:4000/api/officer/giveAccessToCompanies",
      //   {
      //     method: "PUT",
      //     headers: {
      //       "content-type": "application/json",
      //       authorization: `bearer ${token}`,
      //     },
      //     body: JSON.stringify({
      //       company_id: company.company_id,
      //       access: [student],
      //     }),
      //   }
      // );
      // const result = await res.json();
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
    getConf();
  };

  return (
    <div className="bg-white flex">
      <div className="hidden sm:flex">
      <Sidebar user={"officer"}/>
      </div>
      <div className="flex-[3]">
        <Navbar pageName={"Confirmed Colleges"}/>
        <hr className="h-0 border-r-[0.5px] border-solid border-[#E6E3E3]" />

        {data &&
        <DataTable
        col={col}
        row={data}
        deptYear={true}
        handleBatch={handleBatch}
        handleDept={handleDept}
        handleChange={handleClick}
        action={"Send List"}
        user={"officer"}
      />}
              
      </div>
    </div>
  );
}

export default ConfComp;
