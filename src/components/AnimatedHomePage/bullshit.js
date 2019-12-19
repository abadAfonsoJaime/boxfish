import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useSpring, animated } from "react-spring";
import "../../styles/customCSS.css";

const Bullshit = ({ background, text }) => {
  const useStyles = makeStyles(theme =>
    createStyles({
      fluidTypgraphy: {
        [theme.breakpoints.down("sm")]: {
          fontSize: "44px"
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: "53px"
        },
        [theme.breakpoints.up("md")]: {
          fontSize: "85px"
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: "115px"
        },
        position: "relative"
      },
      gradientText: {
        background: background,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }
    })
  );
  const classes = useStyles();
  const lineThrough = useSpring({
    from: {
      content: " ",
      width: "0%",
      top: "-17%",
      left: "0",
      height: "2px",
      background: background
    },
    to: {
      width: "100%"
    },
    config: { duration: 2000 },
    delay: 2000
  });

  return (
    <div className="container">
      <span className={`${classes.gradientText} ${classes.fluidTypgraphy}`}>
        {text}
        <animated.p style={lineThrough} className="overIndex"></animated.p>
      </span>
    </div>
  );
};

export default Bullshit;
