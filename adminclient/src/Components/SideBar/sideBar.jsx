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
import { Link, useHistory } from 'react-router-dom'
import Dropdown from 'react-dropdown';
import MainLogo from "./../../Images/mainLogo.png"
import { Image } from "react-bootstrap";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const drawerWidth = 250;
let shift;
let display;
let contentMargin;

if (window.innerWidth <= 600) {
  shift = drawerWidth;
  contentMargin = -drawerWidth;
} else {
  contentMargin = -drawerWidth;
  shift = drawerWidth;
  display = "none";
}

const useStyles = makeStyles((theme)=>({
    root: {
        display: 'flex',
        // alignItems: 'center',

      },
      appBar: {
        // justifyContent: "space-between",
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        position: 'fixed',
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
      Toolbar:{
          backgroundColor: 'white',
          justifyContent: "space-between"
      },
      leftIcon: {
        display: `${display}`
      },
      // menuButton: {
      //   marginRight: theme.spacing(2),
      //   color: 'black'
      // },
      listText: {
        textDecoration: "none",
        color:'white',
        "&:hover": {
          color: 'white'
        }
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
        backgroundColor:'#303956'
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        // marginTop: "10px",
        marginLeft: "10px"
        // padding: theme.spacing(5,0,0,0),
        // necessary for content to be below app bar
        // ...theme.mixins.toolbar,
        // justifyContent: 'flex-start',
      },
      content: {
        flexGrow: 1,
        // padding: theme.spacing(3),`
          transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft:`${contentMargin}` ,
      },
      hover: {
        color: "black",
        "&:hover": {
          color: 'white'
        }
      },
      view:{
        marginLeft: 250
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
      },
      secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
      },
      AccordionContent: {
        textDecoration: "none",
        marginLeft: "5%",
        border: "none"
      },
      Accordion:{
        backgroundColor: "transparent",
        border: "transparent",
        margin: "0%",
        padding: "0%"
      }
      
}))

const SideBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const history = useHistory();
  const [loading, setLoading]=useState(false)
  const [mobile, setMobile] = useState(false)
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    setOpen(true);
  }, []);

    const handleDrawerOpen = () => {
        if(window.innerWidth<=700)
        setOpen(true);
        else
        setOpen(false);
      };
      const handleDrawerClose = () => {
        if(window.innerWidth<=700)
        setOpen(false);
        else
        setOpen(false);

      };
    return (
        <>
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar className={clsx(classes.appBar, {[classes.appBarShift]: open,})}>
                    <Toolbar className={clsx(classes.Toolbar)}>
                        <div className={clsx(!open && classes.hide)}>
                        </div>
                        <IconButton onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.hide)}
                        color="secondary"
                        // aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start">
                        <MenuIcon className={clsx(open)}/>
                        {/* <MenuIcon/> */}
                        </IconButton>
                        <Button 
                        edge="end"
                        variant="outlined"
                        size="medium"
                        color="secondary"
                        startIcon={<PowerSettingsNewRoundedIcon />}
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
                <div className={classes.drawerHeader} >
                    <Image style={{borderRadius: "100%",width: "60px",height: "60px"}} src={MainLogo}/>
                    <h3 style={{textAlign: "left",color:'white',fontSize: "200%",marginLeft: "10px"}}>ADMIN</h3>
                    <ChevronLeftIcon className={clsx(classes.leftIcon, classes.listText && open) } onClick={handleDrawerClose}/>
                </div>
                <List >
                <Link to="/dashboard" className={clsx(classes.listText)}>
                <ListItem button >
                    <ViewQuiltIcon />
                    <ListItemText primary="Dashboard" style={{marginLeft: "30px", color:"white"  }}/>
                </ListItem>
                </Link>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} 
                className={classes.Accordion}
                >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                    >
                      <ViewQuiltIcon className={clsx(classes.listText)}/>
                      <Typography style={{marginLeft: "30px", color:"white"}}>Courses</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{margin: "0%",padding: "0%",display: "flex",flexDirection: "column"}}>
                    <Divider orientation="vertical" flexItem style={{color: "white"}}/>
                    <Link to="/courses" className={classes.AccordionContent}>
                          <ListItemText primary="Courses" style={{marginLeft: "50px", color:"white"}}/>
                    </Link>
                    <Link to="/course-activities" className={classes.AccordionContent}>
                          <ListItemText primary="Add Course Activity" style={{marginLeft: "50px", color:"white"}}/>
                    </Link>
                    <Link to="/learning-skills" className={classes.AccordionContent}>
                          <ListItemText primary="Add Learning Skills" style={{marginLeft: "50px", color:"white"}}/>
                    </Link>
                    <Link to="/spiritual-learning" className={classes.AccordionContent}>
                          <ListItemText primary="Add Spirutal Learning" style={{marginLeft: "50px", color:"white"}}/>
                    </Link>
                    </AccordionDetails>
                </Accordion>
                <Link to="/enroll" className={clsx(classes.listText)} >
                <ListItem button >
                    <ViewQuiltIcon/>
                    <ListItemText primary="Enrollment" style={{marginLeft: "30px", color:"white"  }} />
                </ListItem>
                </Link>
                <Link to="/meetLink" className={clsx(classes.listText)}>
                <ListItem button >
                    <ViewQuiltIcon />
                    <ListItemText primary="Meet Links" style={{marginLeft: "30px", color:"white"  }}/>
                </ListItem>
                </Link>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} 
                style={{backgroundColor: "transparent",border: "none",margin: "0%",padding: "0%"}}
                >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <ViewQuiltIcon className={clsx(classes.listText)}/>
                      <Typography style={{marginLeft: "30px", color:"white"}}>Classroom</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{margin: "0%",padding: "0%",display: "flex",flexDirection: "column"}}>
                    <Link to="/classroom" className={classes.Accordion}>
                          <ListItemText primary="Students & Teachers" style={{marginLeft: "50px", color:"white"}}/>
                    </Link>
                    <Link to="/courses" className={classes.Accordion}>
                          <ListItemText primary="Teacher Training" style={{marginLeft: "50px", color:"white"}}/>
                    </Link>
                    </AccordionDetails>
                </Accordion>
                <Link to="/attendances" className={clsx(classes.listText)}>
                <ListItem button >
                    <ViewQuiltIcon />
                    <ListItemText primary="Attendances" style={{marginLeft: "30px", color:"white"  }}/>
                </ListItem>
                </Link>
                <Link to="/students" className={clsx(classes.listText)}>
                <ListItem button >
                    <ViewQuiltIcon />
                    <ListItemText primary="Students" style={{marginLeft: "30px", color:"white"  }}/>
                </ListItem>
                </Link>
                <Link to="/student-courses" className={clsx(classes.listText)}>
                <ListItem button >
                    <ViewQuiltIcon />
                    <ListItemText primary="Student Courses" style={{marginLeft: "30px", color:"white"  }}/>
                </ListItem>
                </Link>
                <ListItem button className={clsx(classes.listText)} >
                    <ViewQuiltIcon />
                    <ListItemText primary="H5P Content" style={{marginLeft: "30px", color:"white"  }}/>
                    <ChevronRightIcon/>
                </ListItem>
                <Link to="/teachers" className={clsx(classes.listText)}>
                <ListItem button>
                    <ViewQuiltIcon />
                    <ListItemText primary="Teachers" style={{marginLeft: "30px", color:"white"  }}/>
                </ListItem>
                </Link>
                <Link to="/operations" className={clsx(classes.listText)}>
                <ListItem button>
                    <ViewQuiltIcon />
                    <ListItemText primary="Operations" style={{marginLeft: "30px", color:"white"  }}/>
                </ListItem>
                </Link>
                </List>
                
            </Drawer>
            <main className={clsx(classes.content, {[classes.contentShift]: open,})}>
                <div className={clsx({[classes.desktop]: mobile}, {[classes.mobile]: mobile})} /> 
            </main>
            {/* <div>
              <Link to="/Dashboard">hy</Link>
            </div> */}
        </div>
        </>
    )
}
export default SideBar;
