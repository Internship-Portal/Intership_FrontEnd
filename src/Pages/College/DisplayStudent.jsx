import React,{useState,useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import StudentData from '../../components/StudentData'
import 'react-toastify/dist/ReactToastify.css';
import config from '../../hooks/config'
import StudentDataTable from '../../components/StudentDataTable';
import DropDownB from '../../components/Dropdown_batch';
import DropDownD from '../../components/Dropdown_dept';
function DisplayStudent() {
  const [student, setStudent] = useState({
    department_name: "",
    year_batch: null,
    students: [],
  });
  const handleBatchChange = (data) => {
    setStudent({ ...student, year_batch: data });
  };

  const handleDeptChange = (data) => {
    setStudent({ ...student, department_name: data });
  };

  const [selectStudents,setSelectStudents]=useState([])
  
  const handleClg=(data)=>{
    selectStudents.push(data)
    setSelectStudents(selectStudents)
    
  }

const deleteClg=(data)=>{
  var deleteIndex;
  for(var i=0;i<selectStudents.length;i++)
  {
    if(selectStudents[i]._id==data._id)
    {
      deleteIndex=i;
      
      break;
    }
  }
  setSelectStudents([...selectStudents.slice(0,deleteIndex),
  ...selectStudents.slice(deleteIndex+1,selectStudents.length)


  ]
  )

}

  const col = [
    {
      "name": "Name",
      "diplay": false
    },
   
    {
      "name": "Name",
      "diplay": true
    },
    {
      "name": "Email Id"
      ,
      "diplay": true
    },
    {
      "name": "Location"
      ,
      "diplay": true
    },
    {
      "name": "Mobile No",
      "diplay": true
    },

    {
      "name": "Roll No",
      "diplay": true

    }


  ]

  const columns = [
    "name",
    "email_id",
    "mobile_no",
    "roll_no",
    "skills",
    "achievements",
    "cgpa",
    // "Unavailable Dates",
    "year_batch",
    "backlog",
    "location",
    "tenth_percentage",
    "twelve_percentage",
  ];

  
  const { headers } = config();

 

  // const handleBatch = (data) => {
  //   setStudent({ ...student, year_batch: data });
  // };

  // const handleDept = (data) => {
  //   setStudent({ ...student, department_name: data });
  // };

  const getConf = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/officer/getStudentDetails",
        {
          method:"POST",
          headers: headers,
          body: JSON.stringify({
            department_name:student.department_name,
            year_batch:student.year_batch,
          })
        }
      );

      if (!response.ok) {
        throw new Error("Request failed with status code " + response.status);
      }

      const result = await response.json();
      console.log(result.data.student_details);
      setStudent({ ...student, students: result.data.student_details });

    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getConf();
  }, [student.year_batch, student.department_name]);
  
  return (
    <div className='bg-white flex'>
      <div className='hidden sm:flex'>
        <Sidebar user={"officer"}/>
      </div>
      <div className='flex-[3]'>
       
        <hr className='h-0 border-r-[0.5px] border-solid border-[#E6E3E3]' />
        <div className="flex flex-row items-center justify-center sm:justify-end sm:pr-32 ">
        <DropDownB onhandleBatchChange={handleBatchChange} />
        <DropDownD onhandleDeptChange={handleDeptChange} />
      </div>
      <StudentDataTable col={col} row={student.students} handleClg={handleClg} deleteClg={deleteClg}/>
      </div>
    </div>
  )
  
}

export default DisplayStudent
