import React from 'react'
import MUIDataTable from 'mui-datatables'

const StudentData = () => {
  const columns = ["Name", "Email Id", "Mobile No.", "Roll No.", "Skills", "Achievments", "CGPA", "Unavailable Dates", "Internship Status", "CGPA", "CGPA", "CGPA"];

  const data = [
    ["Vaibhav desale", "vaibhav.desale20@pccoepune.org", "7875543720", "TYITA27", "Full Stack", "NO", "8.3", "1- June - 31-July", "Yes"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  const options = {
    filterType: 'checkbox',
  };


  return (
      <MUIDataTable
        title={"Students"}
        data={data}
        columns={columns}
        options={options}
      />

  )
}

export default StudentData