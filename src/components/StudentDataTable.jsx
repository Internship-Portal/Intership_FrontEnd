import React,{useState} from 'react'
import { useEffect } from 'react';
import { pccoe } from '../assets';
import Dropdown_batch from './Dropdown_batch'
import Dropdown_dept from './Dropdown_dept'

const StudentDataTable = (props) => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const user=props.user;
    const col=props.col;
    const handleChange = (e) => {
      e.preventDefault();
      setSearch(e.target.value);
    };
  
    const searchItem = data.filter((data) =>
   
    
      data.name.toLowerCase().includes(search.toLowerCase())

  );
  const handleClick=(data)=>{
   props.handleChange(data);
  }

  
  const [checked,setChecked]=useState([{}]);
  const handleCheck=(data,e)=>{

   
    if(e.target.checked==true)
    {
     
      props.handleClg(data)
      
      
    }else {
       props.deleteClg(data);
    }
    
  }

console.log(data)
  useEffect(()=>{
       setData(props.row)
  })
  return (
    <div >

    <form className="m-9 ">
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300  rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-gray-300 " placeholder="Search College Names..." onChange={handleChange} required />

      </div>
    </form>
    <div class="relative overflow-y-scroll sm:rounded-lg m-9 sm:h-[350px] h-[400px] ">
      <table class="w-full table-auto overflow-scroll text-sm text-left text-gray-500 shadow ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 shadow-md">
          <tr className='bg-cardBackground text-white'>
          
                   
            {

              col.map((col) => (<th scope="col" class="px-6 py-3">
                {(col.diplay) ? <>{col.name}</> : <span class="sr-only">{col.name}</span>}

              </th>))
            }
          </tr>
        </thead>
        <tbody >
            
            {
          searchItem?searchItem.map((student,index) => (
            <tr class="bg-white border-b  hover:bg-gray-50  hover:shadow-md">
              <td key={index} >
                <input type="checkbox" value={student}  onChange={(e) => {
                 handleCheck(student,e)
                }}/>
              </td>
            
              <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
               {student.name}
              </th>
              <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
               {student.email_id}
              </th>
              <td class=" py-2 text-center">
                 {student.location}
              </td>
              <td class=" py-2 text-center">
               {student.mobile_no}
              </td>
              <td class=" py-2 text-center">
                {student.roll_no}
              </td>
            </tr>
          )):<td class=" py-2 text-center">
         No Data Found
        </td>
          }
          


        </tbody>
      </table>
    </div>


  </div>
  )
}

export default StudentDataTable