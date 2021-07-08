import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  // main: {
  //   position: "relative",
  //   marginLeft: "25%",
  // },
  mainHeading: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "'Exo', sans-serif",
    marginTop: "3%",
    marginBottom: "3%",
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
  card: {
    width: "100%",
  },
  submitBtn: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "2%",
    padding: "2%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "90%",
    marginLeft: "5%",
    // maxWidth: 300,
  },
}));
