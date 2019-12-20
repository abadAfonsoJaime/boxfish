import React from "react";

import { AppBar, Fab, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import ScrollTop from "./ScrollTop";
import ToolbarContent from "./ToolbarContent";
import NavigationRouter from "../../navigation/NavigationRouter";

export default function BackToTop(props) {
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
      <main style={{ marginTop: 100 }}>
        <NavigationRouter />
      </main>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
