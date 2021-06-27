import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  mainHeading: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "'Exo', sans-serif",
    marginTop: "3%",
    marginBottom: "3%",
  },
  infoHeading: {
    marginLeft: "5%",
    marginBottom: "3%",
    color: "#29293d",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "1rem",
    letterSpacing: "0.01rem",
  },
  textField: {
    marginLeft: "5%",
    // marginLeft: theme.spacing(4),
    // marginRight: theme.spacing(1),
    width: "90%",
  },
  main: {
    padding: theme.spacing(3, 3),
    // display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // textAlign: "center",        // marginRight: theme.spacing(0),
  },
  submitBtn: {
    textAlign: "center",
    margin: "3%",
    marginTop: "8%",
  },
}));
