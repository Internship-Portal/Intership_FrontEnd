import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import config from "../../hooks/config";
import DataTable from "../../components/DataTable";
import SidebarCompany from "../../components/SidebarCompany";

const SubscribedCollege = () => {

  const [data, setData] = useState([]);
  const { headers } = config();
  const col = [
    {
      "name": "Logo",
      "diplay": false

    },
    {
      "name": "College",
      "diplay": true
    },
    {
      "name": "Location"
      ,
      "diplay": true
    },
    {
      "name": "Available Studen"
      ,
      "diplay": true
    },
    {
      "name": "Internship Period",
      "diplay": true
    },

    {
      "name": "Subscribe",
      "diplay": false,
      "displayRow":false

    }


  ]

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
  
  const cancelRequest=async(college)=>{
    try{
      const token=localStorage.getItem('jwt')
      const officer_id=college.officer_id;
      console.log(college)
      const res=await fetch('http://localhost:4000/api/company/addCancelledRequest',{
        method:"PUT",
        headers:{
          "content-type": "application/json",
            authorization: `bearer ${token}`,
        },
        body:JSON.stringify({
          officer_id:officer_id,
          message:college.college_name
        }),
      })
      const result=await res.json()
      console.log(result)
      getConf()

    }catch(err)
    {
  console.log(err)
    }
  }
 



  useEffect(() => {
   getConf()
  }, []);




  return (
    <div className="bg-white flex">
    <div className="hidden sm:flex">
    <SidebarCompany user={"Company"}/>
    </div>
    <div className="flex-[3]">
      <Navbar />
      <hr className="h-0 border-r-[0.5px] border-solid border-[#E6E3E3]" />

      <DataTable col={col} row={data} handleChange={cancelRequest} action={"Cancel"}/>
    </div>
  </div>
  )
}

export default SubscribedCollege






