import React, { useEffect } from 'react'
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import CreateIcon from "@material-ui/icons/Create";
import { studentCoursesData } from '../../Helpers/studentCoursesData';

const StudentCoursesActions = (props) => {
    const history = useHistory()
    const handleManageCourse = () => {
        history.push({
          pathname: `/student-courses/${props.data._id}/manage`,
          state: {data: props.data}
        });
      };
    // console.log(props.data)
    useEffect(() => {
      console.log(props.data)
    }, [])
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
