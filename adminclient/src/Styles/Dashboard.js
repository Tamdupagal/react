import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.dark,
    fontSize: "large",
    border: "1px solid #e0ebeb",
    borderRadius: "8px",
    cursor: "pointer"
  },
  paperActive: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.dark,
    fontSize: "large",
    border: "1px solid #e0ebeb",
    borderRadius: "8px",
    borderLeft: `4px solid red`,
    cursor: "pointer"
  },
  divider: {
    marginTop: "2%",
  },
  content: {
    fontSize: "2rem",
    fontFamily: "'Exo', sans-serif",
    color: "#33334d",
  },
  container: {
    paddingBottom: "5vh",
    borderBottom: "2px solid #ccc",
    marginBottom: "42vh",
  },
}));
