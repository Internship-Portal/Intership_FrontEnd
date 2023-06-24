import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import config from "../../hooks/config";

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

  return (
    <>
      <div className="bg-white flex">
        <div className="hidden sm:flex">
          <Sidebar />
        </div>
        <div className="flex-[3]">
          <Navbar />
          <hr className="h-0 border-r-[0.5px] border-solid border-[#E6E3E3]" />
          <div>
            <div className="m-2 flex justify-end ">
              <input
                className="m-2 flex justify-end border-solid border-black border-2 p-1 rounded-lg bg-primary bg-opacity-30 text-black placeholder:text-black"
                type="search"
                placeholder="Search here"
                onChange={handleChange}
                // value={searchInput}
              />
            </div>

            {searchItem.map((college) => (
              <div
                className=" text-center items-center  w-full flex "
                key={college._id}
              >
                <div className="bg-primary  bg-opacity-30 rounded-xl w-3/4 mx-auto my-2 shadow-[0_35px_60px_0px_rgba(0,0,0,0.3)]">
                  <div className="flex ">
                    <div className=" font-poppins flex justify-center text-lg font-bold sm:justify-start  px-4 w-1/3">
                      {college.college_name}
                    </div>
                    <div className="w-1/3 border-l-2 border-l-black border-r-2 border-r-black">
                      <div className="font-poppins">{college.email_id}</div>
                      <div className="font-poppins">
                        No. of Available Students: {college.avaible_stu}
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        subscribeCollege(college);
                      }}
                      className="font-poppins bg-indigo-700 bg-opacity-80 m-2 text-white rounded-lg p-2 w-32 h-10 hover:w-1/4 items-center text-center mx-auto my-auto"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GetCollege;
