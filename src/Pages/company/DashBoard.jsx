import React, { useEffect} from 'react'
import Navbar from '../../components/Navbar'
import SidebarCompany from '../../components/SidebarCompany'
import config from '../../hooks/config'
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dashboard() {
  const {id} =config()

  useEffect(() => {
    console.log(id)
  }, []);

  return (
    <div className='bg-white flex'>
      <div className='hidden sm:flex'>
        <SidebarCompany user={"company"}/>
      </div>
      <div className='flex-[3]'>
        <Navbar />
        <hr className='h-0 border-r-[0.5px] border-solid border-[#E6E3E3]' />
      </div>
      {/* <ToastContainer/> */}
    </div>
  )
}

export default Dashboard
