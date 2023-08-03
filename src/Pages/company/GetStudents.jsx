import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import "react-toastify/dist/ReactToastify.css";
import config from "../../hooks/config";
import StudentDataTable from "../../components/StudentDataTable";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from 'react-router-dom';

const GetStudents = () => {
    const collegeDetails=useLocation()
    
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
      const col = [
        {
          name: "Name",
          diplay: false,
          value:"name"
        },
    
        {
          name: "Name",
          diplay: true,
          value:"name"
        },
        {
          name: "Email Id",
          diplay: true,
          value:"email_id"
        },
        {
          name: "Location",
          diplay: true,
          value:"location"
        },
        {
          name: "Mobile No",
          diplay: true,
          value:"mobile_no"
        },
    
        {
          name: "Roll No",
          diplay: true,
          value:"roll_no"
        },
      ];
    
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

      const { headers } = config();

      const successSend = () => {
        toast.success("List sent Successfully", {
          position: "top-center",
        });
      };

      const errSend = () => {
        toast.error("Couldn't send the List", {
          position: "top-center",
        });
      };

      const handleClick=async()=>{
        try {
           
          
            const token = localStorage.getItem("jwt");
            
           
            const res = await fetch(
              "http://localhost:4000/api/company/setSelectedStudentsWithoutDates",
              {
                method: "PUT",
                headers: {
                  "content-type": "application/json",
                  authorization: `bearer ${token}`,
                },
                body: JSON.stringify({
                  officer_id: collegeDetails.state.officer_id,
                  department_name:student.department_name,
                  year_batch:student.year_batch,
                  selected_students:selectStudents
                }),
              }
            );
      
            if (!res.ok) {
              errSend()
              throw new Error("Request failed");
            }
            else{
              successSend()
            }
          
      
            const result = await res.json();
            console.log(result.data)
        
            console.log(result);
          } catch (error) {
            console.log(error);
          }

      }



      const getConf = async () => {
        try {
            const token = localStorage.getItem("jwt");
           
            
          const response = await fetch(
            "http://localhost:4000/api/company/getStudentDetailsbyDeptAndYear",
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
                authorization: `bearer ${token}`,
              },
              body: JSON.stringify({
                officer_id:collegeDetails.state.officer_id,
                year_batch: student.year_batch,
                department_name: student.department_name,
              }),
            }
          );
    
          if (!response.ok) {
            throw new Error("Request failed with status code " + response.status);
          }
    
          const result = await response.json();
          setStudent({ ...student, students: result.data });
          console.log(result.data);
         
        } catch (error) {
          console.log(error);
        }
      };

      const getselected = async () => {
        try {
            const token = localStorage.getItem("jwt");
           
            
          const response = await fetch(
            "http://localhost:4000/api/company/getStudentDetailsbyDeptAndYear",
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
                authorization: `bearer ${token}`,
              },
              body: JSON.stringify({
                officer_id:collegeDetails.state.officer_id,
                year_batch: student.year_batch,
                department_name: student.department_name,
              }),
            }
          );
    
          if (!response.ok) {
            throw new Error("Request failed with status code " + response.status);
          }
    
          const result = await response.json();
          setStudent({ ...student, students: result.data });
          console.log(result.data);
         
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        if(collegeDetails.state.Role==="send"){
          getConf();
        }
        else{
          getselected();
        }
        
      }, [student.year_batch, student.department_name]);
  return (
    <div className="bg-white flex">
      <div className="hidden sm:flex">
        <Sidebar user={"Company"} />
      </div>
      <div className="flex-[3]">
      <Navbar pageName={`Students - ${collegeDetails.state.name}`}/>
        <hr className="h-0 border-r-[0.5px] border-solid border-[#E6E3E3]" />
        <StudentDataTable
          col={col}
          row={student.students}
          handleClg={handleClg}
          deleteClg={deleteClg}
          handleBatch={handleBatch}
          handleDept={handleDept}
          handleClick={handleClick}
          Role= {collegeDetails.state.Role}
        />
      </div>
      <ToastContainer/>
    </div>
  )
}

export default GetStudents