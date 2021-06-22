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
    minWidth: 700,
    backgroundColor: "transparent",
  },
  box: {
    display: "flex",
    padding: 8,
  },
  spreadBox: {
    justifyContent: "space-around",
    alignItems: "center",
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
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box>
          <Grid xs={12} lg={12}>
            <Card>
              <CardHeader
                title="Meet Link"
                action={
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleOpen}
                  >
                    {/* {handleAddMeet()} */}
                    Add new meet Link
                  </Button>
                }
                style={{
                  border: "1px solid #ccc8c8",
                  borderTopLeftRadius: "3px",
                  borderTopRightRadius: "3px",
                }}
              ></CardHeader>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead style={{ color: "transparent" }}>
                    <TableRow>
                      <TableCell>Link Id</TableCell>
                      <TableCell align="center">Link</TableCell>
                      <TableCell align="center">Bookings</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <TableCell align="center">{row.calories}</TableCell>
                        <TableCell align="center">{row.fat}</TableCell>
                        <TableCell
                          component="span"
                          p={0}
                          className={`${classes.spreadBox} ${classes.box}`}
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleEditOpen}
                          >
                            {<CreateIcon style={{ padding: "0%" }} />}
                          </Button>
                          <Button variant="contained" color="secondary">
                            {<DeleteIcon style={{ padding: "0%" }} />}
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
