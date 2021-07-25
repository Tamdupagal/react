import React, { useState }from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import Modal from "@material-ui/core/Modal";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import ResetPassword2 from "./ResetPassword2";
import OtpSuccessfullySent from "./OtpSuccessfullySent";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    minWidth: 500,
    marginTop: 50,
  },
  textField: {
    width: '60ch',
  },
  Header: {
    fontFamily: "'Exo',sans-serif",
    marginLeft: "2%",
    color:"black"
  }
}));

const ResetPassword1 = (props) => {
  const classes = useStyles()
  const history = useHistory();
  
  
  const [values, setValues] = React.useState({
    password: '',
  });
 

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handlePinVerification = () => {
    history.push("/otp-sent")
  }
  return (
    <Modal
        role="Modal"
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      
      >
        <div >
      <Box display="flex" alignItems="center" justifyContent="center" >
        <div>
          <Card className={classes.root}>
            <Box
              display="flex"
              justifyContent="space-between"
              style={{ borderRadius: "5px", color: "#008080" }}
              >
                <h3 className={classes.Header}>Reset password</h3>
                <Button 
                onClick={props.handleAdminClose || props.handleCrmClose}
                >
                  <ClearIcon />
                </Button>
            </Box>
            <Divider />
            <CardContent>
              <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Enter Your Email</InputLabel>
          <OutlinedInput
            type="email"
            startAdornment={
              <InputAdornment position="start">
                <EmailRoundedIcon/>
              </InputAdornment>
            }
            labelWidth={120}
          />
        </FormControl>
            </CardContent>
            
                <Box display="flex" justifyContent="flex-end" m={1} p={1}>
              <Button size="large" variant="contained" color="secondary"
                  style={{ margin: "1%" }}
                  onClick={handlePinVerification}
              >
                Submit
              </Button>
              <Button size="large" variant="contained" onClick={props.handleCrmClose || props.handleAdminClose} style={{margin:"1%"}}>Cancel</Button>
              </Box>
            
          </Card>
        </div>
        </Box>
        
      </div>
      </Modal>
    )
};

export default ResetPassword1;

