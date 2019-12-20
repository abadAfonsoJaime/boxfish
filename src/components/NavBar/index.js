import React from "react";

import { AppBar, Fab, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import ScrollTop from "./ScrollTop";
import ToolbarContent from "./ToolbarContent";
/* REACT ROUTER NAVIGATION */
import NavigationRouter from "../../navigation/NavigationRouter";

export default function Navbar(props) {
  const useStyles = makeStyles({
    navbar: {
      padding: "10px 20px 10px 20px"
    }
  });
  const classes = useStyles();
  return (
    <React.Fragment>
      <header>
        <AppBar className={classes.navbar}>
          <ToolbarContent />
        </AppBar>
      </header>
      <Toolbar id="back-to-top-anchor" />
      {/* REACT ROUTER NAVIGATION */}
      <main style={{ marginTop: 50 }}>
        <NavigationRouter />
      </main>
      {/* Button for scrolling back to top */}
      <ScrollTop {...props}>
        <Fab
          // color={`${theme.palette.secondary.contastText}`}
          color="secondary"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
