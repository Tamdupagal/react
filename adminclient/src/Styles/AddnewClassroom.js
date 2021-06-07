import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
    mainHeading: {
      textAlign: "center",
      fontFamily: "'Exo', sans-serif",
      marginTop: "3%",
      marginBottom: "3%",
    },
    textField: {
      width: "90%",
      marginLeft: "5%",
    },
    subheading1: {
      letterSpacing: "0.1rem",
      fontFamily: "KoHo, sans-serif",
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
      fontWeight: "700",
      textAlign: "center",
      margin: "3%",
    },
    container: {
      alignItems: "center",
      marginLeft: "18%",
    },
  }));
  