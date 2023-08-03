import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import config from "../../hooks/config";
import Sidebar from "../../components/Sidebar";
import './dash.css'

function Dashboard() {
  const { id } = config();

  useEffect(() => {
    console.log(id);
  }, []);

  return (
    <div className="bg-white flex">
      <div className="sm:flex">
        <Sidebar user={"officer"} />
      </div>
      <div className="flex-[3]">
        <Navbar/>
        <hr className="h-0 border-r-[0.5px] border-solid border-[#E6E3E3]" />
        {/* <div className="back">
          <div className="img-back">
            vaibhav
          </div>

          <div className="card-back flex justify-around	p-3">
            <div className="logo">
<img src="https://static.vecteezy.com/system/resources/previews/019/766/223/original/amazon-logo-amazon-icon-transparent-free-png.png" alt="" />
            </div>
            <div className="info">
              <div className="pos">webdev</div>
              <div className="name">jd enterprice</div>
            </div>
            <div className="mes">jdgjakgndsakjgbakjgbaskjbas sadgjbakjg jksdbg</div>
            <button className="font-medium text-gray-100 bg-blue-500 hover:bg-blue-600 font-poppins px-2 py-1 rounded-lg ">send list</button>
          </div>
          
        </div> */}

      </div>
    </div>
  );
}

export default Dashboard;
