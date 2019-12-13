import React from "react";

import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>
  createStyles({
    gradientLetters: {
      //background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"

      // set the background color
      background: "linear-gradient(to right, #9fc0c8 0%, #D1BBC3 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    },
    fluidDesign: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "44px"
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: "53px"
      },
      [theme.breakpoints.down('md')]: {
        fontSize: "85px"
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "115px"
      },
    }
  })
);

function Bullshit() {
  const classes = useStyles();
  return (
    <div className={classes.fluidDesign}>
      <span className={`${classes.gradientLetters} strike`}>bullshit</span>
    </div>
    // <Spring
    //   from={{ textDecoration: "none" }}
    //   to={{ textDecoration: "line-through" }}
    //   config={{ delay: 3000, duration: 10000 }}
    // >
    //   {props => (
    //     <div style={props} className={classes.fluidDesign}>
    //       <span className={classes.gradientLetters}>bullshit</span>
    //     </div>
    //   )}
    // </Spring>
  );
}

export default Bullshit;
