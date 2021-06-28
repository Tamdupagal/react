import React from "react";
import { Container, } from "@material-ui/core";
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
      <Container>
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
      </Container>
    </div>
  );
};
export default AddStudent;
