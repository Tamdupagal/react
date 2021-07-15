import React, { useContext, useEffect } from "react";
import { Container, Box, Grid, Card } from "@material-ui/core"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Table1 from "../Components/Table/Table1"
import { makeStyles } from "@material-ui/core/styles";
import {AttendanceColumn,AttendanceData} from "../Helpers/AttendanceReportData";
import CircularProgressBar from "../Components/Charts/CircularProgressBar";
import { useParams } from "react-router-dom";
import { getClassroomById } from "../action/actions";
import { AppContext } from "../AppContext";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    mainHeading: {
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "'Exo', sans-serif",
        marginTop: "3%",
        marginBottom: "3%",
    },
    info: {
        padding: "5%",
        margin: "1%",
    }
}));



const ViewAttendanceReport = () => {
    const classes = useStyles();
    const { state, dispatch } = useContext(AppContext)
    const [classroomName, setClassroomName] = useState()
    const [studentLength, setStudentLength] = useState()
    const {id} = useParams()
    const {lid} = useParams()
    let classroom = [];
    const percentage = 50;

    useEffect(async() => {
        classroom = await getClassroomById(dispatch,id)
        setClassroomName(classroom.name)
        setStudentLength(classroom.enrolled_students?Object.keys(classroom.enrolled_students).length:"")
        
    }, [])
    return(
        <div>
            <Container style={{marginBottom:"20vh"}}>
                <div>
                    {/* {
                        classroom.name?
                        (<h1 className={classes.mainHeading}>Attendance Report for {state.classroomDataByID?.classroom.name}</h1>):
                        ""
                    } */}
              <h1 className={classes.mainHeading}>Attendance Report of {classroomName}</h1>
          </div>
                <Box display="flex" alignItems="center"  p={1}
        m={1} justifyContent="center">
                    <Grid container spacing={2} lg={10}>
                        <Grid item xs={12} lg={4}>
                            <Card style={{padding:"2%"}}>
                                <Box display="flex" justifyContent="space-between">
                                    <Box>
                                        <h3 className={classes.mainHeading}>ATTENDANCE REPORT</h3>
                                    </Box>
                                    <Box display="flex" flexDirection="column" style={{marginRight:"3%"}}>
                                        <Box className={classes.info} display="flex" justifyContent="space-between" > <FiberManualRecordIcon style={{color:"#8ad8ed"}}/>Present</Box>
                                        <Box className={classes.info} display="flex" justifyContent="space-between"> <FiberManualRecordIcon style={{color:"#ff3333"}}/>Absent</Box>
                                    </Box>
                                </Box>
                                <Box className={classes.info} display="flex" justifyContent="center" style={{paddingBottom:"3%"}}>
                                    {
                                        lid?
                                    <CircularProgressBar value={percentage} text={`${percentage}%`}/>:
                                    <div>Click the visibilty button to view the graphical report</div>
                                    }
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item xs={12} lg={8}>
                            <Card>
                                    <Container>
                                        {/* {
                                        classroom.enrolled_students?   */}
                                        {
                                            <Table1 data={AttendanceData(state,studentLength)} column={AttendanceColumn(studentLength)}/>

                                        }
                                        {/* :
                                        ""
                                        } */}
                                    </Container>
                                </Card>
                        </Grid>
                    </Grid>
            </Box>
          </Container>
        </div>
    )
}

export default ViewAttendanceReport;