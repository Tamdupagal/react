import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles({
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
