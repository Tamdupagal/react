import React from 'react'
import { Box, Button, Card,CardContent,CardHeader, makeStyles, TextField, Typography } from '@material-ui/core';
import Divider from "@material-ui/core/Divider";
import ClearIcon from '@material-ui/icons/Clear';
const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        marginTop: 200
      },
       TextField:{
           minWidth: 320,
       },
       btn:{
           backgroundColor: "#008080",
           color: "white",
           padding: "10px 25px",
           borderRadius: ".5rem",
           "&:hover": {
            backgroundColor: '#008080'
          }
       } 
})

const AddMeet = (props) => {
    const classes = useStyles();
    return (
        <>
            <Box display="flex" 
            alignItems="center"
            justifyContent="center"
            >
                <div >
                    <Card className={classes.root}>
                        <CardHeader title="Add Meet URL" style={{borderRadius:'5px',color: "#008080"}} action={
                            <Button onClick={props.handleClose}>
                                <ClearIcon/>
                            </Button>
                        }/>
                        <Divider/>
                        <CardContent>
                            <Typography>
                                Meet URL
                            </Typography>
                            <TextField className={classes.TextField}
                            placeholder="Enter Meet Url"
                            size="small"
                            variant="outlined"
                            />
                        </CardContent>
                        <Box m={2} display="flex" alignItems="center" justifyContent="center"> 
                            <Button size="large" variant="contained" className={classes.btn} >
                                Submit
                            </Button>
                        </Box>
                    </Card>
                </div>
            </Box>
        </>
    )
}
export default AddMeet;

