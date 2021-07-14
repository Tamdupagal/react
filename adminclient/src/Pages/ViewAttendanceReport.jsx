import React from "react";
import { Container, Box, Grid, Card } from "@material-ui/core"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Table1 from "../Components/Table/Table1"
import { makeStyles } from "@material-ui/core/styles";
import AttendanceReportActions from "../Components/Actions/AttendanceReportActions"
// import {AttendanceColumn,AttendanceData} from "../Helpers/AttendanceReportData";
import CircularProgressBar from "../Components/Charts/CircularProgressBar";

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
    const AttendanceData = [
        {
            name: "yash",
            present: "0",
            absent:'1',
        },
                {
            name: "yash",
            present: "0",
            absent:'1',
        }
    ]
    const AttendanceColumn = [
        {
            title:"Student",field:"name"
        },
        { title: "Present", field: "present" },
        { title: "Absent", field: "absent" },
        {title: "Actions",
      field: "name",
      render: (row) => (
        <div>
          <AttendanceReportActions data={row} />
        </div>
      ),}
    ]
    const value = 50;
    return(
        <div>
            <Container>
                <div>
              <h1 className={classes.mainHeading}>Attendance Report for (name)</h1>
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
                                        <Box className={classes.info} display="flex" justifyContent="space-between" > <FiberManualRecordIcon style={{color:"red"}}/>Present</Box>
                                        <Box className={classes.info} display="flex" justifyContent="space-between"> <FiberManualRecordIcon style={{color:"blue"}}/>Absent</Box>
                                    </Box>
                                </Box>
                                <Box className={classes.info} display="flex" justifyContent="center" style={{paddingBottom:"3%"}}>
                                     <CircularProgressBar/>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item xs={12} lg={8}>
                            <Card>
                                    <Container>
                                        <Table1 data={AttendanceData} column={AttendanceColumn}/>
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