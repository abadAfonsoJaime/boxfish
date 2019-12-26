import React from "react";
import { Container } from "@material-ui/core";

import { CustomButton, CustomLink, FluidText } from "../components/common";

const Contact = () => {
  return (
    <Container>
      <CustomLink href="/contact" text="Contact" />
      <FluidText>
        <span>
          Have a project you’d like to discuss? We are glad to help at any stage
          of development.
        </span>
      </FluidText>
      <CustomButton text="say hi" />
    </Container>
  );
};

export default Contact;
