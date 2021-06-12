import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  editor1: {
    width: "70%",
    marginLeft: "0%",
  },
  Header: {
    fontSize: "2rem",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    backgroundColor: "#318ebd",
    width: "92%",
    color: "white",
    border: "2px solid #318ebd",
    padding: "2%",
  },
  borderbox1: {
    border: "1px solid rgb(128, 128, 128, 0.4)",
    width: "90%",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    marginLeft: "5%",
    padding: "3%",
    marginBottom: "2%",
  },
  paper1: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  paper: {
    marginTop: "2%",
    padding: theme.spacing(0.2),
    color: theme.palette.text.secondary,
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  uploadimg: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    paddingBottom: "8%",
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
    zIndex: "1",
  },
  dividerInset: {
    margin: `3px 0 0 ${theme.spacing(15)}px`,
    marginBottom: "-10px",
  },
  endDivider: {
    padding: "0.05%",
    marginTop: "5%",
  },
  submitBtn: {
    textAlign: "center",
    margin: "4%",
    marginTop: "4%",
    marginBottom: "4%",
  },
}));
