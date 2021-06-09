import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
    mainHeading: {
      textAlign: "center",
      fontFamily: "'Exo', sans-serif",
      marginTop: "5%",
      marginBottom: "5%",
    },
    textField: {
      width: "90%",
      marginLeft: "5%",
    },
    infoHeading: {
      marginLeft: "5%",
      marginBottom: "1px",
      fontSize: "0.9rem",
      color: "#29293d",
      fontFamily: "'Roboto', sans-serif",
      letterSpacing: "0.01rem",
    },
    submitBtn: {
      fontWeight: "bold",
      textAlign: "center",
      marginTop: "2%",
      padding: "2%",
    },
    main: {
      // marginLeft: "18%",
    },
}));
