import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  mainHeading: {
    textAlign: "center",
    fontFamily: "'Exo', sans-serif",
    marginTop: "3%",
    marginBottom: "4%",
  },
  textField: {
    width: "90%",
    marginLeft: "5%",
    // marginTop: "-10px",
  },
  infoHeading: {
    marginLeft: "5%",
    color: "#29293d",
    fontFamily: "'Roboto', sans-serif",
    letterSpacing: "0.01rem",
    marginBottom: "0%",
    fontSize: "1rem",
  },
  toolbar: {
    marginLeft: "3%",
    marginRight: "3%",
  },
  card: {
    maxWidth: "94%",
    marginLeft: "5%",
    height: "46%",
  },
  btn: {
    marginTop: "3%",
  },
}));
