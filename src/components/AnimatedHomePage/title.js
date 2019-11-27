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
          <div>
            <p style={{ fontSize: "3rem" }}>Engineering</p>
          </div>
        </div>
      )}
    </Spring>
  );
}

export default Title;
