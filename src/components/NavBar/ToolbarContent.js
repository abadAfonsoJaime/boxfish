import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import { Button, Container, MenuItem, Toolbar } from "@material-ui/core";

import logo from "../../assets/logo.png";
import ToolbarMenu from "./ToolbarMenu";

function ToolbarContent() {
  const useStyles = makeStyles({
    font: { fontWeight: "bold" },
    menuButton: { marginRight: 10 }
  });
  const classes = useStyles();
  return (
    <Container>
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
                  <MenuItem
                    className={classes.font}
                    key="work"
                    component={Link}
                    to="/work"
                  >
                    Work
                  </MenuItem>,
                  <MenuItem
                    className={classes.font}
                    key="about"
                    component={Link}
                    to="/about"
                  >
                    About
                  </MenuItem>,
                  <MenuItem
                    className={classes.font}
                    key="career"
                    component={Link}
                    to="/career"
                  >
                    Career
                  </MenuItem>,
                  <MenuItem
                    className={classes.font}
                    key="contact"
                    component={Link}
                    to="/contact"
                  >
                    Contact
                  </MenuItem>
                ]
              : [
                  <Button
                    key="work"
                    component={Link}
                    to="/work"
                    color="secondary"
                    className={`${classes.menuButton} ${classes.font}`}
                  >
                    Work
                  </Button>,
                  <Button
                    key="about"
                    component={Link}
                    to="/about"
                    color="secondary"
                    className={`${classes.menuButton} ${classes.font}`}
                  >
                    About
                  </Button>,
                  <Button
                    key="career"
                    component={Link}
                    to="/career"
                    color="secondary"
                    className={`${classes.menuButton} ${classes.font}`}
                  >
                    Career
                  </Button>,
                  <Button
                    key="contact"
                    component={Link}
                    to="/contact"
                    color="secondary"
                    className={`${classes.menuButton} ${classes.font}`}
                  >
                    Contact
                  </Button>
                ];
          }}
        />
      </Toolbar>
    </Container>
  );
}

export default ToolbarContent;
