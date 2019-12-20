// import React from "react";
// import { useScrollTrigger } from "@material-ui/core";

// const ElevatedScrollableAppBar = ({ children, window }) => {
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: window ? window() : undefined
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0
//   });
// };

// export default ElevatedScrollableAppBar;

import React from "react";
import { useScrollTrigger, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function ScrollTop(props) {
  const { children, window } = props;
  const useStyles = makeStyles(theme => ({
    root: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  }));
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = event => {
    console.log("Event --> ", event);
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default ScrollTop;
