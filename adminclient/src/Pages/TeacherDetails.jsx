import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, withStyles } from "@material-ui/core";
import { Button, Card, CardHeader } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import { useStyles } from "./../Styles/TeacherDetails";
import { AppContext } from "../AppContext";

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const TeacherDetails = () => {
  const { state } = useContext(AppContext);
  let data = state.teacherEditData.data;
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
                          <TableCell>{data.name}</TableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <TableCell>
                            <strong>Email</strong>
                          </TableCell>
                          <TableCell>{data.email}</TableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <TableCell>
                            <strong>Phone</strong>
                          </TableCell>
                          <TableCell>{data.primary_phone_number}</TableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <TableCell>
                            <strong>Alt Phone No</strong>
                          </TableCell>
                          <TableCell>
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
                          <TableCell>{data.address}</TableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <TableCell>
                            <strong>Country</strong>
                          </TableCell>
                          <TableCell>{data.country}</TableCell>
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
