import React from "react";
import AbsoluteWrapper from "../components/AbsoluteWrapper";
import AnimatedLineThrough from "../components/AnimatedHomePage/animatedLineThrough";

import { useSpring, animated } from "react-spring";

import { makeStyles, createStyles } from "@material-ui/core/styles";

function Career() {
  const classes = useStyles();
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    //delay: 1000,
    config: { duration: 1000 }
  });
  // const strike = useSpring({
  //   value: 100,
  //   content: ' ',
  //   position: "absolute",
  //   top: "50%",
  //   left: 0,
  //   width: "100%",
  //   height: "3px",
  //   background: "linearGradient(to right, #9fc0c8 0 %, #D1BBC3 100 %)",
  //   // animationName: "strike",
  //   // animationDelay: "4s",
  //   // animationDuration: "2s",
  //   // animationFillMode: "forwards",
  //   from: { position: "relative", value: 0}
  // });

  return (
    <animated.div style={fade}>
      <span className={classes.fluidDesign}>
        engineering
        <br />
        without
      </span>
      {/* <AnimatedBullshit /> */}
      <AnimatedLineThrough
        className={classes.fluidDesign}
        text="bullshit"
        background="linear-gradient(to right, #9fc0c8 0%, #D1BBC3 100%)"
      />

      <svg width="660" height="220">
        <defs>
          <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9fc0c8" />
            <stop offset="100%" stopColor="#D1BBC3" />
          </linearGradient>
        </defs>
        <rect x="10" y="10" width="600" height="200" fill="url(#linear)" />
      </svg>
    </animated.div>
  );
}

const useStyles = makeStyles(theme =>
  createStyles({
    fluidDesign: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "44px"
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "53px"
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "85px"
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "115px"
      }
    }
  })
);

export default Career;
