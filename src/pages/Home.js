import React from "react";

import { useSpring, animated } from "react-spring";
import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// import AbsoluteWrapper from "../components/AbsoluteWrapper";
import AnimatedHomePage from "../components/AnimatedHomePage";
import CustomLink from "../components/common/customLink";

import SoftwareImage from "../assets/software.png";
import HardwareImage from "../assets/hardware.png";
import WebImage from "../assets/web.png";

import Footer from "../components/footer";
import HoverLetters from "../components/hoverLetters";

function Home() {
  const fadeRest = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    //config: { duration: 400 },
    delay: 1000
  });
  return (
    <>
      <AnimatedHomePage />
      <animated.div style={fadeRest}>
        <Container>
          <CustomLink href="/work" text="Work" />
          <CustomLink href="/about" text="About" />
          <CustomLink href="/career" text="Career" />
          <CustomLink href="/contact" text="Contact" />
        </Container>
        <div style={{ paddingBottom: "200px" }}>
          <HoverLetters
            hoverClasses="slide-right"
            mouseOutClasses="slide-left"
            letters={[...new Array(20)].map(() => "software").join(" ")}
            image={SoftwareImage}
          />
          <HoverLetters
            hoverClasses="slide-left"
            mouseOutClasses="slide-right"
            letters={[...new Array(20)].map(() => "hardware").join(" ")}
            image={HardwareImage}
          />
          <HoverLetters
            hoverClasses="slide-right"
            mouseOutClasses="slide-left"
            letters={[...new Array(35)].map(() => "web").join(" ")}
            image={WebImage}
          />
        </div>

        <br />
        <br />

        <Footer />
      </animated.div>
    </>
  );
}
/*  */

export default Home;
