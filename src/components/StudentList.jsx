import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { MuiThemeProvider } from "@material-ui/core";
import "../components/StudentData.css";
import Dropdown_batch from "./Dropdown_batch";
import Dropdown_dept from "./Dropdown_dept";
import { AuthContext } from "../context/AuthContext";
import config from "../hooks/config";
const StudentList = (collegeDetails) => {
    const [student, setStudent] = useState({
       
        students: [],
      });

    const [loading,setLoading]=useState(false);
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
    

      const data=[
        {}
      ]
      
      const { id, headers } = config();
    
      const options = {
        filterType: "checkbox",
        responsive: "scroll",
      };

      const getStudentData=async()=>{
        try {
            const officer_id=collegeDetails._id;
            const year_batch=collegeDetails.year_batch;
            const department_name=collegeDetails.department_name;
            const token = localStorage.getItem("jwt");
            const res = await fetch(
                `http://localhost:4000/api/company/getStudentDetailsbyDeptAndYear`,
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${token}`,
                  },
                  body: JSON.stringify({officer_id:officer_id,year_batch:year_batch,department_name:department_name }),
                }
              );
            console.log(res)
            setStudent({ ...student, students: res.data.data.student_details });
          } catch (error) {
            console.log(error.response.data);
          }
      }
    
      
     
    
      useEffect(() => {
      getStudentData()
        
      }, []);
  return (
    <div>
     

      {loading ? (
        "Loading"
      ) : (
        <div style={{ display: "table", tableLayout: "fixed", width: "100%" }}>
          <MuiThemeProvider>
            <MUIDataTable
              title={"Students"}
              data={data}
              columns={columns}
              options={options}
            />
          </MuiThemeProvider>
        </div>
      )}
    </div>
  )
}

export default StudentList