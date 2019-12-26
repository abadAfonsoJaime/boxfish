import React from "react";
import { Container } from "@material-ui/core";

import SoftwareImage from "../assets/software.png";
import HardwareImage from "../assets/hardware.png";
import WebImage from "../assets/web.png";

import { CustomLink } from "../components/common";
import HoverLetters from "../components/HoverLetters";

function Work() {
  return (
    <>
      <Container>
        <CustomLink href="/work" text="Work" />
      </Container>
      <div style={{ overflow: "hidden", paddingBottom: "150px" }}>
        <HoverLetters
          hoverClasses="slide-right"
          mouseOutClasses="slide-left"
          letters={[...new Array(50)].map(() => "software").join(" ")}
          image={SoftwareImage}
        />
        <HoverLetters
          hoverClasses="slide-left"
          mouseOutClasses="slide-right"
          letters={[...new Array(30)].map(() => "hardware").join(" ")}
          image={HardwareImage}
        />
        <HoverLetters
          hoverClasses="slide-right"
          mouseOutClasses="slide-left"
          letters={[...new Array(70)].map(() => "web").join(" ")}
          image={WebImage}
        />
      </div>
    </>
  );
}

export default Work;
