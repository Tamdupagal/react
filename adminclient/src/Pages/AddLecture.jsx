import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
import {useHistory} from "react-router-dom"
const AddLecture = () => {
    const history = useHistory();
    const handleAddNewLecture = () =>{
        history.push("/lectures/create")
    }
    return (
            <Container >
                    <Grid container 
                    alignItems='center'
                    justify='center'
                    spacing={24}>
                        <Grid item xs={12}  md={6} lg={8}>
                            <Card>
                                <CardHeader title="Lectures"
                                action={
                                    <Button variant="contained" color="secondary" onClick={handleAddNewLecture}>
                                        Add New Lecture
                                    </Button>
                                }
                                />
                                <Divider/>
                                <CardContent>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">Time</TableCell>
                                                <TableCell align="center">Meet Link</TableCell>
                                                <TableCell align="center">Status</TableCell>
                                                <TableCell align="center">Actions</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
            </Container>
    )
}
export default AddLecture
