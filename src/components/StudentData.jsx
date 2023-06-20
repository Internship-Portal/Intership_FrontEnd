import React, { useEffect , useContext , useState } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { MuiThemeProvider } from "@material-ui/core";
import "../components/StudentData.css";
import Dropdown_batch from "./Dropdown_batch";
import Dropdown_dept from "./Dropdown_dept";
import useFetch from "../hooks/useFetch";
import { AuthContext } from "../context/AuthContext";
import config from "../hooks/config";

const StudentData = () => {

  const [student ,setStudent] = useState({
    department_name:"",
    year_batch:null,
    students:[]
  })

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

  const {loading, error } = useContext(AuthContext);
  const {id , headers} = config()
 
  const options = {
    filterType: 'checkbox',
    responsive: "scroll",
  };

  const handleBatch =(data)=>{
    setStudent({...student, year_batch:data })
  }

  const handleDept =(data)=>{
    setStudent({...student, department_name:data })
  }

  useEffect( ()=>{
    const fetchStudent = async ()=>{
      try {
        const res = await axios.post(`http://localhost:4000/api/officer/getStudentDetails/${id}`,student, { headers } )
        setStudent({...student,students : res.data.data.student_details})
      } catch (error) {
        console.log(error.response.data)
      }
    }
    fetchStudent()
  },[student.year_batch,student.department_name]);

  return (
    <div>
      <div className="flex justify-end">
      <Dropdown_batch onhandleBatchChange={handleBatch}/>
      <Dropdown_dept onhandleDeptChange={handleDept}/>
      </div>
      
      {loading ? ("Loading") : (
        <div style={{ display: 'table', tableLayout: 'fixed', width: '100%' }}>
          <MuiThemeProvider >
            <MUIDataTable
              title={"Students"}
              data={student.students}
              columns={columns}
              options={options}
            />
          </MuiThemeProvider>
        </div>
        )
      }
    </div>
  )
}

export default StudentData