import { Card, Container, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@material-ui/core';
import React from 'react'
import {useStyles} from "./../Styles/AddNewLecture"

export const ViewClassroomHistory = () => {
    const classes = useStyles()
    const data = [1,2,3,4]

    const renderTable = () =>{
        return (
            <TableRow>
                <TableCell>Wed, Apr 14, 2021 3:01 PM</TableCell>
                <TableCell>System</TableCell>
                <TableCell>Lecture Joined By Teacher : Demo Teacher</TableCell>
            </TableRow>
        )
    }
    return (
        <Container style={{border:"2px solid black"}}>
            <div>
            <h1 className={classes.mainHeading}>Classroom Timeline:Demo Class For Yash Govekar</h1>
            </div>
            <Grid container alignItems='center' justify='center'>
                <Grid item xs={12} lg={10}>
                <Card style={{padding: "0% 4% 0% 4%"}}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>TIME</TableCell>
                                <TableCell>Updated By</TableCell>
                                <TableCell>Event</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map(renderTable)}
                        </TableBody>
                    </Table>
                </TableContainer>
                </Card>
                </Grid>
            </Grid>
        </Container>
    )
}
export default ViewClassroomHistory;
