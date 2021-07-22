import React from 'react'
import { Card, CardContent, CardHeader, Divider, Paper, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import {  Table, TableContainer } from "@material-ui/core";

const TeacherTimeline = () => {
  const data=[1,2,3,4]
  const renderTable = () =>{
    return (
      <TableRow >
        <TableCell>Demo Class For Yash Govekar</TableCell>
        <TableCell>Lecture Joined By Teacher : Demo Teacher</TableCell>
      </TableRow>
    )
  }
    return (
        <div>
            <Card>
                <CardHeader title="Teacher's Timeline"/>
                <Divider/>
                <CardContent>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                    <TableCell>CLASSROOM</TableCell>
                    <TableCell>EVENT</TableCell>
                    </TableHead>
                    <TableBody>
                      {data.map(renderTable)}
                    </TableBody>
                  </Table>
                </TableContainer>               
                </CardContent>
              </Card>
        </div>
    )
}
export default TeacherTimeline;
