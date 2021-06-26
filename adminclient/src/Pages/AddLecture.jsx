import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React, { useContext, useEffect } from 'react'
import {useHistory, useParams} from "react-router-dom"
import { AppContext } from '../AppContext'
import  Table  from "./../Components/Table/Table"
import CircularProgress from '@material-ui/core/CircularProgress';
import { LectureData, LectureColumn } from "../Helpers/LectureData";
import { getAllLectures } from '../action/actions'


const AddLecture = () => {
    const {state, dispatch} = useContext(AppContext)
    const history = useHistory();
    const { id } = useParams()
    const handleAddNewLecture = () =>{
        history.push("/lectures/create")
    }
    const LECTURE_DATA = state?.lectureData
    // let cid = state.classroomEditData.data._id
    useEffect(() => {
        console.log(id)
        getAllLectures(dispatch,id)
    }, [])
    return (
            <Container >
                    <Grid container 
                    alignItems='center'
                    justify='center'
                >
                        <Grid item xs={12}  md={6} lg={8}>
                            <Card>
                                <CardHeader title="Lectures"
                                action={
                                    <Button variant="contained" color="secondary" 
                                    onClick={handleAddNewLecture}
                                    >
                                        Add New Lecture
                                    </Button>
                                }
                                />
                                <Divider/>
                                <CardContent>

                                {
                                 LECTURE_DATA.isLoading ? <CircularProgress/> : LECTURE_DATA.anyError ?
                                    <div>
                                        Ops! Data could not be loaded, try again .
                                    </div>
                                    :
                                    <Table data={LectureData(state)} column={LectureColumn(true)} />
                                }
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
            </Container>
    )
}
export default AddLecture
