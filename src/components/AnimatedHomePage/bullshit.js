import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

function Bullshit() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1000, duration: 1000 }}
    >
      {props => (
        <div style={props}>
          <div style={{ fontSize: "10rem" }}>
            <p>bullshit</p>
          </div>
        </div>
      )}
    </Spring>
  );
}

export default Bullshit;
