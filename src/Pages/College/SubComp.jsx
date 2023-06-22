import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import config from '../../hooks/config'

function SubComp() {

  const [data, setData] = useState([])
  const { headers } = config()

  useEffect(() => {
    const getConf = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/officer/getAllRequestedCompanies",
          { headers }
        );
        console.log(res);
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getConf();
  }, []);

  const handleClick = async (company) => {
    try {
      console.log(headers)
      const res = await axios.put("http://localhost:4000/api/officer/addSubscribedOfficerFromOfficer",
        {
          company_id: company.company_id,
          message: company.message
        },
        { headers })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='bg-white flex'>
      <div className='hidden sm:flex'>
        <Sidebar />
      </div>
      <div className='flex-[3]'>
        <Navbar />
        <hr className='h-0 border-r-[0.5px] border-solid border-[#E6E3E3]' />

        {
          data && data.map((company) => (
            <div
              className=" text-center items-center inline-flex w-full sm:w-1/3"
              key={company.index}
            >
              <div className="border-solid border-black border-2 w-3/4 mx-auto my-2 ">
                <div className=" ">
                  <div className=" text-lg font-bold justify-start flex px-4">{company.company_name}</div>
                  <div className="">{company.company_id}</div>
                  <div>{company.message}</div>
                </div>
                <button onClick={() => handleClick(company)}>Accept</button>
              </div>
            </div>
          ))
        }

      </div>

    </div>
  )
}

export default SubComp
