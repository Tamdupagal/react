import { Card, Container, Grid } from '@material-ui/core';
import React from 'react'
import { useParams } from 'react-router-dom';
import LectureInput from './../Components/Lectures/LectureInput';
import LectureInputEdit from './../Components/Lectures/LectureInputEdit';
import {useStyles} from "./../Styles/AddNewLecture"

const AddNewLecture = () => {
    const classes = useStyles();
    const {id} = useParams()
    return (
        <Container>
            <div>
            <h1 className={classes.mainHeading}>Add New Lecture</h1>
            </div>
            <Grid container alignItems='center' justify='center'>
                <Grid item xs={12} lg={4}>
                    <Card className={classes.main}>
                    { id?
                    <LectureInputEdit/>:
                    <LectureInput/>
                    }
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}
export default AddNewLecture;
