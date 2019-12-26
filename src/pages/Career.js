import React from "react";

import { Container } from "@material-ui/core";

import AnimatedLineThrough from "../components/AnimatedHomePage/animatedLineThrough";
import Title from "../components/AnimatedHomePage/title";
import CustomParticles from "../components/AnimatedHomePage/customParticles";

export default function Career() {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
      }}
    >
      <Title>
        <AnimatedLineThrough
          text="bullshit"
          background="linear-gradient(to right, #9fc0c8 0%, #D1BBC3 100%)"
        />
      </Title>
      <CustomParticles />
    </Container>
  );
}
