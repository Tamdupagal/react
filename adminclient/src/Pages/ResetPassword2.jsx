import React, { useState }from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from "@material-ui/core/Modal";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
    Divider,
    Box,
  Grid,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import PinInput from "react-pin-input";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
 Header: {
    fontFamily: "'Exo',sans-serif",
    marginLeft: "2%",
    color:"black"
  }
}));

const ResetPassword2 = (props) => {
    const classes = useStyles()
    const history = useHistory()
    

  const handleClose = () => {
    history.push("./operations")
  };
    return (
        <div style={{marginBottom:"18vh"}}>
            <Box display="flex" justifyContent="center">
                <Grid xs={12} lg={6}>
            <Card className={classes.root}>
                
            <Box
              display="flex"
              justifyContent="space-between"
              style={{ borderRadius: "5px", color: "#008080" }}
              >
                <h3 className={classes.Header}>Verification</h3>
               
            </Box>
            <Divider />
            <CardContent style={{textAlign:"center"}}>
                    <h3>Enter a pin sent on your Email</h3>
                    <PinInput 
  length={4} 
  initialValue=""
//   secret 
  type="numeric" 
  inputMode="number"
  style={{padding: '10px'}}  
  inputStyle={{borderColor: 'black'}}
  inputFocusStyle={{borderColor: 'blue'}}
//   autoSelect={true}
//   regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
/>
            </CardContent>
            
                <Box display="flex" justifyContent="flex-end" m={1} p={1}>
              <Button size="large" variant="contained" color="secondary"
              style={{margin:"1%"}}
              >
                Submit
              </Button>
              <Button size="large" variant="contained" onClick={handleClose} style={{margin:"1%"}}>Cancel</Button>
              </Box>
            
                    </Card>
                    </Grid>
                </Box>
        </div>
    )
}
export default ResetPassword2;
