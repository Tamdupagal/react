import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Button } from "@material-ui/core";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
import { useHistory } from "react-router-dom";
import MainLogo from "./../../Images/mainLogo.png";
import { Image } from "react-bootstrap";
import "./../../css/sidebar.css";
import { useStyles } from "../../Styles/SideBar";
import ListItem from "./ListItems";

const SideBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const history = useHistory();
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleLogout = () => {
    localStorage.clear()
    history.push("/login")
  }
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
              onClick={handleLogout}
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
          <ListItem/>
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
      </div>
    </>
  );
};
export default SideBar;
