import React, { useContext, useEffect, useState } from "react";
// import { Box, Button, Container, Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Table from "../Components/Table/Table";
import MeetActions from "./../Components/Actions/MeetActions";
import AddMeet from "./AddMeet";
import Modal from "@material-ui/core/Modal";
import { MeetColumns, MeetData } from "../Helpers/MeetData";
import { AppContext } from "../AppContext";
import { getAllMeetLinks } from "../action/actions";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  // makeStyles,
  TextField,
  Typography,
  Container,
  Grid
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ClearIcon from "@material-ui/icons/Clear";
import ModalAddMeet from "../Components/Modal/ModalAddMeet";
import ModalEditMeet from "../Components/Modal/ModalEditMeet";
import { useLocation, useParams } from "react-router-dom";


const useStyles = makeStyles({
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    fontFamily: "KoHo, sans-serif",
  },
  container: {
    border: "1px solid #e6e6ff",
    borderBottom: "white",
    backgroundColor: "white",
    padding: "1%",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
});

export default function MeetLink() {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams()
  const {state, dispatch} = useContext(AppContext)
  const [open, setOpen] =useState(false);
  const [editOpen, setEditOpen] = useState(id?true:false);
  const location = useLocation()
  const data = id?location.state.data:""
  useEffect(() => {
    getAllMeetLinks(dispatch)
  }, [])
  const handleClose = () => {
    setOpen(false);
    history.push("/meetLink")
  };
  const handleOpen = () => {
    console.log("called")
    setOpen(true);
    history.push("/add-meet")
  };
  const handleEditClose = () => {
    setEditOpen(false);
    history.push("/meetLink")
  };
  const handleEditOpen= (data) => {
    console.log("called")
    console.log(data._id)
    setEditOpen(true);
    history.push({
      pathname: `/edit-meet/${data._id}`,
      state: {data: data}
    })
  };

  // const body = <AddMeet />;
  // const columns =  [
  //   { title: "Link", field: "link" },
  //   { title: "Link Id", field: "_id" },
  //   { title: "Bookings", field: "Bookings" },
  //   {
  //     title: "Actions",
  //     field: "name",
  //     render: (row) => (
  //       <div>
  //         <MeetActions handleEditClose={handleEditClose}  handleEditOpen={handleEditOpen} editOpen={editOpen} setEditOpen={setEditOpen}/>
  //       </div> 
  //     ),
  //   },
  // ];

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        style={{ marginBottom: "20vh" }}
      >
        <Grid item xs={12} lg={10}>
          <Container>
            <Container className={classes.container}>
              <Box display="flex" justifyContent="space-between">
                <Typography className={classes.title}> Meet Link </Typography>

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleOpen}
                  style={{ fontFamily: "'Exo', sans-serif" }}
                 >
                  ADD NEW MEET LINK
                </Button>
              <ModalAddMeet handleClose={handleClose} open={open} />
              <ModalEditMeet handleEditClose={handleEditClose} editOpen={editOpen} data={data}/>

              </Box>
            </Container>
          </Container>

          <Container>
            <Table data={MeetData(state)} column={MeetColumns(handleEditClose, handleEditOpen)} />
          </Container>
        </Grid>
      </Box>
    </div>
  );
};

// export default MeetLink;
