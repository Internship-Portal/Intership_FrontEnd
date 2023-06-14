import React from "react";
import MUIDataTable from "mui-datatables";
import { MuiThemeProvider } from "@material-ui/core";
import "../components/StudentData.css";
import Dropdown_batch from "./Dropdown_batch";
import Dropdown_dept from "./Dropdown_dept";
import useFetch from "../hooks/useFetch";
const StudentData = () => {
  const columns = [
    "Name",
    "Email Id",
    "Mobile No.",
    "Roll No.",
    "Skills",
    "Achievments",
    "CGPA",
    "Unavailable Dates",
    "Internship Status",
    "Live Backlog",
    "CGPA",
    "CGPA",
  ];

  const { data, loading, error } = useFetch('http://localhost:3031/users')

  const options = {
    filterType: 'checkbox',
    responsive: "scroll",
  };

  return (
    <div>
      {loading ? ("Loading") : (
        <div style={{ display: 'table', tableLayout: 'fixed', width: '100%' }}>
          <MuiThemeProvider >
            <MUIDataTable
              title={"Students"}
              data={data}
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