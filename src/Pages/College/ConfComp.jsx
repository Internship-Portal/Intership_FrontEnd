import React, { useEffect } from 'react'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import config from '../../hooks/config'
import axios from 'axios'

function ConfComp() {

  const {id} = config()

  useEffect(()=>{
    const getConf =async ()=>{
      try {
        const res = await axios.get(`http://localhost:4000/api/officer/getOneOfficer/${id}`,{headers})
        console.log(res)
      } catch (error) {
        console.log(error.response)
      }
    }
    getConf()
  },[])

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

export default ConfComp