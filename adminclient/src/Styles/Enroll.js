import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles({
  root: {
    maxWidth: 800,
  },
  media: {
    height: 100,
  },
  blueBtn: {
    textAlign: "center",
    paddingLeft: "17%",
    paddingRight: "17%",
    fontFamily: "'Exo', sans-serif",
  },
  greenBtn: {
    textAlign: "center",
    paddingLeft: "39%",
    paddingRight: "39%",
    fontFamily: "'Exo', sans-serif",
  },
  box: {
    display: "flex",
    padding: 8,
  },
  spreadBox: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  cardHeader: {
    borderBottom: "1px solid #ccc",
    borderRadius: "5px",
    fontFamily: "'Exo', sans-serif",
    // backgroundColor: "red",
    fontSize: "2rem",
  },
});
