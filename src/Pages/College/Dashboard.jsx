import React, {useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { useNavigate } from 'react-router-dom'
import config from '../../hooks/config'

function Dashboard() {
  const {id} =config()
  const navigate = useNavigate()

  useEffect(() => {
    console.log(id)
    if (!id) navigate("/login")
  }, []);

  return (
    <div className='bg-white flex'>
      <div className='hidden sm:flex'>
        <Sidebar />
      </div>
      <div className='flex-[3]'>
        <Navbar />
        <hr className='h-0 border-r-[0.5px] border-solid border-[#E6E3E3]' />
      </div>
    </div>
  )
}

export default Dashboard
