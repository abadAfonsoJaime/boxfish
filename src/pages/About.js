import React from "react";
import AbsoluteWrapper from "../components/AbsoluteWrapper";
import "../styles/lineThrough.css";

const About = () => {
  return (
    <AbsoluteWrapper>
      <div>
        <h1 className="strike">About</h1>
      </div>
    </AbsoluteWrapper>
  );
};

export default About;
