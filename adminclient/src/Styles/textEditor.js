import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  editor1: {
    width: "100%",
    marginLeft: "0%",
  },
  Header: {
    fontSize: "2rem",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    backgroundColor: "#318ebd",
    width: "90%",
    color: "white",
    border: "2px solid #318ebd",
    padding: "2%",
  },
  paper1: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  paper: {
    marginTop: "2%",
    padding: theme.spacing(0.2),
    color: theme.palette.text.secondary,
  },
  chooseFile: {
    padding: "2%",
  },
  saveBtn: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "2%",
    textAlign: "center",
    marginTop: "3%",
  },
  addContent: {
    display: "inline",
    color: "#302e2e",
    backgroundColor: "#f0f5f5",
    letterSpacing: "0.1rem",
    marginTop:"30px",
    // marginLeft: "0%",
    // marginBottom: "5%",
    // marginTop: "50%",
    // paddingTop: "1%",
    zIndex: "1",
  },
  dividerInset: {
    margin: `3px 0 0 ${theme.spacing(15)}px`,
    marginBottom: "-10px",
  },
  endDivider: {
    padding: "0.05%",
    marginTop: "6%",
  },
  submitBtn: {
    textAlign: "center",
    margin: "4%",
    marginTop: "4%",
    marginBottom: "4%",
  },
}));
export default useStyles;
