import React, { useContext, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Grid, Card, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "./../css/Login.css";
import mainLogo from "./../Images/mainLogo.png";
import { Auth } from "../action/actions";
import { AppContext } from "../AppContext";
import { useHistory } from "react-router-dom";
import profilePic from "../Images/profilePic.png"
import loginImg from "../Images/loginImg.png"

export const useStyles = makeStyles((theme) => ({
  img: {
    backgroundImage:
      "linear-gradient(to right, #303956, #365576, #387495, #3993af, #44b4c5, #60c5cf, #7ad7d9, #94e8e4, #b0eeec, #cbf4f3, #e4f9f9, #fdffff)",
    height: "98vh",
    width: "99vw",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
  textField: {
    width: "80%",
    // marginLeft: "10%",
    backgroundColor: "white",
    marginTop: "2%",
    marginBottom: "2%",
    color: "white",
    borderRadius:"5px"
    
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#29395c",
    color: "white",
    alignText: "center",
    borderRadius: "10px",
    fontWeight: "700",
        fontFamily: "'Exo', sans-serif",

  },
  mainHeading: {
        justifyContent: "center",
        textAlign: "center",
    fontFamily: "'Exo', sans-serif",
        color:"white"
        // marginTop: "3%",
        // marginBottom: "3%",
    },
}));

const LoginPage = () => {
  const classes = useStyles();
  const {state, dispatch } = useContext(AppContext)
  const email = useRef()
  const password = useRef()
  const history = useHistory()
  const handleSignIn = async () => {
    var data = {
      email: email.current.value,
      password: password.current.value
    }
    try{
      await Auth(dispatch,data)
      history.push({
        pathname: "/dashboard",
        // state: {auth: state.loginToken.token}
      })
      // console.log(state.loginToken.token)

    } catch(err) {
      console.log(err)
    }
  }
  return (
    <Box>
    <div style={{position:"absolute"}}>
        <img src={loginImg} style={{ width: "100%", height: "auto",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed" }}></img>
          </div>
    <div >
      <Box display="flex"
        alignItems="center"
        p={1}
        m={1}
          justifyContent="center"
        style={{position:"relative"}}>
        <Grid container xs={12} lg={7} style={{marginTop:"20%"}}>
            <Grid xs={12} lg={6} >
              <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" style={{marginTop:"25%"}}>
                <Box display="flex" justifyContent="center">
                <img src={mainLogo} style={{height:"30%",width:"30%"}}></img>
              </Box>
              <Box>
                <p style={{color:"white",textAlign:"center",fontFamily: "'Roboto', sans-serif"}}>Enter your details and start Journey with us</p>
              </Box>
              </Box>
          </Grid>
          <Grid xs={12} lg={6}>
            <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" style={{borderLeft:"4px solid white"}}>
              <Card style={{
              height: "25%", width:"25%",borderRadius:"50%"}}>
                <img src={profilePic} style={{ height: "100%", width: "100%" }}></img>
              </Card>
              <h1 className={classes.mainHeading}>Sign In</h1>
                <TextField
                   id="filled-password-input"
                   label="Email"
                   type="email"
                   autoComplete="current-password"
                   variant="filled"
                  className={classes.textField}
                  inputRef={email}

                />
                <TextField
                  id="filled-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="filled"
                  className={classes.textField}
                  inputRef={password}

                />
              <br />
              <Button variant="contained" className={classes.btn} onClick={handleSignIn}
>SIGN IN</Button>

            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
    
      </Box>
  );
};

export default LoginPage;
