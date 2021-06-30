import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Button } from "@material-ui/core";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
import { Link, useHistory } from "react-router-dom";
import Dropdown from "react-dropdown";
import MainLogo from "./../../Images/mainLogo.png";
import { Image } from "react-bootstrap";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import RemoveFromQueueIcon from "@material-ui/icons/RemoveFromQueue";
import LinkIcon from "@material-ui/icons/Link";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import CreateIcon from "@material-ui/icons/Create";
import FaceIcon from "@material-ui/icons/Face";
import GamesIcon from "@material-ui/icons/Games";
import TuneIcon from "@material-ui/icons/Tune";
import "./../../css/sidebar.css";
import GamepadIcon from "@material-ui/icons/Gamepad";
import { FaUserGraduate } from "react-icons/fa";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // alignItems: 'center',
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
  // menuButton: {
  //   marginRight: theme.spacing(2),
  //   color: 'black'
  // },
  listText: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "white",
    },
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
    // marginTop: "10px",
    marginLeft: "10px",
    // padding: theme.spacing(5,0,0,0),
    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
    // justifyContent: 'flex-start',
    marginTop: "22%",
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
  hover: {
    color: "black",
    "&:hover": {
      color: "white",
    },
  },
  view: {
    marginLeft: 250,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  AccordionContent: {
    marginLeft: "5%",
    border: "none",
    textDecoration: "none",
  },
  Accordion: {
    boxShadow: "unset",
    borderTopRightRadius: "15px ",
    borderBottomRightRadius: "15px",
    textDecoration: "none",
    marginTop: "-10px",
  },
  menu: {
    marginLeft: "15px",
    color: "white",
  },
  subMenu: {
    marginLeft: "25px",
    color: "white",
    textDecoration: "none",
  },
  AccordionDetails: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "-30px",
    marginTop: "-5px",
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
  subMenu1: {
    marginLeft: "25px",
    color: "white",
    marginTop: "-15px",
  },
  AccordionName: {
    marginLeft: "15px",
    color: "white",
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
  const [background, setBackground] = useState("#303956");

  const handleClick = () => {
    setBackground("#262e45");
  };
  const handleChange = (panel, background) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    // setBackground( ? "#262e45" : "#303956");
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
            <Link to="/dashboard" className={clsx(classes.listText)}>
              <ListItem button>
                <ViewQuiltIcon />
                <ListItemText primary="Dashboard" className={classes.menu} />
              </ListItem>
            </Link>
            <Accordion
              style={{
                backgroundColor: background,
              }}
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              // onClick={() => setBackground("#262e45")}
              className={classes.Accordion}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              >
                <ImportContactsIcon className={clsx(classes.listText)} />
                <Typography className={classes.AccordionName}>
                  Courses
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.AccordionDetails}>
                <Link to="/courses" className={classes.AccordionContent}>
                  <ListItemText
                    primary="Courses"
                    className={classes.subMenu1}
                  />
                </Link>
                <Link
                  to="/course-activities"
                  className={classes.AccordionContent}
                >
                  <ListItemText
                    primary="Add Course Activity"
                    className={classes.subMenu}
                  />
                </Link>
                <Link
                  to="/learning-skills"
                  className={classes.AccordionContent}
                >
                  <ListItemText
                    primary="Add Learning Skills"
                    className={classes.subMenu}
                  />
                </Link>
                <Link
                  to="/spiritual-learning"
                  className={classes.AccordionContent}
                >
                  <ListItemText
                    primary="Add Spirutal Learning"
                    className={classes.subMenu}
                  />
                </Link>
              </AccordionDetails>
            </Accordion>
            <Link to="/enroll" className={clsx(classes.listText)}>
              <ListItem button>
                <RemoveFromQueueIcon />
                <ListItemText primary="Enrollment" className={classes.menu} />
              </ListItem>
            </Link>
            <Link to="/meetLink" className={clsx(classes.listText)}>
              <ListItem button>
                <LinkIcon />
                <ListItemText primary="Meet Links" className={classes.menu} />
              </ListItem>
            </Link>
            <Accordion
              style={{
                backgroundColor: background,
              }}
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              className={classes.Accordion}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              >
                <LocalLibraryIcon className={clsx(classes.listText)} />
                <Typography className={classes.AccordionName}>
                  Classroom
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.AccordionDetails}>
                <Link to="/classroom" className={classes.AccordionContent}>
                  <ListItemText
                    primary="Students & Teachers"
                    className={classes.subMenu1}
                  />
                </Link>
                <Link
                  to="/trainer-classrooms"
                  className={classes.AccordionContent}
                >
                  <ListItemText
                    primary="Teacher Training"
                    className={classes.subMenu}
                  />
                </Link>
              </AccordionDetails>
            </Accordion>
            <Link to="/attendances" className={clsx(classes.listText)}>
              <ListItem button>
                <CreateIcon />
                <ListItemText primary="Attendances" className={classes.menu} />
              </ListItem>
            </Link>
            <Link to="/students" className={clsx(classes.listText)}>
              <ListItem button>
                <FaceIcon />
                <ListItemText primary="Students" className={classes.menu} />
              </ListItem>
            </Link>
            <Link to="/student-courses" className={clsx(classes.listText)}>
              <ListItem button>
                <FaceIcon />
                <ListItemText
                  primary="Student Courses"
                  className={classes.menu}
                />
              </ListItem>
            </Link>
            {/* <ListItem button className={clsx(classes.listText)}>
              <GamesIcon />
              <ListItemText primary="H5P Content" className={classes.menu} />
              <ChevronRightIcon />
            </ListItem> */}
            <Accordion
              style={{
                backgroundColor: background,
              }}
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              className={classes.Accordion}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              >
                <GamepadIcon className={clsx(classes.listText)} />
                <Typography className={classes.AccordionName}>
                  H5P Content
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.AccordionDetails}>
                <Link to="" className={classes.AccordionContent}>
                  <ListItemText
                    primary="Add Content"
                    className={classes.subMenu1}
                  />
                </Link>
                <Link to="" className={classes.AccordionContent}>
                  <ListItemText
                    primary="Edit Content"
                    className={classes.subMenu}
                  />
                </Link>
              </AccordionDetails>
            </Accordion>
            <Link to="/teachers" className={clsx(classes.listText)}>
              <ListItem button>
                <FaUserGraduate style={{ fontSize: "1.4rem" }} />
                <ListItemText primary="Teachers" className={classes.menu} />
              </ListItem>
            </Link>
            <Link to="/operations" className={clsx(classes.listText)}>
              <ListItem button>
                <TuneIcon />
                <ListItemText primary="Operations" className={classes.menu} />
              </ListItem>
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
