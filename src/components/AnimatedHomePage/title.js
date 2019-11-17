import React from "react";
import { Spring } from "react-spring/renderprops";

function Title() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: 10000 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={{ fontSize: "10rem" }}>
            Engineering <br /> without
          </div>
        </div>
      )}
    </Spring>
  );
}

export default Title;
