import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import config from "../../hooks/config";
import DataTable from "../../components/DataTable";
import { useNavigate } from "react-router-dom";

const ConfirmedCollege = () => {
  const { id, headers } = config();
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  
  const col = [
    {
      name: "Logo",
      diplay: false,
    },
    {
      name: "College",
      diplay: true,
    },
    {
      name: "Location",
      diplay: true,
    },
    {
      name: "Available Student",
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
      name: "View List",
      diplay: false,
      displayRow: false,
    },
  ];

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
 
      navigate("/getStudents", {
        state: {
          officer_id: college.officer_id, 
          name : college.college_name ,
          Role : "get"
        },
      });
  }; 

  useEffect(() => {
    getConf();
  }, []);

  return (
    <div className=" bg-cardBackground h-full flex">
      <div className="bg-white flex">
        <div className="sm:flex h-screen">
          <Sidebar user={"Company"} />
        </div>
      </div>
      <div className="flex-[3] bg-white">
        <Navbar pageName={"Selected Students"}/>
        <hr className="h-0 border-r-[0.5px] border-solid border-[#E6E3E3]" />

        <DataTable
          col={col}
          row={data}
          handleChange={handleClick}
          action={"View Students"}
        />
      </div>
    </div>
  );
};

export default ConfirmedCollege;
