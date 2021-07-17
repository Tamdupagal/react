import React,{useRef,useContext} from "react";
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
  mainLogo: {
    height: "30%",
    width: "30%"
  },
  para: {
    color: "white",
    textAlign: "center",
    fontFamily: "'Roboto', sans-serif"
  },
  card: {
    height: "25%",
    width: "25%",
    borderRadius: "50%"
  },
  profilePic: {
    height:"100%",
    width:"100%"
  }
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
    <div >
     <Box>
    <div style={{position:"absolute"}}>
          <div>
            <img src={loginImg} className="image"></img>
          </div>
        </div>
      <Box display="flex"
        alignItems="center"
        p={1}
        m={1}
          justifyContent="center"
        style={{position:"relative"}}>
        <Grid container xs={12} lg={7} style={{marginTop:"10%"}}>
            <Grid xs={12} lg={6} >
              <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" style={{marginTop:"25%"}}>
                <Box display="flex" justifyContent="center">
                <img src={mainLogo} className={classes.mainLogo}></img>
              </Box>
              <Box>
                <p className={classes.para}>Enter your details and start Journey with us</p>
              </Box>
              </Box>
          </Grid>
          <Grid xs={12} lg={6}>
            <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" style={{borderLeft:"4px solid white"}}>
              <Card className={classes.card}>
                <img src={profilePic} className={classes.profilePic}></img>
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
      </Box>
    </div> 
  );
};

export default LoginPage;