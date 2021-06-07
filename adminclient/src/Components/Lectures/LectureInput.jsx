import React from 'react'
import { Button, Card, Container, Grid, TextField } from '@material-ui/core';
import {useStyles} from "../../Styles/AddNewLecture"

export const LectureInput = () => {
    const classes = useStyles()
    // const date ="2017-05-24"
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
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300,
                    }}
                />
            </form>
        </div>
    )
}
export default LectureInput;