import React from "react";
import { useContext } from "react";
import MUIDataTable from "mui-datatables";
import { MuiThemeProvider } from "@material-ui/core";
import "../components/StudentData.css";
import Dropdown_batch from "./Dropdown_batch";
import Dropdown_dept from "./Dropdown_dept";
import useFetch from "../hooks/useFetch";
import { AuthContext } from "../context/AuthContext";

const StudentData = () => {
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

  // const { loading, error, dispatch } = useContext(AuthContext);
  const { data, loading, error } = useContext(AuthContext);
  // console.log(data)
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