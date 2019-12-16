import React from "react";

import { Link } from "react-router-dom";

import { makeStyles, createStyles } from "@material-ui/styles";
import { AppBar, Button, MenuItem, Toolbar } from "@material-ui/core";

import logo from "../../logo.png";
import ToolbarMenu from "./ToolbarMenu";

const useStyles = makeStyles(theme =>
  createStyles({
    menuButton: {
      marginRight: 20
    },
    navbar: {
      padding: "10px 20px 10px 20px"
      // paddingTop: "10px",
      // paddingBottom: "10px",
      // paddingRight: "20px",
      // paddingLeft: "20px"
    }
  })
);

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.navbar}>
      <Toolbar>
        <div>
          <Link to="/">
            <span>
              <img
                style={{ backgroundColor: "transparent" }}
                src={logo}
                width="149.75"
                height="61.5"
                alt="BoxFish"
              />
            </span>
          </Link>
        </div>

        <ToolbarMenu
          render={collapsed => {
            console.log("collapsed --> ", collapsed);
            return collapsed
              ? [
                  <MenuItem key="work" component={Link} to="/work">
                    Work
                  </MenuItem>,
                  <MenuItem key="about" component={Link} to="/about">
                    About
                  </MenuItem>,
                  <MenuItem key="career" component={Link} to="/career">
                    Career
                  </MenuItem>,
                  <MenuItem key="contact" component={Link} to="/contact">
                    Contact
                  </MenuItem>
                ]
              : [
                  <Button
                    key="work"
                    component={Link}
                    to="/work"
                    color="secondary"
                    className={classes.menuButton}
                  >
                    Work
                  </Button>,
                  <Button
                    key="about"
                    component={Link}
                    to="/about"
                    color="secondary"
                    className={classes.menuButton}
                  >
                    About
                  </Button>,
                  <Button
                    key="career"
                    component={Link}
                    to="/career"
                    color="secondary"
                    className={classes.menuButton}
                  >
                    Career
                  </Button>,
                  <Button
                    key="contact"
                    component={Link}
                    to="/contact"
                    color="secondary"
                    className={classes.menuButton}
                  >
                    Contact
                  </Button>
                ];
          }}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
