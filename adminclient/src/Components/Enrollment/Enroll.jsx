import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box, Container } from "@material-ui/core";
import CardHeader from '@material-ui/core/CardHeader';
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';



const useStyles = makeStyles({
    root: {
      maxWidth: 800,
    },
    media: {
      height: 100,
    },
    btn:{
      marginLeft: '10px',
      paddingLeft: '125px',
      paddingRight: '125px',
      marginRight: '0px'

    },box: {
      display: "flex",
      padding: 8
    },
    spreadBox: {
      justifyContent: "space-around",
      alignItems: "center"
    }
  });

const Enroll = () => {
    const classes = useStyles();
    return (
        <Box display="flex" 
        alignItems="center"
        justifyContent="center">
            <Card className={classes.root}>
              <CardHeader title="Hello" style={{border:'1px solid rgba(0, 0, 0, 0.87)',borderRadius: '5px'}}>   
              </CardHeader>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          HERE, SHOULD BE SOME GRAPHS OR ANALYTICS DATA ABOUT ENROLLMENT.
          </Typography>  
          </CardContent>
          <Divider/>
          {/* <Box display="flex" 
        alignItems="center"
        // justifyContent="center"
        padding="5px">
            <Button
            variant='contained'
            size="medium"
            color="secondary"
            >
            ADD STUDENT(can be made from based)
            </Button>
            <Button
            variant='contained'
            size="medium"
            color="primary"
            
            >
            Add Teachers                      
            </Button>
          </Box> */}
          <Box
          component="span"
          m={1}
          className={`${classes.spreadBox} ${classes.box}`}
          >
          <Button 
            variant="contained" 
            color="secondary" 
            style={{ height: 40 }}
          >
          ADD STUDENT(can be made from based)
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            style={{ height: 40 }}
          >
            Add Teachers
          </Button>
        </Box>
        </Card>
      </Box>
    )
}
export default Enroll;
