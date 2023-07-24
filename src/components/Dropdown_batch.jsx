import React from 'react'

const DropDownB = (props) => {

  const handleClick =(event)=>{
    // event.preventDefault()
    console.log(event.target.value)
    props.onhandleBatchChange(event.target.value)
  } 

  return (
    <div>
  <div className="relative w-full lg:max-w-sm p-4">
            <select className="w-full p-2.5 text-black bg-slate-300 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600" onClick={handleClick}>
                <option  className='font-poppins'>Batch</option>
                <option value={2023} className='font-poppins' >2023</option>
                <option value={2024} className='font-poppins'>2024</option>
                <option  value={2025} className='font-poppins'>2025</option>
            </select>
        </div> 

    </div>
  )
}

export default DropDownB