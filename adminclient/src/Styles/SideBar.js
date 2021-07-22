import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 250;
let display;
let contentMargin;

export const useStyles = makeStyles((theme) => ({
    root: {
    display: "flex",
  },
  appBar: {
    // justifyContent: "space-between",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    position: "fixed",
  },
  appBarShift: {
    width: `calc(100% - 250px)`,
    marginLeft: 0,
    // justifyContent: "space-between"

    // transition: theme.transitions.create(['margin', 'width'], {
    //   easing: theme.transitions.easing.easeOut,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
    // position: 'fixed'
  },
  Toolbar: {
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  leftIcon: {
    display: `${display}`,
    color:"white"
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#303956",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
    marginTop: "10%",
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),`
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: `${contentMargin}`,
  },
  // hover: {
  //   color: "black",
  //   "&:hover": {
  //     color: "white",
  //   },
  // },
  view: {
    marginLeft: 250,
  },
  Img: {
    borderRadius: "100%",
    width: "60px",
    height: "60px",
  },
  Heading: {
    textAlign: "left",
    color: "white",
    fontSize: "1rem",
    fontFamily: "'Exo', sans-serif",
    letterSpacing: "0.1rem",
  },
  button: {
    color: "white",
    fontFamily: "'Nunito', sans-serif",
    // fontFamily: "'Source Sans Pro', sans-serif",
    textTransform: "capitalize",
  },
  link: {
    textDecoration: "none",
    textTransform: "capitalize",
    // marginLeft: "15px",
  },
  menuBtn: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    fontFamily: "'Nunito', sans-serif",
    // fontFamily: "'Source Sans Pro', sans-serif",
    paddingBottom: "6%",
    // paddingTop: "6%",
    textTransform: "capitalize",
    marginLeft: "12px",
    borderLeft:"3px solid white",
    // backgroundColor:"303956",
    paddingRight:"30%"
  },
  dropdownHeading: {
    fontFamily: "'Nunito', sans-serif",
    // fontFamily: "'Source Sans Pro', sans-serif",
    textTransform: "capitalize",
    fontSize: "0.9rem",
  },
  menuBtn2: {
    display: "flex",
    flexDirection: "column",
    color: "#bfc3c9",
    fontFamily: "'Nunito', sans-serif",
    // fontFamily: "'Source Sans Pro', sans-serif",
    paddingBottom: "6%",
    // paddingTop: "6%",
    textTransform: "capitalize",
    marginLeft: "12px",
    paddingRight:"30%"

  },
  activeLink : {
    backgroundColor: "#262e45", 
    minHeight: "10px"
  },
  inactivelink: {
    backgroundColor: "#303956", 
    minHeight: "10px"
  }
}))