import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSpring, animated } from "react-spring";

import AnimatedHomePage from "../components/AnimatedHomePage";
import { About, Contact, Work } from "../pages";
import Collabs from "../components/Collabs";
import Footer from "../components/Footer";

function Home() {
  const useStyles = makeStyles({
    container: { marginTop: "100px" }
  });
  const classes = useStyles();
  const fadeRest = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 3500
  });
  return (
    <>
      <AnimatedHomePage />
      <animated.div style={fadeRest} className={classes.container}>
        <Work />
        <About />
        <br />
        <Collabs />
        <br />
        <Contact />
        <br />
        <br />
        <Footer />
      </animated.div>
    </>
  );
}
/*  */

export default Home;
