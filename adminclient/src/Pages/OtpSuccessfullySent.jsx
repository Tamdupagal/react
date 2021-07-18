import React from "react";
import { useHistory } from "react-router";
import otp from "../Images/otp.gif";
import { Container, Box, Grid, Button } from "@material-ui/core";
import ResetPassword2 from "./ResetPassword2";

const OtpSuccessfullySent = () => {
const history = useHistory()
    const handleEnterOTP = () => {
        history.push("/reset-password")
    }
    return (
        <div>
            <Box display="flex" justifyContent="center">
                <Grid item xs={12} lg={7}>
                    <h3 style={{position:"relative",textAlign:"center"}}>OTP has been sent to your Email I'd</h3>
                    <img src={otp} style={{ height: "80%", width: "100%" }}></img>
                    <Box display="flex" justifyContent="center">
                        <Button variant="contained" color="secondary" onClick={handleEnterOTP}>OK</Button>
                    </Box>
                </Grid>
           </Box>
        </div>
    )
}

export default OtpSuccessfullySent