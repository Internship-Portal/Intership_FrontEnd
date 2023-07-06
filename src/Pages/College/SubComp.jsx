import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import config from "../../hooks/config";
import DataTable from "../../components/DataTable";

 
function SubComp() {
  const [data, setData] = useState([]);
  const { headers } = config();
  const col = [ 
    {
      "name": "Logo",
      "diplay": false

    },
    {
      "name": "Company",
      "diplay": true
    },
    {
      "name": "Location"
      ,
      "diplay": true
    },
    {
      "name": "Job Profile"
      ,
      "diplay": true
    },
    {
      "name": "Internship Period",
      "diplay": true
    },

    {
      "name": "Accept",
      "diplay": false,
      "displayRow":false

    }


  ]

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
       { data?<DataTable col={col} row={data} action={"Accept"} user={"officer"} handleChange={handleClick}/>:<div className="p-3">No Request Found</div>}
       
      </div>
    </div>
  );
}

export default SubComp;
