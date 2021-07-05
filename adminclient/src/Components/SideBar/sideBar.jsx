import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Button } from "@material-ui/core";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
import { Link, useHistory } from "react-router-dom";
import MainLogo from "./../../Images/mainLogo.png";
import { Image } from "react-bootstrap";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import RemoveFromQueueIcon from "@material-ui/icons/RemoveFromQueue";
import LinkIcon from "@material-ui/icons/Link";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import CreateIcon from "@material-ui/icons/Create";
import FaceIcon from "@material-ui/icons/Face";
import TuneIcon from "@material-ui/icons/Tune";
import "./../../css/sidebar.css";
import GamepadIcon from "@material-ui/icons/Gamepad";
import { FaUserGraduate } from "react-icons/fa";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

const drawerWidth = 250;
let shift;
let display;
let contentMargin;
let background;
let setStyle;

if (window.innerWidth <= 600) {
  shift = drawerWidth;
  contentMargin = -drawerWidth;
} else {
  contentMargin = -drawerWidth;
  shift = drawerWidth;
  display = "none";
}

const Accordion = withStyles({
  root: {
    backgroundColor: "transparent",
    color: "white",
    width: "95%",
    borderRadius: "10px",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      // margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "transparent",
    color: "white",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },

  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    // padding: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    textAlign: "start",
    color: "white",
    marginLeft: "10px",
  },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
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
    fontFamily: "'Source Sans Pro', sans-serif",
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
    fontFamily: "'Source Sans Pro', sans-serif",
    // paddingBottom: "4%",
    // paddingTop: "6%",
    textTransform: "capitalize",
    marginLeft: "12px",
  },
  dropdownHeading: {
    fontFamily: "'Nunito', sans-serif",
    fontFamily: "'Source Sans Pro', sans-serif",
    textTransform: "capitalize",
    fontSize: "0.9rem",
  },
  menuBtn2: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    fontFamily: "'Nunito', sans-serif",
    fontFamily: "'Source Sans Pro', sans-serif",
    paddingBottom: "6%",
    // paddingTop: "6%",
    textTransform: "capitalize",
    marginLeft: "12px",
  },
}));

const SideBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [backgroundPanel1, setBackgroundPanel1] = useState("#303956");
  const [backgroundPanel2, setBackgroundPanel2] = useState("#303956");
  const [backgroundPanel3, setBackgroundPanel3] = useState("#303956");

  const handleChange = (panel) => (event, newExpanded) => {
    console.log(panel, newExpanded);
    console.log(newExpanded);
    setExpanded(newExpanded ? panel : false);
    if (panel == "panel1") handleBackgroundPanel1();
    else if (panel == "panel2") handleBackgroundPanel2();
    else handleBackgroundPanel3();
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleDrawerOpen = () => {
    if (window.innerWidth <= 700) setOpen(true);
    else setOpen(false);
  };
  const handleDrawerClose = () => {
    if (window.innerWidth <= 700) setOpen(false);
    else setOpen(false);
  };
  const handleBackgroundPanel1 = () => {
    expanded ? setBackgroundPanel1("#303956") : setBackgroundPanel1("#262e45");
  };

  const handleBackgroundPanel2 = () => {
    expanded ? setBackgroundPanel2("#303956") : setBackgroundPanel2("#262e45");
  };

  const handleBackgroundPanel3 = () => {
    expanded ? setBackgroundPanel3("#303956") : setBackgroundPanel3("#262e45");
  };
  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          className={clsx(classes.appBar, { [classes.appBarShift]: open })}
        >
          <Toolbar className={clsx(classes.Toolbar)}>
            <div className={clsx(!open && classes.hide)}></div>
            <IconButton
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.hide)}
              color="secondary"
              onClick={handleDrawerOpen}
              edge="start"
            >
              <MenuIcon className={clsx(open)} />
              {/* <MenuIcon/> */}
            </IconButton>
            <Button
              edge="end"
              variant="outlined"
              size="medium"
              color="secondary"
              startIcon={<PowerSettingsNewRoundedIcon />}
              style={{ fontFamily: "'Exo', sans-serif" }}
            >
              Log Out
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <Image className={classes.Img} src={MainLogo} />
            <h3 className={classes.Heading}>ADMIN</h3>
            <ChevronLeftIcon
              className={clsx(classes.leftIcon, classes.listText && open)}
              onClick={handleDrawerClose}
            />
          </div>
          <List>
            <Link to="/dashboard" className={classes.link}>
              <Button startIcon={<ViewQuiltIcon />} className={classes.menuBtn}>
                Dashboard
              </Button>
            </Link>
            <Accordion
              square
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              // onClick={handleBackgroundPanel1}
              style={{ backgroundColor: backgroundPanel1, minHeight: "10px" }}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              >
                <ImportContactsIcon
                  style={{ marginRight: "7px", fontSize: "1.3rem" }}
                />
                <Typography className={classes.dropdownHeading}>
                  Courses
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Link to="/courses" className={classes.link}>
                  <Button className={classes.button}>Courses</Button>
                </Link>
                <Link to="/course-activities" className={classes.link}>
                  <Button className={classes.button}>
                    Add Course Activity
                  </Button>
                </Link>
                <Link to="/learning-skills" className={classes.link}>
                  <Button className={classes.button}>
                    Add Learning Skills
                  </Button>
                </Link>
                <Link to="/spiritual-learning" className={classes.link}>
                  <Button className={classes.button}>
                    Add Spiritual Learning
                  </Button>
                </Link>
              </AccordionDetails>
            </Accordion>
            <Link to="/enroll" className={classes.link}>
              <Button
                startIcon={<RemoveFromQueueIcon />}
                className={classes.menuBtn2}
              >
                Enrollment
              </Button>
            </Link>
            <Link to="/meetLink" className={classes.link}>
              <Button startIcon={<LinkIcon />} className={classes.menuBtn}>
                Meet Links
              </Button>
            </Link>
            <Accordion
              square
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              style={{ backgroundColor: backgroundPanel2 }}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              >
                <LocalLibraryIcon
                  style={{ marginRight: "7px", fontSize: "1.3rem" }}
                />
                <Typography className={classes.dropdownHeading}>
                  Classroom
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Link to="/classroom" className={classes.link}>
                  <Button className={classes.button}>
                    Students and Teachers
                  </Button>
                </Link>
                <Link to="/trainer-classrooms" className={classes.link}>
                  <Button className={classes.button}>Teacher Training</Button>
                </Link>
              </AccordionDetails>
            </Accordion>
            <Link to="/attendances" className={classes.link}>
              <Button startIcon={<CreateIcon />} className={classes.menuBtn2}>
                Attendances
              </Button>
            </Link>
            <Link to="/students" className={classes.link}>
              <Button startIcon={<FaceIcon />} className={classes.menuBtn2}>
                Students
              </Button>
            </Link>
            <Link to="/student-courses" className={classes.link}>
              <Button startIcon={<FaceIcon />} className={classes.menuBtn}>
                Student Courses
              </Button>
            </Link>
            <Accordion
              square
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              style={{ backgroundColor: backgroundPanel3 }}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              >
                <GamepadIcon
                  style={{ marginRight: "7px", fontSize: "1.3rem" }}
                />
                <Typography className={classes.dropdownHeading}>
                  H5P Content
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Link className={classes.link}>
                  <Button className={classes.button}>Add Content</Button>
                </Link>
                <Link className={classes.link}>
                  {" "}
                  <Button className={classes.button}>Edit Content</Button>
                </Link>{" "}
              </AccordionDetails>
            </Accordion>
            <Link to="/teachers" className={classes.link}>
              <Button
                startIcon={<FaUserGraduate />}
                className={classes.menuBtn2}
              >
                Teachers
              </Button>
            </Link>
            <Link to="/trainers" className={classes.link}>
              <Button
                startIcon={<FaUserGraduate />}
                className={classes.menuBtn2}
              >
                Trainers
              </Button>
            </Link>
            <Link to="/operations" className={classes.link}>
              <Button startIcon={<TuneIcon />} className={classes.menuBtn}>
                Operations
              </Button>
            </Link>
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, { [classes.contentShift]: open })}
        >
          <div
            className={clsx(
              { [classes.desktop]: mobile },
              { [classes.mobile]: mobile }
            )}
          />
        </main>
        {/* <div>
              <Link to="/Dashboard">hy</Link>
            </div> */}
      </div>
    </>
  );
};
export default SideBar;
