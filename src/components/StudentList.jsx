import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { MuiThemeProvider } from "@material-ui/core";
import "../components/StudentData.css";
import Dropdown_batch from "./Dropdown_batch";
import Dropdown_dept from "./Dropdown_dept";
import { AuthContext } from "../context/AuthContext";
import config from "../hooks/config";
const StudentList = () => {
   
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
        {
            
        }
      ]
      
      const { id, headers } = config();
    
      const options = {
        filterType: "checkbox",
        responsive: "scroll",
      };
    
     
    
      useEffect(() => {
      
        
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