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
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Button } from "@material-ui/core";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";

const drawerWidth = 250;
let shift;
let display;
let contentMargin;

if (window.innerWidth <= 600) {
  shift = 0;
  contentMargin = -drawerWidth;
} else {
  contentMargin = 0;
  shift = drawerWidth;
  display = "none";
}

const useStyles = makeStyles((theme)=>({
    root: {
        display: 'flex',
      },
      appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        position: 'fixed',
      },
      appBarShift: {
        width: `calc(100% - ${shift}px)`,
        marginLeft: 0,
        // transition: theme.transitions.create(['margin', 'width'], {
        //   easing: theme.transitions.easing.easeOut,
        //   duration: theme.transitions.duration.enteringScreen,
        // }),
        // position: 'fixed'
      },
      Toolbar:{
          backgroundColor: 'white',
        //   position: "fixed"
        // border: 'none'
      },
      leftIcon: {
        display: `${display}`
      },
      menuButton: {
        marginRight: theme.spacing(2),
        color: 'black'
      },
      listText: {
        color:'#868e96'
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
        padding: theme.spacing(5,16,0,2),
        // necessary for content to be below app bar
        // ...theme.mixins.toolbar,
        // justifyContent: 'flex-end',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
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
      button: {
      },
}))

const SideBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 600) setOpen(false);
    else setOpen(true);
  }, []);

    const handleDrawerOpen = () => {
        if(window.innerWidth<=600)
        setOpen(true);
      };
      const handleDrawerClose = () => {
        // if(window.innerWidth<=600)
        setOpen(false);
      };
    return (
        <>
            <div className={classes.root}>
                {/* <CssBaseline/> */}
                <AppBar className={clsx(classes.appBar, {[classes.appBarShift]: open,})}>
                    <Toolbar className={clsx(classes.Toolbar)}>
                        <IconButton
                        color="secondary"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}>
                        <MenuIcon className={clsx(open)}/>
                        </IconButton>
                        <div className={classes.button}>

                        <Button
                        variant="outlined"
                        size="medium"
                        color="secondary"
                        startIcon={<PowerSettingsNewRoundedIcon />}
                        style={{margin: 'auto'}}
                        >
                        Log Out
                        </Button>
                        </div>
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
                    <h3 style={{textAlign: "left",color:'#868e96'}}>ADMIN</h3>
                    <ChevronLeftIcon className={clsx(classes.leftIcon && classes.listText)} onClick={handleDrawerClose}/>
                </div>
                <List className={clsx(classes.listText)}>
                {/* {['Dashboard', 'Courses', 'Enrollment', 'Meet Links'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon className={clsx(classes.listText)}>{index % 2 === 0 ? <ViewQuiltIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
                <Divider />
                <List className={clsx(classes.listText)}>
                {['Classrooms', 'Attendances', 'Students'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon className={clsx(classes.listText)}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
                <List className={clsx(classes.listText)}>
                {['Student Courses', 'H5P content', 'Teachers', 'Operations'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon className={clsx(classes.listText)}>{index % 2 === 0 ? <ViewQuiltIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))} */}
                <ListItem button>
                    <ListItemIcon className={clsx(classes.listText)}><ViewQuiltIcon/></ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                </List>
                
            </Drawer>
            <main className={clsx(classes.content, {[classes.contentShift]: open,})}>
                <div className={classes.drawerHeader} />
            </main>
        </div>
        </>
    )
}
export default SideBar;
