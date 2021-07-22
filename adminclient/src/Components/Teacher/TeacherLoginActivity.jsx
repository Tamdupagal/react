import React from 'react'
import {  Card, CardContent, CardHeader, Divider, Paper, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import {  Table, TableContainer } from "@material-ui/core";

const TeacherLoginActivity = () => {
  const data=[1,2,3,4]
  const renderTable = () =>{
    return (
      <TableRow >
        <TableCell>Thu, May 27, 2021 3:01 PM</TableCell>
      </TableRow>
    )
  }
    return (
        <div>
            <Card>
                <CardHeader title="Teacher's Login Activity"/>
                <Divider/>
                <CardContent>
                <TableContainer component={Paper}>
                  <Table size="medium">
                    <TableHead size="small">
                    <TableCell>CLASSROOM</TableCell>
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
export default TeacherLoginActivity;
