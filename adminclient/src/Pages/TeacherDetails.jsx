import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { Button, Card, CardHeader } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import {useStyles} from "./../Styles/TeacherDetails"

const TeacherDetails = () => {
  let data = [1,2,4]

  const renderTable = (data) =>{
    return(
    <TableRow>
      <TableCell>Khushboo</TableCell>
      <TableCell>Khushboo</TableCell>
    </TableRow>
    )
  }

  const classes = useStyles();
  return (
    <div>
      <Container>
        <div>
          <h1 className={classes.mainHeading}>Teacher: Name</h1>
        </div>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Divider className={classes.dividerInset1} />
              <h3 className={classes.subheading1}>TEACHER'S INFORMATION</h3>
              <Card>
              <h3 style={{textAlign: "center"}}>Demo Teacher</h3>
              <Card style={{margin: "3%"}}>
                <Divider/>
                <TableContainer component={Paper}>
                <Table Striped>
                <TableBody>
                  {
                  data.map(renderTable)
                  }
                </TableBody>
                </Table>
                </TableContainer>
              </Card>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Divider className={classes.dividerInset2} />
              <h3 className={classes.subheading1}>OTHER INFORMATION</h3>
              <Card>
              <h3 style={{textAlign: "center"}}>Demo Teacher</h3>
              <Card style={{margin: "3%"}}>
                <Divider/>
                <TableContainer component={Paper}>
                <Table aria-label="customized table">
                <TableBody>
                  {
                  data.map(renderTable)
                  }
                </TableBody>
                </Table>
                </TableContainer>
              </Card>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default TeacherDetails;
