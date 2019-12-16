import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useTrail, animated } from "react-spring";

import Title from "./title";
import Subtitle from "./subtitle";
import AnimatedLineThrough from "./animatedLineThrough";
import HoverLetters from "./hoverLetters";
import "../../styles/lineThrough.css";

function AnimatedHomePage() {
  const classes = useStyles();
  const items = [
    <Title>
      <span>engineering</span>
    </Title>,
    <Title>
      <span>without</span>
    </Title>,
    <Title>
      <AnimatedLineThrough
        text="bullshit"
        background="linear-gradient(to right, #9fc0c8 0%, #D1BBC3 100%)"
      />
    </Title>,
    <Subtitle>
      <span style={{ wordBreak: "break-word" }}>complete agile solutions</span>
    </Subtitle>
  ];
  const config = { mass: 5, tension: 2000, friction: 200, duration: 1000 };

  const trail = useTrail(items.length, {
    config,
    delay: 500,
    opacity: 1,
    x: 20,
    from: { opacity: 0, x: 20 }
  });

  return (
    <>
      <div className={classes.mainTrails}>
        <div className={classes.trailContainer}>
          {trail.map(({ x, ...rest }, index) => (
            <animated.div
              key={items[index]}
              className={classes.textTrails}
              //style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}
              style={{ ...rest }}
            >
              {/* <div className={classes.fluidDesign}>{items[index]}</div> */}
              {items[index]}
            </animated.div>
          ))}
        </div>
      </div>
      <HoverLetters
        hoverClasses="slide-left"
        mouseOutClasses="slide-right"
        letters={[...new Array(100)].map(() => "software").join(" ")}
      />
      <HoverLetters
        hoverClasses="slide-left"
        mouseOutClasses="slide-right"
        letters={[...new Array(100)].map(() => "hardware").join(" ")}
      />
      <HoverLetters
        hoverClasses="slide-right"
        mouseOutClasses="slide-left"
        letters={[...new Array(200)].map(() => "web").join(" ")}
      />
    </>
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
      [theme.breakpoints.up("md")]: {
        fontSize: "85px"
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "115px"
      }
    },
    mainTrails: {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignitems: "center"
    },
    trailContainer: {
      overflow: "hidden",
      marginTop: "100px",
      marginBottom: "100px"
    },
    textTrails: {
      position: "relative",
      width: "100%",
      // [theme.breakpoints.down("sm")]: {
      //   height: "70px"
      // },
      [theme.breakpoints.up("sm")]: {
        height: "95px"
      },
      [theme.breakpoints.up("lg")]: {
        height: "120px"
      },
      //lineHeight: "80px",
      //willChange: "transform, opacity",
      overflow: "hidden"
    }
  })
);

export default AnimatedHomePage;
