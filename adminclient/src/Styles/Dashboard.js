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
    },
    divider: {
      marginTop: "2%",
    },
    content: {
      fontSize: "1.5rem",
      fontFamily: "'Exo', sans-serif",
      color: "#33334d",
    },
    container: {
      paddingBottom: "5vh",
      borderBottom: "3px solid #ccc",
    },
  }));