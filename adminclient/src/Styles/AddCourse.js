import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  mainHeading: {
    fontFamily: "'Exo', sans-serif",
    marginTop: "3%",
    marginBottom: "3%",
  },
  subheading1: {
    letterSpacing: "0.2rem",
    fontFamily: "KoHo, sans-serif",
  },
  subheading2: {
    letterSpacing: "0.2rem",
    fontFamily: "KoHo, sans-serif",
    marginLeft: "4%",
    fontSize: "0.9rem",
    color: "#0a0a0f",
  },
  subheading3: {
    letterSpacing: "0.2rem",
    fontFamily: "KoHo, sans-serif",
    fontSize: "0.9rem",
    marginTop: "-3px",
    color: "#0a0a0f",
  },
  textField: {
    width: "94%",
    marginLeft: "3%",
  },
  rightContainer: {
    border: "1px solid #ccc",
    borderStartEndRadius: "8px",
    borderStartStartRadius: "8px",
    padding: "6%",
    textAlign: "center",
    backgroundColor: "white",
  },
  mainContainer: {
    margin: "1%",
    border: "1px solid #ccc",
    borderStartEndRadius: "8px",
    borderStartStartRadius: "8px",
    padding: "1%",
  },
  rightContainer1: {
    marginTop: "7%",
    border: "1px solid #ccc",
    borderStartEndRadius: "8px",
    borderStartStartRadius: "8px",
    padding: "6%",
  },
  margin: {
    marginTop: "12%",
    color: "#ccc",
  },
  dividerInset1: {
    margin: `10px 0 0 ${theme.spacing(29)}px`,
    marginBottom: "-31px",
  },
  dividerInset4: {
    margin: `10px 0 0 ${theme.spacing(13)}px`,
    marginTop: "-30px",
    marginBottom: "23px",
  },
  materialBtn: {
    marginTop: "5%",
    fontFamily: "'Exo', sans-serif",
  },
}));
