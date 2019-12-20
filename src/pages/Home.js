import React from "react";
import { useSpring, animated } from "react-spring";
import { Box, Container } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

// import AbsoluteWrapper from "../components/AbsoluteWrapper";
import Title from "../components/AnimatedHomePage/title";
import Subtitle from "../components/AnimatedHomePage/subtitle";
import AnimatedLineThrough from "../components/AnimatedHomePage/animatedLineThrough";
import CustomParticles from "../components/AnimatedHomePage/customParticles";
import "../styles/customCSS.css";

import HoverLetters from "../components/AnimatedHomePage/hoverLetters";

function Home() {
  const useStyles = makeStyles(theme =>
    createStyles({
      titleBox: {
        //width: "100%",
        [theme.breakpoints.down("sm")]: {
          height: "70px"
        },
        [theme.breakpoints.up("sm")]: {
          height: "85px"
        },
        [theme.breakpoints.up("md")]: {
          height: "100px"
        },
        [theme.breakpoints.up("lg")]: {
          height: "120px",
          marginBottom: "3px"
        },
        borderStyle: "solid",
        borderColor: "blue",
        borderWidth: "2px"
      },
      container: {
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
        },
        borderStyle: "solid",
        borderRadius: 16,
        borderColor: theme.palette.primary.main
      },
      content: {
        display: "flex",
        flexWrap: "wrap",
        [theme.breakpoints.down("md")]: {
          justifyContent: "space-around"
        },
        [theme.breakpoints.between("md", "lg")]: {
          justifyContent: "space-between"
        },
        [theme.breakpoints.up("lg")]: {
          justifyContent: "space-around"
        },
        alignItems: "center"
      }
    })
  );
  const classes = useStyles();
  const growLetters = useSpring({
    from: {
      // innerHeight: 0,
      //color: "#8fa5b6",
      // transform: "matrix(0,0,0,0,0,0)"
      top: 0,
      transform: "scaleY(0)"
    },
    to: {
      // innerHeight: 80,
      // transform: "matrix(1,0,0,1,0,0)"
      top: 10,
      transform: "scaleY(1)"
    },
    config: { duration: 400 },
    delay: 600
  });
  // const AnimatedTitle = animated(Title);
  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <div
            style={{
              //width: "100%",
              height: "100%",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignitems: "center"
            }}
          >
            <animated.div style={growLetters} className={classes.titleBox}>
              <Title>
                <span>engineering</span>
              </Title>
            </animated.div>
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
          </div>
          <div>
            <CustomParticles />
          </div>
        </div>
      </div>

      <Container>
        <Box my={2}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>

      <HoverLetters
        hoverClasses="slide-right"
        mouseOutClasses="slide-left"
        letters={[...new Array(120)].map(() => "software").join(" ")}
      />
      <HoverLetters
        hoverClasses="slide-left"
        mouseOutClasses="slide-right"
        letters={[...new Array(120)].map(() => "hardware").join(" ")}
      />
      <HoverLetters
        hoverClasses="slide-right"
        mouseOutClasses="slide-left"
        letters={[...new Array(250)].map(() => "web").join(" ")}
      />
    </>
  );
}
/*  */

export default Home;
