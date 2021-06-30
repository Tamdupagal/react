import React from 'react'
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import CreateIcon from "@material-ui/icons/Create";
import { studentCoursesData } from '../../Helpers/studentCoursesData';

const StudentCoursesActions = () => {
    const history = useHistory()
    const handleManageCourse = () => {
        history.push("/student-courses/manage");
      };
    return (
        <div style={{ fontWeight: "700" }}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#17a2b8",
                  padding: "2%",
                  color: "white",
                  fontSize: "small",
                }}
                onClick={handleManageCourse}
              >
                <CreateIcon /> Manage Student Course
              </Button>
        </div>
    )
}
export default StudentCoursesActions;
