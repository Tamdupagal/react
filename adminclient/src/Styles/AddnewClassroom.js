import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  mainHeading: {
    textAlign: "center",
    fontFamily: "'Exo', sans-serif",
    marginTop: "3%",
    marginBottom: "3%",
  },
  textField: {
    width: "100%",
  },
  subheading1: {
    letterSpacing: "0.1rem",
    fontFamily: "KoHo, sans-serif",
  },
  infoHeading: {
    marginLeft: "4%",
    marginBottom: "1px",
    fontSize: "0.9rem",
    color: "#29293d",
    fontFamily: "'Roboto', sans-serif",
    letterSpacing: "0.01rem",
  },
  submitBtn: {
    paddingTop: "5%",
    paddingBottom: "5%",
    fontWeight: "700",
    textAlign: "center",
    margin: "3%",
  },
  // container: {
  //   alignItems: "center",
  //   marginLeft: "18%",
  // },
  formControl: {
    margin: theme.spacing(1),
    width: "400",
    minWidth: "90%",
    // maxWidth: 500,
    marginLeft: "5%",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));
