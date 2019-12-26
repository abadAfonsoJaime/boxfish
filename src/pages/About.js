import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { CustomLink, CustomButton, FluidText } from "../components/common";
import Founders from "../assets/founders.png";

function About() {
  const useStyles = makeStyles({
    flexHorizontal: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around"
    },
    flexVertical: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  });
  const classes = useStyles();
  return (
    <Container>
      <CustomLink href="/about" text="About" />
      <FluidText>
        <span>
          Boxfish Studio is a technology company focused on innovation.
        </span>
      </FluidText>
      <CustomButton text="> tell me more" />
      <br />
      <img src={Founders} alt="founders" width="100%" />
      <br />
      <div className={classes.flexHorizontal}>
        <div className={classes.flexVertical}>
          <FluidText>
            <a
              href="https://www.linkedin.com/in/agustintena/"
              target="about_blank"
            >
              Agustín Tena
            </a>
          </FluidText>
          <FluidText>
            <span>Head & Co-Founder</span>
          </FluidText>
        </div>
        <div className={classes.flexVertical}>
          <FluidText>
            <a
              href="https://www.linkedin.com/in/begonaalvarezd/"
              target="about_blank"
            >
              Begoña Alvarez
            </a>
          </FluidText>
          <FluidText>
            <span>Heart & Co-Founder</span>
          </FluidText>
        </div>
      </div>
    </Container>
  );
}

export default About;
