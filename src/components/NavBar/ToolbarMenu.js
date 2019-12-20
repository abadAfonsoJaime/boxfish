import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ToolbarMenuIcon from "./ToolbarMenuIcon";

const useStyles = makeStyles(theme => ({
  root: {
    // Moving Menu to the right side
    position: "absolute",
    right: 0
  },
  // hide tabs
  tabsBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  }
}));

function ToolbarMenu(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ToolbarMenuIcon>{props.render(true)}</ToolbarMenuIcon>
      <div className={classes.tabsBar} id="toolbar">
        {props.render(false)}
      </div>
    </div>
  );
}

export default ToolbarMenu;
