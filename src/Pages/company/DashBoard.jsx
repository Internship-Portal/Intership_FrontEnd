import React, { useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
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
      <div className='sm:flex'>
        <Sidebar user={"company"}/>
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
