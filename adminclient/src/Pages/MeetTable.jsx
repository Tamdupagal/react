import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Typography,
  Grid,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link, useHistory } from "react-router-dom";
import AddMeet from "./AddMeet";
import clsx from "clsx";
import Modal from "@material-ui/core/Modal";
import Divider from "@material-ui/core/Divider";
import ClearIcon from "@material-ui/icons/Clear";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, "https://meet.google.com/mpx-dhqi-jeq", 9, " "),
  createData(1, "https://meet.google.com/mpx-dhqi-jeq", 9, " "),
  createData(1, "https://meet.google.com/mpx-dhqi-jeq", 9, " "),
  createData(1, "https://meet.google.com/mpx-dhqi-jeq", 9, " "),
  createData(1, "https://meet.google.com/mpx-dhqi-jeq", 9, " "),
];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 900,
    backgroundColor: "transparent",
  },

  spreadBox: {
    justifyContent: "space-around",
    display: "flex",
    // fontSize: "1rem",
  },
  cardHeader: {
    border: "1px solid #ccc",
    padding: "1%",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    // fontSize: "1rem",
  },
  Heading: {
    fontFamily: "'Exo',sans-serif",
    border: "1px solid #ccc",
  },
  cell: {
    border: "1px solid #ccc",
    fontSize: "1rem",
    color: "#000000",
  },
  actions: {
    border: "1px solid #ccc",
    fontSize: "1rem",
    // justifyContent: "space-around",
    // display: "flex",
  },
  Btns: {
    marginLeft: "7%",
  },
}));

const MeetTable = () => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditOpen = () => {
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const body = <AddMeet handleClose={handleClose} />;
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ marginBottom: "20vh" }}
      >
        <Box>
          <Grid xs={12} lg={12}>
            <Card>
              <Box
                className={classes.cardHeader}
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <h3 style={{ fontFamily: "'Exo',sans-serif" }}>Meet Link</h3>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleOpen}
                  style={{ fontFamily: "'Exo',sans-serif" }}
                >
                  {/* {handleAddMeet()} */}
                  Add new meet Link
                </Button>
              </Box>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead style={{ color: "transparent" }}>
                    <TableRow>
                      <TableCell className={classes.Heading} align="center">
                        Link Id
                      </TableCell>
                      <TableCell className={classes.Heading} align="center">
                        Link
                      </TableCell>
                      <TableCell className={classes.Heading} align="center">
                        Bookings
                      </TableCell>
                      <TableCell className={classes.Heading} align="center">
                        Actions
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <TableCell
                          // component="th"
                          // scope="row"
                          className={classes.cell}
                          align="center"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell align="center" className={classes.cell}>
                          {row.calories}
                        </TableCell>
                        <TableCell align="center" className={classes.cell}>
                          {row.fat}
                        </TableCell>
                        <TableCell p={0} className={classes.cell}>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleEditOpen}
                            className={classes.Btns}
                          >
                            {<CreateIcon style={{ padding: "2%" }} />}
                          </Button>
                          <Button
                            variant="contained"
                            color="secondary"
                            className={classes.Btns}
                          >
                            {<DeleteIcon style={{ padding: "2%" }} />}
                          </Button>
                        </TableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Grid>
        </Box>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>
        <div>
          <Modal
            open={editOpen}
            onClose={handleEditClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>
      </Box>
    </>
  );
};
export default MeetTable;
