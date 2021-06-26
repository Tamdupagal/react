import React, { useRef, useState, useContext } from 'react'
import { Button, Card, Container, Grid, TextField } from '@material-ui/core';
import {useStyles} from "../../Styles/AddNewLecture"
import { addLecture } from '../../action/actions';
import { AppContext } from "./../../AppContext"


export const LectureInputEdit = () => {
    const classes = useStyles()
    const time = useRef()
    const date = useRef()
    const meetLink = useRef();
    const { state, dispatch } = useContext(AppContext)
    let cid = state.classroomEditData.data._id
    let Date

    // const date ="2017-05-24"

    const handleAddLecture = () => {
        console.log(time.current.value)
        console.log(date.current.value)
        console.log(cid)
        // Date = new Date(date)
        // console.log(Date)
        var data ={
            classroom_id : cid,
            course_id: "68912345690",
            date_and_time : "2017-05-24T10:30",
            status : "ongoing",
            crm_meeting_link: "https://meet.google.com/smv-sxmm-yct"
        }
        console.log(data)
        addLecture(dispatch,data,cid)
    }
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
            <h5 className={classes.infoHeading}>Lecture Time</h5>
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
            <Button variant="contained" color="secondary"
            onClick={handleAddLecture}
            >
                Edit LECTURE
            </Button>
        </div>
        </div>
    )
}
export default LectureInputEdit;