import React, { useContext, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Grid, Card, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "./../css/Login.css";
import Loginpage1 from "./../Images/Loginpage1.png";
import MainLogo2 from "./../Images/MainLogo2.png";
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
    marginLeft: "10%",
    backgroundColor: "white",
    marginTop: "2%",
    marginBottom: "2%",
    color:"white"
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    color: "white",
    alignText: "center",
    margin: "5%",
    borderRadius: "25px",
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
    // <div className={classes.img}>
    //   <Box display="flex" alignItems="center" justifyContent="center">
    //     <Grid item xs={12} lg={6}>
    //       <Card
    //         style={{
    //           marginTop: "10%",
    //           boxShadow: "0px 4px #4d4d4d",
    //         }}
    //       >
    //         <Grid container>
    //           <Grid
    //             item
    //             xs={12}
    //             lg={6}
    //             style={{
    //               padding: "5%",
    //             }}
    //           >
    //             <h1 style={{ display: "flex", justifyContent: "center" }}>
    //               Sign In
    //             </h1>
    //             <form className={classes.root} noValidate autoComplete="off">
    //               <TextField
    //                 id="outlined-basic"
    //                 type="email"
    //                 label="Email"
    //                 variant="outlined"
    //                 size="small"
    //                 className={classes.textField}
    //                 inputRef={email}
                
    //               />
    //             </form>
    //             <form className={classes.root} noValidate autoComplete="off">
    //               <TextField
    //                 id="outlined-basic"
    //                 type="password"
    //                 label="Password"
    //                 variant="outlined"
    //                 size="small"
    //                 className={classes.textField}
    //                 inputRef={password}
    //               />
    //             </form>
    //             <a
    //               href=""
    //               style={{
    //                 cursor: "pointer",
    //                 display: "flex",
    //                 justifyContent: "center",
    //                 textAlign: "center",
    //                 margin: "5%",
    //                 textDecoration: "none",
    //                 color: "#ccc",
    //               }}
    //             >
    //               Forgot Password?
    //             </a>
    //             <div style={{ display: "flex", justifyContent: "center" }}>
    //               <Button variant="contained" className={classes.btn}
    //               onClick={handleSignIn}
    //               >
    //                 Sign in
    //               </Button>
    //             </div>
    //           </Grid>
    //           <Grid item xs={12} lg={6}>
    //             <img
    //               src={Loginpage1}
    //               style={{
    //                 height: "100%",
    //                 width: "100%",
    //                 position: "relative",
    //                 left: "0px",
    //                 top: "0px",
    //               }}
    //             ></img>
    //             <img
    //               src={MainLogo2}
    //               style={{
    //                 height: "25%",
    //                 width: "15%",
    //                 position: "absolute",
    //                 left: "750px",
    //                 top: "150px",
    //               }}
    //             ></img>
    //             <h1
    //               style={{
    //                 position: "absolute",
    //                 left: "760px",
    //                 top: "250px",
    //               }}
    //             >
    //               Digital Aided
    //             </h1>
    //             <h1
    //               style={{
    //                 position: "absolute",
    //                 left: "800px",
    //                 top: "300px",
    //               }}
    //             >
    //               School
    //             </h1>
    //             <p
    //               style={{
    //                 position: "absolute",
    //                 left: "745px",
    //                 top: "350px",
    //                 textAlign: "center",
    //               }}
    //             >
    //               Enter your personal details and start <br /> journey with us
    //             </p>
    //           </Grid>
    //         </Grid>
    //       </Card>
    //     </Grid>
    //   </Box>
    // </div>
    <Box>
    <div style={{position:"relative"}}>
        <img src={loginImg} style={{ width: "100%", height: "100%" }}></img>
          </div>
    <div >
      <Box display="flex"
        alignItems="center"
        p={1}
        m={1}
      justifyContent="center">
        <Grid container xs={12} lg={7} style={{border:"1px solid black"}}>
          <Grid xs={12} lg={6} >Hello</Grid>
          <Grid xs={12} lg={6}>
            <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
              <Card style={{
              height: "25%", width:"25%",borderRadius:"50%"}}>
                <img src={profilePic} style={{ height: "100%", width: "100%" }}></img>
              </Card>
              <h1>SIGN IN</h1>
<TextField
          id="outlined-password-input"
          label="Email"
          type="Email"
          autoComplete="current-password"
                variant="outlined"
                className={classes.textField}
                color="light"
              />
              <TextField
          id="outlined-password-input"
          label="password"
          type="password"
          autoComplete="current-password"
                variant="outlined"
                className={classes.textField}
              />
              <br />
              <Button variant="contained" >SIGN IN</Button>

            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
    
      </Box>
  );
};

export default LoginPage;
