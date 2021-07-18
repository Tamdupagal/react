import React from "react";
import { Container,Box,Grid } from "@material-ui/core";
import { useStyles } from "./../Styles/AddStudent";
import ImportExcel from "../Components/Students/ImportExcel";
import StudentsInfo from "../Components/Students/StudentsInfo";
import StudentsInfoEdit from "../Components/Students/StudentsInfoEdit";
import { useParams } from "react-router-dom";

const AddStudent = () => {
  const classes = useStyles();
  const {id} = useParams()
  return (
    <div>
      <Box display="flex" justifyContent="center">
        <Grid item xs={12} lg={11}>
        <Container>
          <div>
            {
              id?
              <h1 className={classes.mainHeading}>Edit Student</h1>:
              <h1 className={classes.mainHeading}> Add a Student</h1>
            }
          </div>
          
          {
            id? 
            <StudentsInfoEdit/>
            :
            <div>
              <ImportExcel/> 
              <StudentsInfo/>
            </div> 
          }
          
          </Container>
          </Grid>
      </Box>
    </div>
  );
};
export default AddStudent;
