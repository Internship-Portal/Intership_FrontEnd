import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import config from "..//../hooks/config";

const GetCollege = () => {
  const temp = {
    _id: "345678",
    message: "dfghfgh",
  };
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
        .get(`http://localhost:4000/api/company/getAllFilteredOfficers`, {
          headers,
        })
        .then(function (res) {
          console.log(res);
          setLoading(true);
          setColleges(res.data.data);
          setLoading(false);

          //setCoins(res.data);
        })
        .catch((err) => console.log(err));

      // console.log(res);
    } catch (err) {
      console.log(err.response.data);
    }
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

  return (
    <>
      <div>
        <div className="m-2 flex justify-end ">
          <input
            className="m-2 flex justify-end border-solid border-black border-2 p-1 rounded-lg"
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            // value={searchInput}
          />
        </div>

        {searchItem.map((college) => (
          <div
            className=" text-center items-center inline-flex w-full sm:w-1/3"
            key={college._id}
          >
            <div className="border-solid border-black border-2 w-3/4 mx-auto my-2 ">
              <div className=" ">
                <div className=" text-lg font-bold justify-start flex px-4">
                  {college.college_name}
                </div>
                <div className="">{college.email_id}</div>
                <div>No. of Available Students: {college.avaible_stu}</div>
                <button
                  onClick={(e) => {
                    subscribeCollege(college);
                  }}
                  className=" border-2 border-black"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetCollege;
