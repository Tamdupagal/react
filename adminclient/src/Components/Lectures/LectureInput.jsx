import React, { useRef, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { useStyles } from "../../Styles/AddNewLecture";
import { addLecture } from "../../action/actions";
import { AppContext } from "./../../AppContext";
import { useHistory, useParams } from "react-router-dom";

export const LectureInput = () => {
  const classes = useStyles();
  const time = useRef();
  const date = useRef();
  const meetLink = useRef();
  const history = useHistory()
  const { dispatch } = useContext(AppContext);
  const { cid } = useParams()

  const handleAddLecture = () => {
    console.log(time.current.value);
    console.log(date.current.value);
    console.log(cid);
    var data = {
      classroom_id: cid,
      course_id: "507f1f77bcf86cd799439012",
      date_and_time: "2017-05-24T10:30",
      status: "ongoing",
      crm_meeting_link: meetLink.current.value,
    };
    console.log(data);
    addLecture(dispatch, data, cid);
    history.push(`/${cid}/lectures`)
  };
  return (
    <div>
      <h5 className={classes.infoHeading}>Lecture Date:</h5>
      <form className={classes.container} noValidate>
        <TextField
          variant="outlined"
          id="datetime-local"
          size="small"
          type="date"
          // defaultValue={date}
          inputRef={date}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputRef={date}
        />
      </form>
      <h5 className={classes.infoHeading}>Lecture Time:</h5>
      <form noValidate>
        <TextField
          variant="outlined"
          type="time"
          size="small"
          className={classes.textField}
          inputRef={time}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300,
          }}
          inputRef={time}
        />
      </form>
      <h5 className={classes.infoHeading}>Meet Link:</h5>
      <form>
        {" "}
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{ marginLeft: "5%", width: "90%" }}
          inputRef={meetLink}
        />
      </form>
      <div className={classes.submitBtn}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleAddLecture}
          style={{ fontFamily: "'Exo', sans-serif" }}
        >
          ADD LECTURE
        </Button>
      </div>
    </div>
  );
};
export default LectureInput;
