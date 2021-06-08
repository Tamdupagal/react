import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
    mainHeading: {
      justifyContent: "center",
      textAlign: "center",
      fontFamily: "'Exo', sans-serif",
      marginTop: "3%",
      marginBottom: "3%",
    },
    dividerInset1: {
      margin: `10px 0 0 ${theme.spacing(29)}px`,
      marginBottom: "-29px",
    },
    dividerInset2: {
      margin: `10px 0 0 ${theme.spacing(24)}px`,
      marginBottom: "-29px",
    },
    subheading1: {
      letterSpacing: "0.1rem",
      fontFamily: "KoHo, sans-serif",
    },
  }));