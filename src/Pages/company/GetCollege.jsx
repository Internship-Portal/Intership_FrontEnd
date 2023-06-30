import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import config from "../../hooks/config";
import { pccoe } from "../../assets";

import DataTable from "../../components/DataTable";

const GetCollege = () => {
  const [clicked, setClicked] = useState(false);
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);



  const subscribeCollege = async (college) => {
    const message = college.college_name;
    const _id = college._id;
    const token = localStorage.getItem("jwt");
    const res = await fetch(
      `http://localhost:4000/api/company/addSubscribeRequestToOfficer`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${token}`,
        },
        body: JSON.stringify({ _id: _id, message: message }),
      }
    );
    console.log(res);
    getallcollege();
  };

  const getallcollege = async () => {
    try {
      const res = await axios
        .get(`http://localhost:4000/api/company/getAllOfficerByFilterInChunks?chunk=1
        `, {
          headers,
        })
        .then(function (res) {
          console.log(res);
          setLoading(true);

          setColleges(res.data.chunkData);
          setLoading(false);

          //setCoins(res.data);
        })
        .catch((err) => console.log(err));

      // console.log(res);
    } catch (err) {
      console.log(err.response.data);
    }
    setClicked(true);
  };

  const { id, headers } = config();
  useEffect(() => {
    getallcollege();
  }, []);

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const searchItem = colleges.filter((data) =>
    data.college_name.toLowerCase().includes(search.toLowerCase())
  );

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
      "diplay": false

    }


  ]

  return (
    <>
      <div className="bg-white flex">
        <div className=" sm:flex">
          <Sidebar user={"Company"} />
        </div>
        <div className="flex-[3]">
          <Navbar />
          <hr className="h-0 border-r-[0.5px] border-solid border-[#E6E3E3]" />
         <DataTable col={col} row={colleges} handleChange={subscribeCollege} action={"Subscribe"}/>
        </div>
      </div>
    </>
  );
};

export default GetCollege;
