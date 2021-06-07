import { Card, Container, Grid } from '@material-ui/core';
import React from 'react'
import LectureInput from './../Components/Lectures/LectureInput';
import AddLectureButton from './../Components/Lectures/AddLectureButton';
import {useStyles} from "./../Styles/AddNewLecture"

const AddNewLecture = () => {
    const classes = useStyles();
    // const date = ""

    return (
        <Container>
            <div>
            <h1 className={classes.mainHeading}>Add New Lecture</h1>
            </div>
            <Grid container alignItems='center' justify='center'>
                <Grid item xs={12} lg={4}>
                    <Card className={classes.main}>
                    <LectureInput/>
                    <AddLectureButton/>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}
export default AddNewLecture;
