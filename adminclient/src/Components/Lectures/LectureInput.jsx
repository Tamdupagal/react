import React, { useRef, useState, useContext } from 'react'
import { Button, Card, Container, Grid, TextField } from '@material-ui/core';
import {useStyles} from "../../Styles/AddNewLecture"
import { addLecture } from '../../action/actions';
import { AppContext } from "./../../AppContext"


export const LectureInput = () => {
    const classes = useStyles()
    const time = useRef()
    const date = useRef()
    const { state, dispatch } = useContext(AppContext)

    // const date ="2017-05-24"

    const handleAddLecture = () => {
        console.log(time.current.value)
        console.log(date.current.value)
        var data ={
            classroom_id : "60cc8714f922064fdb5607b9",
            course_id: "68912345690",
            date_and_time : "2017-05-24T10:30",
            status : "last seen: 1 minute ago"
        }
        addLecture(dispatch,data,"60cc8714f922064fdb5607b9")
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
                />
            </form>
            <div className={classes.submitBtn}>
            <Button variant="contained" color="secondary"
            onClick={handleAddLecture}
            >
                ADD LECTURE
            </Button>
        </div>
        </div>
    )
}
export default LectureInput;