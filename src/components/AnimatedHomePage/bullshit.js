import React from "react";
import { Spring } from "react-spring/renderprops";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gradientLetters: {
    //background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"

    // set the background color
    background: "linear-gradient(to right, #ff8a00 0%, #da1b60 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }
});

function Bullshit() {
  const classes = useStyles();
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1000, duration: 1000 }}
    >
      {props => (
        <div style={props}>
          <div style={{ fontSize: "10rem" }}>
            <p className={classes.gradientLetters}>bullshit</p>
          </div>
        </div>
      )}
    </Spring>
  );
}

export default Bullshit;
