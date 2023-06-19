import React from 'react'

const DropDownD = (props) => {

  const handleClick =(event)=>{
    // event.preventDefault()
    console.log(event.target.value)
    props.onhandleDeptChange(event.target.value)
  } 

  return (
    <div>
  <div className="relative w-full lg:max-w-sm p-10">
            <select className="w-full p-2.5 text-black bg-slate-300 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600" onClick={handleClick}>
                <option>Department</option>
                <option>CS</option>
                <option>IT</option>
                <option>EnTc</option>
            </select>
        </div>

    </div>
  )
}

export default DropDownD