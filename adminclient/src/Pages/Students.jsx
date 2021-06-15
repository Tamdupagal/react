// import React, { useState, useEffect } from "react";
// import MaterialTable from "material-table";
// import { Box, Button, Container, Typography, Grid } from "@material-ui/core";
// import CreateIcon from "@material-ui/icons/Create";
// import { useHistory } from "react-router";
// import { MTableBodyRow } from "material-table";
// import { makeStyles } from "@material-ui/core/styles";
// import StudentActions from "./StudentActions";
// // import { StudentData } from "./../Helpers/StudentData";
// import Student from "./../CRUD/Students"

// const useStyles = makeStyles({
//   tableRow: {
//     "&:hover": { backgroundColor: "#fafaf2 !important" },
//   },
//   title: {
//     fontSize: "2rem",
//     fontWeight: "700",
//     fontFamily: "KoHo, sans-serif",
//   },
// });

// const Students = () => {
//   const classes = useStyles();
//   const history = useHistory();

//   const [data, setData] = useState();
//   useEffect(() => {
//     getStudentAll();
//   }, []);

//   const getStudentAll = () => {
//     Student.getAll()
//     .then(res =>{
//       setData(res.data)
//       console.log(res)
//     })
//     .catch(e => {
//       console.log(e)
//     });
//   }
//   const Columns = [
//     {
//       title: "Name",
//       field: "name",
//     },
//     { title: "Email", field: "email" },
//     { title: "Parent Name", field: "parent_name" },
//     {
//       title: "Parent's Relation.",
//       field: "parent_relation ",
//     },
//     { title: "Status", field: "active" },
//     {
//       title: "Actions",
//       field: "name",
//       render: (row) => (
//         <div>
//           <StudentActions />
//         </div>
//       ),
//     },
//   ];
//   return (
//     <div>
//       <Container>
//         <Box display="flex" justifyContent="center">
//           <Grid item lg={10}>
//             <Container>
//               <Container
//                 style={{
//                   border: "1px solid #e6e6ff",
//                   borderBottom: "white",
//                   backgroundColor: "white",
//                   padding: "1%",
//                   borderTopLeftRadius: "10px",
//                   borderTopRightRadius: "10px",
//                 }}
//               >
//                 <Box display="flex" justifyContent="space-between">
//                   <Typography className={classes.title}>STUDENTS</Typography>

//                   <Button variant="contained" color="secondary">
//                     Add new Student
//                   </Button>
//                 </Box>
//               </Container>
//             </Container>

//             <Container>
//               {" "}
//               <MaterialTable
//                 title=""
//                 data={data}
//                 columns={Columns}
//                 options={{
//                   exportButton: true,
//                   border: true,

//                   headerStyle: {
//                     border: "0.5px solid #ccc",
//                     backgroundColor: "#007399",
//                     color: "white",
//                     fontSize: "1.2rem",
//                     fontWeight: "800",
//                     fontFamily: "KoHo, sans-serif",
//                     letterSpacing: "0.07rem",
//                     "&:hover": { color: "white !important" },
//                   },

//                   rowStyle: (rowData) => ({
//                     backgroundColor:
//                       rowData.tableData.id % 2 === 0 ? "#FFF" : "#e6f9ff",
//                     fontWeight: "600",
//                     fontSize: "1rem",
//                     rowStyle: "#486684",
//                   }),
//                   cellStyle: {
//                     border: "0.5px solid #ccc",
//                   },
//                 }}
//                 components={{
//                   Row: (props) => (
//                     <MTableBodyRow className={classes.tableRow} {...props} />
//                   ),
//                 }}
//               />
//             </Container>
//           </Grid>
//         </Box>
//       </Container>
//     </div>
//   );
// };

// export default Students;

import React, { useState, useEffect, useContext} from "react";
import { Box, Button, Container, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { StudentData, StudentColumn} from "./../Helpers/StudentData";
import { AppContext } from "../AppContext";
import { getAllStudents } from "../action/actions";
import Table from '../Components/Table/Table'
import CircularProgress from '@material-ui/core/CircularProgress';
// import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles({
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    fontFamily: "KoHo, sans-serif",
  },
});

const Students = () => {
  const classes = useStyles();
  const history = useHistory();

  const { state, dispatch } = useContext(AppContext)
  
  const STUDENT_DATA = state?.studentData

  useEffect(() => {
    getAllStudents(dispatch)
  }, []);

  const handleAttendanceReport = () => {
    history.push("/attendance/report");
  };

  return (
    <div>
      <Container>
        <Container
          style={{
            border: "1px solid #e6e6ff",
            borderBottom: "white",
            backgroundColor: "white",
            padding: "1%",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        >
          <Box display="flex" justifyContent="space-between">
            <Typography className={classes.title}>STUDENTS</Typography>

            <Button variant="contained" color="secondary">
              Add new Student
            </Button>
          </Box>
        </Container>
      </Container>

      <Container>
        {STUDENT_DATA.isLoading ? <CircularProgress /> : STUDENT_DATA.anyError ?
          <div>
              Ops! Data could not be loaded, try again .
          </div>
          :
          <Table data={StudentData(state)} column={StudentColumn(true)} />
        }
      </Container>
    </div>
  );
};

export default Students;

