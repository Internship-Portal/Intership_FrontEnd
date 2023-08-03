import React, { useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import config from '../../hooks/config'
import './dash.css'
import Dropdown_batch from "../../components/Dropdown_batch";
import Dropdown_dept from "../../components/Dropdown_dept";

function Dashboard() {
  const {id} =config()

  useEffect(() => {
    console.log(id)
  }, []);

  const handleBatch = (data) => {
    props.handleBatch(data);
  };

  const handleDept = (data) => {
    props.handleDept(data);
  };

  return (
    <div className='bg-white flex'>
      <div className='sm:flex'>
        <Sidebar user={"company"}/>
      </div>
      <div className='flex-[3]'>
        <Navbar />
        <hr className='h-0 border-r-[0.5px] border-solid border-[#E6E3E3]' />
        <div className="box">
          <div className='m-4 flex justify-between'>
            <div className="flex flex-col">
              <label for="fname" className='block mb-2 text-gray-900 text-[20px] font-semibold'>Job Position:</label>
              <input 
              type="text" 
              id="fname" 
              name="fname"
              placeholder="Job Position" 
              className='block p-2.5 w-max text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-5'
              ></input>
            </div>
            <div className='flex'>
              <Dropdown_dept onhandleDeptChange={handleDept} />
              <Dropdown_batch onhandleBatchChange={handleBatch} />
            </div>
          </div>
          
          <div className='m-4'>
            <label for="message" class="block mb-2 text-[20px] font-semibold text-gray-900 ">Your message:</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  " placeholder="Write your thoughts here..."></textarea>
          </div>
            
          <button className="mx-4 my-3 font-medium text-gray-100 bg-blue-500 hover:bg-blue-600 font-poppins px-4 py-2 rounded-lg "> Send </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
