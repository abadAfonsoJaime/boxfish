import React from "react";

import { Container } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import AbsoluteWrapper from "../components/AbsoluteWrapper";
import AnimatedLineThrough from "../components/AnimatedHomePage/animatedLineThrough";
import Title from "../components/AnimatedHomePage/title";

function Career() {
  const classes = useStyles();

  return (
    <AbsoluteWrapper>
      <Container>
        <Title>
          <AnimatedLineThrough
            className={classes.fluidDesign}
            text="bullshit"
            background="linear-gradient(to right, #9fc0c8 0%, #D1BBC3 100%)"
          />
        </Title>
      </Container>
    </AbsoluteWrapper>
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
