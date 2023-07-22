import React from "react";
import { CSVLink, CSVDownload } from "react-csv";
import axios from "axios";
import { useState } from "react";
import DropDownB from "./Dropdown_batch";
import DropDownD from "./Dropdown_dept";
import config from "../hooks/config";

const csv = [
  [
    "name",
    "email_id",
    "college_name",
    "location",
    "branch",
    "mobile_no",
    "roll_no",
    "achievements",
    "skills",
    "hobbies",
    "cgpa",
    "year_batch",
    "Internship_status",
    "tenth_percentage",
    "twelve_percentage",
    "diploma_percentage",
    "internship_start_date",
    "internship_end_date",
    "backlog",
    "linked_profile_link",
    "github_profile_link",
    "leetcode_profile",
    "geeksforgeeks_profile",
  ],
  [
    "Aarav Sharma",
    "aarav.sharma@email.com",
    "ABC College",
    "Delhi",
    "CSE",
    "9876543210",
    "CS101",
    "Hackathon Winner,Debate Champion",
    "Python,Java",
    "Reading, Chess",
    "7.89",
    "2024",
    "0",
    "84.96",
    "77",
    "84.5",
    "",
    "",
    "1",
    "linkedin.com/in/aaravsharma",
    "github.com/aaravsharma",
    "leetcode.com/aaravsharma",
    "geeksforgeeks.org/aaravsharma",
  ],
  [
    "Aditi Patel",
    "aditi.patel@email.com ",
    "XYZ University",
    "MUMBAU",
    "IT",
    "9876546723",
    "IT204",
    "National Coding Olympiad Finalist",
    "C++, Java, SQL",
    " Gaming, Basketball",
    "7.55",
    "2023",
    "0",
    "81.96",
    "78",
    "0",
    "",
    "",
    "2",
    "linkedin.com/in/aditipatel",
    "github.com/aditipatel ",
    "leetcode.com/aditipatel",
    "geeksforgeeks.org/aditipatel",
  ],
  [
    "Rahul Gupta",
    "rahul.gupta@email.com",
    "VIT",
    "DELHI",
    "CE",
    "7623455432",
    "CE778",
    "Research Paper Published ",
    "Embedded Systems",
    " Singing, Travelling ",
    "9.99",
    "2022",
    "1",
    "24.96",
    "47",
    "70.55",
    "Mar 01, 2022 ",
    "Jul 11, 2022",
    "4",
    "linkedin.com/in/rahulgupta",
    "github.com/rahulgupta",
    "leetcode.com/rahulgupta",
    "geeksforgeeks.org/rahulgupta",
  ],
  ["Jiya Singh","jiya.singh@email.com","MIT","	NASHIK","ENTC","	9123410154","	ENTC76","	Best Paper Presentation Award","AutoCAD, Project Management","Reading, Football", "5.5",	"2023","0","82.96",	"78",	"92.56","","","0",	"linkedin.com/in/jiyasingh", "	github.com/jiyasingh","leetcode.com/jiyasingh","geeksforgeeks.org/jiyasingh"],	
  ["Pranav Desai" ,"	pranav.desai@email.com",	"PCCOE","	Pune","	MECH"	,"8783782324","	ME765","	Robotics Competition Winner	"," CAD/CAM, SolidWorks"	,"Cooking, Cycling"  ,"	8.2","2023","1"	,"58","58","95.5","Jan 15, 2023","Nov 11,2023","0","linkedin.com/in/pranavdesai","	github.com/pranavdesai ","	leetcode.com/pranavdesai	","geeksforgeeks.org/pranavdesai"],	
  ["Riya Verma",	"riya.verma@email.com" ,"COEP","Pune","	IT","	8875210156","	IT45","Google Summer of Code Participant","Python, JavaScript"," Reading, Photography","5.8","2022","0","85","85","56","","","2","linkedin.com/in/riyaverma","github.com/riyaverma","leetcode.com/riyaverma","geeksforgeeks.org/riyaverma"]
];

const UploadList = () => {
  const [user, setUser] = useState({
    department_name: "",
    year_batch: null,
    csvFile: null,
  });

  const token = localStorage.getItem("jwt");
  const headers = {
    "Content-type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  };

  const handleBatchChange = (data) => {
    setUser({ ...user, year_batch: data });
  };

  const handleDeptChange = (data) => {
    setUser({ ...user, department_name: data });
  };

  const handleChange = (event) => {
    setUser({ ...user, csvFile: event.target.files[0] });
  };

  const successfulUpload = () => {
    toast.success("Upload Successfully !", {
      position: "top-center",
    });
  };
  const unsuccessfulUpload = () => {
    toast.error("Upload Unsuccessful !", {
      position: "top-center",
    });
  };

  const handleClick = async () => {
    try {
      const res = await axios.post(
        `http://localhost:4000/api/officer/uploadCSVOfStudents`,
        user,
        { headers }
      );
      successfulUpload();
      console.log(res);
    } catch (error) {
      unsuccessfulUpload();
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-center sm:justify-end sm:pr-32 ">
        <DropDownB onhandleBatchChange={handleBatchChange} />
        <DropDownD onhandleDeptChange={handleDeptChange} />
      </div>
      <div className="flex flex-col items-center text-center sm:text-left mt-6">
        <div className="flex items-center justify-center w-3/4">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-secondary text-black"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-black ">
                <span className="font-semibold font-poppins">
                  Click to upload
                </span>{" "}
                or drag and drop
              </p>
              <p className="text-xs text-black font-poppins">CSV</p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              name="csv"
              className="hidden"
              onChange={handleChange}
            />
          </label>
        </div>

        <h1 className="font-bold pt-8">OR</h1>

        <div className="w-3/4">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="file_input"
          >
            Upload file
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
            name="csv"
            onChange={handleChange}
          />
          <p
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            CSV File only
          </p>
        </div>

        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={handleClick}
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Upload</span>
        </button>
      </div>
      <CSVLink
        className=" font-bold inline-flex items-center my-2 w-full rounded-lg"
        data={csv} 
        filename={"CSV_Template.csv"}
      >
        <div className="bg-gray-300 hover:bg-gray-400 text-gray-800 mx-auto p-2 rounded-lg">Download Template CSV File</div>
      </CSVLink>
      
    </div>
  );
};

export default UploadList;
