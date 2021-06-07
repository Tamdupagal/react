import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React from 'react'

const AddLecture = () => {
    return (
        <div>
            <Box display="flex"alignItems="center" justifyContent= "center">
            {/* <Box display="flex"alignItems="center" justifyContent= "center"> */}
            <Container >
                <div>
                    <Grid container 
                    alignItems='center'
                    justify='center'
                    spacing={24}>
                        <Grid item xs={12}  md={6} lg={8}>
                            <Card>
                                <CardHeader title="Lectures"
                                action={
                                    <Button variant="contained" color="secondary" >
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
                </div>
            </Container>
            </Box>
            {/* </Box> */}
        </div>
    )
}
export default AddLecture
