import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 800,
    },
    Heading: {
      fontFamily: "KoHo, sans-serif",
      fontSize: "140%",
    },
    box: {
      display: "flex",
      justifyContent: "space-between",
    },
    buttons: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
    footer: {
      fontFamily:
        "Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
    },
    dividerInset2: {
      margin: `10px 0 0 ${theme.spacing(10)}px`,
      // marginBottom: "-29px",
    },
    btn: {
      backgroundColor: "#e60000",
    },
  }));
  export default useStyles;