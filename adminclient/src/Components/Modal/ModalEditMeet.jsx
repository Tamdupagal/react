import React, { useContext, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { AppContext } from "./../../AppContext";
import { editMeetLink } from "./../../action/actions";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ClearIcon from "@material-ui/icons/Clear";
import { useParams } from "react-router-dom";

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

const ModalEditMeet = (props) => {
    const classes = useStyles()
    const { dispatch } = useContext(AppContext)
    const meetLink = useRef()
    const {id} = useParams()
    

    const handleEditMeetLink = () => {
        var data = {
            link : meetLink.current.value
        }
        editMeetLink(dispatch,data,id)
        props.handleEditClose()
    }

    return (
        <Modal
        role="Modal"
        open={props.editOpen}
        onClose={props.handleEditClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div >
      <Box display="flex" alignItems="center" justifyContent="center">
        <div>
          <Card className={classes.root}>
            <CardHeader
              title="Edit Meet URL"
              style={{ borderRadius: "5px", color: "#008080" }}
              action={
                <Button 
                onClick={props.handleEditClose}
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
                placeholder="Edit Meet Url"
                size="small"
                variant="outlined"
                defaultValue={props.data.link}
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
              onClick={handleEditMeetLink}
              >
                Submit
              </Button>
            </Box>
          </Card>
        </div>
      </Box>
      </div>
    
      </Modal>
    )
}
export default ModalEditMeet;
