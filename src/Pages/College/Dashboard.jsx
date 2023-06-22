import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { useNavigate } from 'react-router-dom'
import config from '../../hooks/config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../context/AuthContext'

function Dashboard() {
  const {id} =config()
  const navigate = useNavigate()

  const {headers} = config()

  const {dispatch} = useContext(AuthContext)

  useEffect(() => {
    console.log(id)
    // if (!id) navigate("/login")

    const getComp =async ()=>{
      try {
        const res = await axios.get(`http://localhost:4000/api/officer/getOneOfficer/${id}`,{headers})
        console.log(res.data.data.subscribe_request_from_company)
        dispatch({type : "SET_COMPANIES" , payload : res.data.data.subscribe_request_from_company})
      } catch (error) {
        console.log(error)
      }
    }

    getComp()
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
      <ToastContainer/>
    </div>
  )
}

export default Dashboard
