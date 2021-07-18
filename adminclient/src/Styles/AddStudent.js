import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  mainHeading: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "'Exo', sans-serif",
    marginTop: "3%",
    marginBottom: "3%",
  },
  heading: {
    alignItems: "center",
    justifyContent: "center",
  },
  subheading1: {
    letterSpacing: "0.1rem",
    fontFamily: "KoHo, sans-serif",
  },
  dividerInset: {
    margin: `10px 0 0 ${theme.spacing(27)}px`,
    marginBottom: "-29px",
  },
  dividerInset0: {
    margin: `9px 0 0 ${theme.spacing(32)}px`,
    marginBottom: "-29px",
  },
  dividerInset1: {
    margin: `10px 0 0 ${theme.spacing(30)}px`,
    marginBottom: "-28px",
  },
  dividerInset2: {
    margin: `10px 0 0 ${theme.spacing(28)}px`,
    marginBottom: "-29px",
  },
  chooseFile: {
    padding: "10%",
    marginTop: "2%",
  },
  submitFile: {
    marginTop: "2%",
    // marginLeft: 12,
  },
  paper: {
    padding: theme.spacing(2),
    color: "#3d3d5c",
    letterSpacing: "0",
    padding: "1%",
    paddingTop: "1%",
    paddingBottom: "5%",
  },
  submitBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: "4%",
  },
  textField: {
    width: "90%",
    marginLeft: "5%",
  },
  infoHeading: {
    marginLeft: "5%",
    color: "#29293d",
    fontFamily: "'Roboto', sans-serif",
    letterSpacing: "0.01rem",
    fontSize: "1rem",
    marginBottom: "0%",
  },
  infoHeading1: {
    marginLeft: "2%",
    color: "#29293d",
    fontFamily: "'Roboto', sans-serif",
    letterSpacing: "0.01rem",
    fontSize: "1rem",
    marginBottom: "0%",
  },
  excelFile: {
    // marginLeft: "2%",
    width: "100%",
  },
}));
