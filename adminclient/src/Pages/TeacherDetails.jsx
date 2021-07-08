import React from "react";
import { Container, withStyles } from "@material-ui/core";
import { Card } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import { useStyles } from "./../Styles/TeacherDetails";
import { useLocation } from "react-router-dom";

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#e6f9ff",
    },
  },
}))(TableRow);

const TeacherDetails = () => {
  const teacherData = useLocation();
  const data = teacherData.state.data;
  const classes = useStyles();
  return (
    <div>
      <Container style={{ marginBottom: "20vh" }}>
        <Container>
          <div>
            <h1 className={classes.mainHeading}>Teacher : {data.name}</h1>
          </div>
          <div>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Divider className={classes.dividerInset1} />
                <h3 className={classes.subheading1}>TEACHER'S INFORMATION</h3>
                <Card style={{ padding: "0% 4% 4% 4%" }}>
                  <h3 style={{ textAlign: "center" }}>Demo Teacher</h3>
                  <Divider style={{ marginBottom: "15px" }} />
                  <TableContainer>
                    <Table>
                      <TableBody>
                        <StyledTableRow>
                          <TableCell>
                            <strong>Name</strong>
                          </TableCell>
                          <TableCell className={classes.data}>
                            {data.name}
                          </TableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <TableCell>
                            <strong>Email</strong>
                          </TableCell>
                          <TableCell className={classes.data}>
                            <a href= {`mailto: ${data.email}`} style={{textDecoration: "none",color: "black"}} >
                            {data.email}
                            </a>
                          </TableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <TableCell>
                            <strong>Phone</strong>
                          </TableCell>
                          <TableCell className={classes.data}>
                            <a href={`tel: ${data.primary_phone_number}`} style={{textDecoration: "none",color: "black"}}>
                            {data.primary_phone_number}
                            </a>
                          </TableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <TableCell>
                            <strong>Alt Phone No</strong>
                          </TableCell>
                          <TableCell className={classes.data}>
                            {data.alternate_phone_number == "[]"
                              ? data.alternate_phone_number
                              : "N/A"}
                          </TableCell>
                        </StyledTableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Divider className={classes.dividerInset2} />
                <h3 className={classes.subheading1}>OTHER INFORMATION</h3>
                <Card style={{ padding: "4% 4% 4% 4%" }}>
                  <Divider style={{ marginBottom: "15px" }} />
                  <TableContainer>
                    <Table aria-label="customized table">
                      <TableBody>
                        <StyledTableRow>
                          <TableCell>
                            <strong>Qualification</strong>
                          </TableCell>
                          <TableCell>N/A</TableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <TableCell>
                            <strong>Address</strong>
                          </TableCell>
                          <TableCell className={classes.data}>
                            {data.address}
                          </TableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <TableCell>
                            <strong>Country</strong>
                          </TableCell>
                          <TableCell className={classes.data}>
                            {data.country}
                          </TableCell>
                        </StyledTableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Card>
              </Grid>
            </Grid>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default TeacherDetails;
