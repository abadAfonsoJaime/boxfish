import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSpring, animated } from "react-spring";

import Title from "./title";
import Subtitle from "./subtitle";
import CustomParticles from "./customParticles";
import AnimatedLineThrough from "./animatedLineThrough";

function AnimatedHomePage() {
  const useStyles = makeStyles(theme => ({
    responsive: {
      [theme.breakpoints.down("sm")]: {
        width: "90%",
        margin: "5px auto"
      },
      [theme.breakpoints.between("sm", "md")]: {
        width: "80%",
        margin: "10px auto"
      },
      [theme.breakpoints.up("md")]: {
        width: "70%",
        margin: "15px auto"
      }
    },
    titleBox: {
      [theme.breakpoints.down("sm")]: {
        height: "50px"
      },
      [theme.breakpoints.up("sm")]: {
        height: "65px"
      },
      [theme.breakpoints.up("md")]: {
        height: "80px"
      },
      [theme.breakpoints.up("lg")]: {
        height: "100px"
      }
    }
  }));
  const classes = useStyles();

  const growLetters = useSpring({
    from: {
      top: 0,
      transform: "scaleY(0)"
    },
    to: {
      top: 10,
      transform: "scaleY(1)"
    },
    config: { duration: 700 },
    delay: 1000
  });
  const fadeParticles = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 4000
  });

  return (
    <div>
      <div className={classes.responsive}>
        <animated.div style={growLetters} className={classes.titleBox}>
          <Title>
            <span>engineering</span>
          </Title>
        </animated.div>
      </div>
      <div className={classes.responsive}>
        <div style={{ position: "relative" }}>
          <Box>
            <animated.div style={growLetters} className={classes.titleBox}>
              <Title>
                <span>without</span>
              </Title>
            </animated.div>
            <animated.div style={growLetters} className={classes.titleBox}>
              <Title>
                <AnimatedLineThrough
                  text="bullshit"
                  background="linear-gradient(to right, #9fc0c8 0%, #D1BBC3 100%)"
                />
              </Title>
            </animated.div>
            <animated.div style={growLetters}>
              <Subtitle>
                <span style={{ wordBreak: "break-word" }}>
                  complete agile solutions
                </span>
              </Subtitle>
            </animated.div>
          </Box>
          <Box
            zIndex="modal"
            style={{ position: "absolute", top: -10, left: "50%" }}
          >
            <animated.div style={fadeParticles}>
              <CustomParticles />
            </animated.div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default AnimatedHomePage;
