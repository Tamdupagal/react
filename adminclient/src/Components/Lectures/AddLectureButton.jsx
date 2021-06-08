import React from 'react'
// import AddLecture from '../../Pages/AddLecture'
import {useStyles} from "../../Styles/AddNewLecture"
import { Button, Card, Container, Grid, TextField } from '@material-ui/core';


const AddLectureButton = () => {
    const classes = useStyles()

    return (
        <div className={classes.submitBtn}>
            <Button variant="contained" color="secondary">
                ADD LECTURE
            </Button>
        </div>
    )
}
export default AddLectureButton;
