import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import config from "../../hooks/config";
import DataTable from "../../components/DataTable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubscribedCollege = () => {
  const [data, setData] = useState([]);
  const { headers } = config();
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
      name: "Available Student",
      diplay: true,
    },
    {
      name: "Internship Period",
      diplay: true,
    },

    {
      name: "Subscribe",
      diplay: false,
      displayRow: false,
    },
  ];

  const successLogin = () => {
    toast.success("Request canceled Successfully", {
      position: "top-center",
    });
  };
  const errLogin = () => {
    toast.error("Couldn't cancel request", {
      position: "top-center",
    });
  };

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

  const cancelRequest = async (college) => {
    try {
      const token = localStorage.getItem("jwt");
      const officer_id = college.officer_id;
      console.log(college, officer_id, college.college_name);
      const res = await fetch(
        "http://localhost:4000/api/company/addCancelledRequestByCompany",
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${token}`,
          },
          body: JSON.stringify({
            officer_id: officer_id,
            message: college.college_name,
          }),
        }
      );
      const result = await res.json();

      if (res.ok) {
        successLogin()
      }
      else
      {
        errLogin();
      }

      console.log(result);
      getConf();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getConf();
  }, []);

  return (
    <div className="bg-white flex">
      <div className="sm:flex h-screen">
        <Sidebar user={"Company"} />
      </div>
      <div className="flex-[3]">
        <Navbar />
        <hr className="h-0 border-r-[0.5px] border-solid border-[#E6E3E3]" />

        {data && (
          <DataTable
            col={col}
            row={data}
            handleChange={cancelRequest}
            action={"Cancel"}
          />
        )}
        {!data && (
          <h1 className="text-2xl text-center mt-10">No Requests Found</h1>
        )}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default SubscribedCollege;
