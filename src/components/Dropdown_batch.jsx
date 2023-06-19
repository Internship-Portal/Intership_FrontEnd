import React from 'react'

const DropDownB = (props) => {

  const handleClick =(event)=>{
    // event.preventDefault()
    console.log(event.target.value)
    props.onhandleBatchChange(event.target.value)
  } 

  return (
    <div>
  <div className="relative w-full lg:max-w-sm p-10">
            <select className="w-full p-2.5 text-black bg-slate-300 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600" onClick={handleClick}>
                <option className=''>Batch</option>
                <option >2023</option>
                <option>2024</option>
                <option>2025</option>
            </select>
        </div> 

    </div>
  )
}

export default DropDownB