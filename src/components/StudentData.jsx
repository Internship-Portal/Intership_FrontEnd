import React from 'react'
import MUIDataTable from 'mui-datatables'
import { MuiThemeProvider } from '@material-ui/core';

const StudentData = () => {
  const columns = ["Name", "Email Id", "Mobile No.", "Roll No.", "Skills", "Achievments", "CGPA", "Unavailable Dates", "Internship Status", "CGPA", "CGPA", "CGPA"];

  const data = [
    ["Vaibhav desale", "vaibhav.desale20@pccoepune.org", "7875543720", "TYITA27", "Full Stack", "NO", "8.3", "1- June - 31-July", "Yes"],
    ["Vaibhav desale", "vaibhav.desale20@pccoepune.org", "7875543720", "TYITA27", "Full Stack", "NO", "8.3", "1- June - 31-July", "Yes"],
    ["Vaibhav desale", "vaibhav.desale20@pccoepune.org", "7875543720", "TYITA27", "Full Stack", "NO", "8.3", "1- June - 31-July", "Yes"],
    ["Vaibhav desale", "vaibhav.desale20@pccoepune.org", "7875543720", "TYITA27", "Full Stack", "NO", "8.3", "1- June - 31-July", "Yes"]
  ];

  const options = {
    filterType: 'checkbox',
    responsive: "scroll",
  };


  return (
    <div style={{display: 'table', tableLayout:'fixed', width:'100%'}}>
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

export default StudentData