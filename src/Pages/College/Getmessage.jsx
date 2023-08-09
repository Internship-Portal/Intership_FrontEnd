import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Getmessage = () => {
  const companyDetails = useLocation();
  const navigate = useNavigate();
  const [msg, setMsg] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMessages = async () => {
    try {
      const token = localStorage.getItem("jwt");
      const res = await fetch("http://localhost:4000/api/officer/getMessage", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${token}`,
        },
        body: JSON.stringify({
          company_id: companyDetails.state.company_id,
        }),
      });
      console.log(res);
      const result = await res.json();
      if (result.message == "Successfully fetched the message") {
        setMsg(result.data);
        setLoading(false);
      }
      console.log(result);
      return result;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = (msg) => {
    navigate("/sendList", {
      state: {
        company_id: companyDetails.state.company_id,
        message: msg,
      },
    });
  };

  useEffect(() => {
    getMessages();
  }, []);

  const department = ["CS", "IT", "EnTC"];
  const year = [2023, 2024, 2025];
  return (
    <div className="bg-white flex">
      <div className="hidden sm:flex">
        <Sidebar user={"officer"} />
      </div>
      <div className="flex-[3]">
        <Navbar pageName={"Messages"} />
        <hr className="h-0 border-r-[0.5px] border-solid border-[#E6E3E3]" />

        {!loading ? (
          msg &&
          msg.map((msg) => (
            <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] m-4">
              <div className="flex flex-row justify-between items-center border-b-2 border-neutral-100 ">
                <h5 className="px-6 py-3 text-xl font-medium leading-tight text-neutral-800 ">
                  {msg.job_description}
                  <h5 className=" text-[0.9rem]   leading-tight text-neutral-800 ">
                    {companyDetails.state.company_name}
                  </h5>
                </h5>
                <button
                  type="button"
                  href="#"
                  class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 mx-6 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={() => handleClick(msg)}
                >
                  Send List
                </button>
              </div>

              <div class="p-6">
                <div className="flex flex-row justify-normal items-center gap-9">
                  <p class="mb-1 text-base text-neutral-600 flex flex-row justify-normal items-center ">
                    Department Name:
                    {msg.department_name.map((dept) => (
                      <div className="p-1 m-1 rounded-lg bg-gray-100">
                        {dept}
                      </div>
                    ))}
                  </p>
                  <p class="mb-1 text-base text-neutral-600 flex flex-row justify-normal items-center ">
                    Year:
                    {msg.year_batch.map((dept) => (
                      <div className="p-1 m-1 rounded-lg bg-gray-100">
                        {dept}
                      </div>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No Messages</div>
        )}
      </div>
    </div>
  );
};

export default Getmessage;
