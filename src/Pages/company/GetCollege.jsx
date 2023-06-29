import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import config from "../../hooks/config";
import { pccoe } from "../../assets";

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

            <form className="m-9">
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300  rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-gray-300 " placeholder="Search College Names..." onChange={handleChange} required />

              </div>
            </form>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-9">
              <table class="w-full text-sm text-left text-gray-500  ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th class="px-6 py-3">
                      <span class="sr-only">Logo</span>
                    </th>
                    <th scope="col" class="px-6 py-3">
                      College Name
                    </th>
                    <th scope="col" class="px-7 py-3">
                      Location
                    </th>
                    <th scope="col" class="px-7 py-3">
                      Available Students
                    </th>
                    <th scope="col" class="px-7 py-3">
                      Internship Duration
                    </th>
                    <th scope="col" class="px-7 py-3">
                      <span class="sr-only">Subscribe</span>
                    </th>

                  </tr>
                </thead>
                <tbody>
                  {searchItem.map((college) => (
                    <tr class="bg-white border-b  hover:bg-gray-50 ">
                      <td class=" px-3 py-2">
                        <img src={pccoe} alt="" className="h-[2rem] sm:h-[3rem] " />
                      </td>
                      <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                        {college.college_name}
                      </th>
                      <td class=" py-2 text-center">
                        Pune
                      </td>
                      <td class=" py-2 text-center">
                        234
                      </td>
                      <td class=" py-2 text-center">
                        June - July
                      </td>
                      <td class="px-6 py-4 text-right">
                        <button class="font-medium text-blue-600  hover:underline" onClick={(e) => {
                          console.log(college)
                          subscribeCollege(college);
                        }}>Subscribe</button>
                      </td>
                    </tr>
                  ))}


                </tbody>
              </table>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default GetCollege;
