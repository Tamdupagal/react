import React from 'react'
import { Box, Button, Card,CardContent,CardHeader, makeStyles, TextField, Typography } from '@material-ui/core';
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
    root: {
        minWidth: 400,
        // marginLeft: 200
      },
       TextField:{
           minWidth: 400,
           marginTop: '20px'
       },
       btn:{
           backgroundColor: "#008080",
           color: "white",
           padding: "12px 28px",
           borderRadius: ".5rem",
           "&:hover": {
            backgroundColor: '#008080'
          }
        //    height:"10px"
       } 
})

const AddMeet = () => {
    const classes = useStyles();
    return (
        <>
            <Box display="flex" 
            alignItems="center"
            justifyContent="center"
            >
                <div >
                    <Card className={classes.root}>
                        <CardHeader title="Add Meet URL" style={{borderRadius:'5px',color: "#008080"}}/>
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
                        <Box m={4} display="flex" alignItems="center" justifyContent="center"> 
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

