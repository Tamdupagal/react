import React from "react";
import { Container, Box, Grid, Card } from "@material-ui/core"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Table1 from "../Components/Table/Table1"

const ViewAttendanceReport = () => {
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
        { title:"Absent",field:"absent"}
    ]
    return(
        <div>
          <Container>
                <Box display="flex" alignItems="center"  p={1}
        m={1} justifyContent="center">
                    <Grid container spacing={2} lg={8}>
                        <Grid item xs={12} lg={6}>
                            <Card>
                                <Box display="flex" justifyContent="space-between">
                                    <Box>
                                        <h2>ATTENDANCE REPORT</h2>
                                    </Box>
                                    <Box display="flex" flexDirection="column">
                                        <Box style={{ border: "1px solid #ccc" }} display="flex" justifyContent="space-between"> <FiberManualRecordIcon style={{color:"red"}}/>Present</Box>
                                        <Box style={{ border: "1px solid #ccc" }} display="flex" justifyContent="space-between"> <FiberManualRecordIcon style={{color:"blue"}}/>Absent</Box>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Card>
                                <Box>
                                    <Container>
                                        <Table1 data={AttendanceData} column={AttendanceColumn}/>
                                    </Container>
                                </Box>
                                </Card>
                        </Grid>
                    </Grid>
            </Box>
          </Container>
        </div>
    )
}

export default ViewAttendanceReport;