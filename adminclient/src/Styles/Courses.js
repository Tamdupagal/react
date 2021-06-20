import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  Heading: {
    fontWeight: "700",
    fontSize: "1.2rem",
    fontFamily: "KoHo, sans-serif",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#e60000",
  },
  greenBtn: {
    margin: "1%",
    color: "green",
    border: "1px solid green",
  },
  greenBtn1: {
    margin: "1%",
    marginTop: "30%",
    color: "green",
    border: "1px solid green",
  },
  blueBtn: {
    margin: "1%",
    color: "#5567ff",
    border: "1px solid #5567ff",
  },
  blueBtn1: {
    margin: "1%",
    marginTop: "30%",
    color: "#5567ff",
    border: "1px solid #5567ff",
  },
  image: {
    width: "95%",
    marginTop: "2%",
  },
  courseName: {
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "1.5rem",
    fontFamily: "KoHo, sans-serif",
  },
  dividerInset: {
    margin: `10px 0 0 ${theme.spacing(33)}px`,
    marginTop: "-42px",
    // width: "84%",
    backgroundColor: "#ccc",
  },
}));
export default useStyles;
