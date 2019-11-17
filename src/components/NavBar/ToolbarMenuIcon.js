import React from "react";

import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Menu, IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

const useStyles = makeStyles(theme =>
  createStyles({
    // Hide Hamburguer Icon
    buttonCollapse: {
      [theme.breakpoints.up("sm")]: {
        display: "none"
      },
      margin: "10px",
      boxShadow: "none"
    }
  })
);

function ToolbarMenuIcon(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const open = Boolean(anchorEl);
  console.log("open --> ", open);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItems = () => {
    const children = props.children;
    const menuItems = [];
    children.map(child => menuItems.push(child));
    return menuItems;
  };
  console.log("anchorEl: ", anchorEl);
  return (
    <div className={classes.buttonCollapse}>
      <IconButton onClick={handleMenu} color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
      >
        {handleMenuItems()}
      </Menu>
    </div>
  );
}

export default ToolbarMenuIcon;
