import React, { useContext, useEffect, useRef, useState } from "react";
// import { Box, Button, Container, Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Table from "./../Table/Table";
// import MeetActions from "./../Components/Actions/MeetActions";
// import AddMeet from "./AddMeet";
import Modal from "@material-ui/core/Modal";
// import { MeetColumns, MeetData } from "./../../Helpers/MeetData";
import { AppContext } from "./../../AppContext";
import { addMeetLink, getAllMeetLinks } from "./../../action/actions";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  // makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles({
    root: {
      maxWidth: 400,
      marginTop: 200,
    },
    TextField: {
      minWidth: 320,
    },
    btn: {
      backgroundColor: "#008080",
      color: "white",
      padding: "10px 25px",
      borderRadius: ".5rem",
      fontFamily: "'Exo', sans-serif",
      "&:hover": {
        backgroundColor: "#008080",
      },
    },
  });

const ModalAddMeet = (props) => {
    const classes = useStyles()
    const { dispatch } = useContext(AppContext)
    const history = useHistory()
    const meetLink = useRef()


    const handleAddMeetLink = () => {
      var data = {
        link: meetLink.current.value
      }
      addMeetLink(dispatch, data)
      history.push("/meetLink")
      props.handleClose()
    }
    return (
        <Modal
        role="Modal"
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div >
      <Box display="flex" alignItems="center" justifyContent="center">
        <div>
          <Card className={classes.root}>
            <CardHeader
              title="Add Meet URL"
              style={{ borderRadius: "5px", color: "#008080" }}
              action={
                <Button 
                onClick={props.handleClose}
                >
                  <ClearIcon />
                </Button>
              }
            />
            <Divider />
            <CardContent>
              <Typography style={{ fontFamily: "'Exo', sans-serif" }}>
                Meet URL
              </Typography>
              <TextField
                className={classes.TextField}
                placeholder="Enter Meet Url"
                size="small"
                variant="outlined"
                inputRef={meetLink}
              />
            </CardContent>
            <Box
              m={2}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Button size="large" variant="contained" className={classes.btn}
              onClick={handleAddMeetLink}
              >
                Submit
              </Button>
            </Box>
          </Card>
        </div>
      </Box>
      </div>
      {/* <AddMeet/> */}
    
      </Modal>
    )
}
export default ModalAddMeet;
