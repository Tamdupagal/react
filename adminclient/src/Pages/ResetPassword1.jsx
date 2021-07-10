import React from "react";
import { Container,Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const ResetPassword1 = () => {
    const classes=useStyles()
    return(
        <div>
            <Container style={{marginBottom:"20vh"}}>
                <Box display="flex" justifyContent="center">

                    <Grid item xs={12} lg={8}>
<Box display="flex" justifyContent="center" textAlign="center">
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <EmailRoundedIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
      </Box>
    
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default ResetPassword1;

