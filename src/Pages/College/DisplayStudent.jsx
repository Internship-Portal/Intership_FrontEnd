import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import config from "../../hooks/config";
import StudentDataTable from "../../components/StudentDataTable";

function DisplayStudent() {
  const [student, setStudent] = useState({
    department_name: "",
    year_batch: null,
    students: [],
  });
  const handleBatch = (data) => {
    setStudent({ ...student, year_batch: data });
  };

  const handleDept = (data) => {
    setStudent({ ...student, department_name: data });
  };

  const [selectStudents, setSelectStudents] = useState([]);

  const handleClg = (data) => {
    selectStudents.push(data);
    setSelectStudents(selectStudents);
  };

  const deleteClg = (data) => {
    var deleteIndex;
    for (var i = 0; i < selectStudents.length; i++) {
      if (selectStudents[i]._id == data._id) {
        deleteIndex = i;

        break;
      }
    }
    setSelectStudents([
      ...selectStudents.slice(0, deleteIndex),
      ...selectStudents.slice(deleteIndex + 1, selectStudents.length),
    ]);
  };

  const col = [
    {
      name: "Name",
      diplay: false,
      value: "name"
    },

    {
      name: "Name",
      diplay: true,
      value: "name"
    },
    {
      name: "Email Id",
      diplay: true,
      value: "email_id"
    },
    {
      name: "Location",
      diplay: true,
      value: "location"
    },
    {
      name: "Mobile No",
      diplay: true,
      value: "mobile_no"
    },

    {
      name: "Roll No",
      diplay: true,
      value: "roll_no"
    },
    {
      name: "CGPA",
      diplay: true,
      value: "cgpa"
    },
    {
      name: "Skills",
      diplay: true,
      value: "skills"
    },

  ];

  const { headers } = config();

  const getConf = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/officer/getStudentDetails",
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify({
            department_name: student.department_name,
            year_batch: student.year_batch,
          }),
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
    <div className="bg-white flex">
      <div className="hidden sm:flex">
        <Sidebar user={"officer"} />
      </div>
      <div className="flex-[3]">
        <Navbar pageName={"Display Calender"} />
        <hr className="h-0 border-r-[0.5px] border-solid border-[#E6E3E3]" />

        <StudentDataTable
          col={col}
          row={student.students}
          handleClg={handleClg}
          deleteClg={deleteClg}
          handleBatch={handleBatch}
          handleDept={handleDept}
        />
      </div>
    </div>
  );
}

export default DisplayStudent;
