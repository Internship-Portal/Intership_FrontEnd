import React, { useEffect, useContext, useState } from "react";
import MUIDataTable from "mui-datatables";
import { MuiThemeProvider } from "@material-ui/core";
import "../components/StudentData.css";
import Dropdown_batch from "./Dropdown_batch";
import Dropdown_dept from "./Dropdown_dept";
import { AuthContext } from "../context/AuthContext";
import config from "../hooks/config";

const StudentData = () => {
  const [student, setStudent] = useState({
    department_name: "",
    year_batch: null,
    students: [],
  });

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

  const { loading } = useContext(AuthContext);
  const { headers } = config();

  const options = {
    filterType: "checkbox",
    responsive: "scroll",
  };

  const handleBatch = (data) => {
    setStudent({ ...student, year_batch: data });
  };

  const handleDept = (data) => {
    setStudent({ ...student, department_name: data });
  };

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
    <div>
      <div className="flex justify-center sm:justify-end sm:pr-12 mt-5 ">
        <Dropdown_batch onhandleBatchChange={handleBatch} />
        <Dropdown_dept onhandleDeptChange={handleDept} />
      </div>

      {loading ? (
        "Loading"
      ) : (
        <div style={{ display: "table", tableLayout: "fixed", width: "100%" }} className="px-8">
          <MuiThemeProvider  className="font-poppins">
            <MUIDataTable
              title={"Students"}
              data={student.students}
              columns={columns}
              options={options}
            />
          </MuiThemeProvider>
        </div>
      )}
    </div>
  );
};

export default StudentData;
