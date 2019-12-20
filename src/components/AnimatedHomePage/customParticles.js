import React from "react";
import Particles from "react-particles-js";
import "../../styles/particles.css";
function CustomParticles() {
  const configParticles = {
    particles: {
      number: {
        value: 6
        // density: {
        //   enable: true,
        //   value_area: 50
        // }
      },
      polygon: {
        enable: true,
        type: "inside",
        move: {
          radius: 10
        }
      },
      shape: {
        stroke: {
          width: 7,
          color: "#ffe0b2"
        }
      },
      line_linked: {
        enable_auto: true,
        distance: 300,
        opacity: 1,
        color: "#90a4ae",
        width: 1
      }
    }
  };

  return (
    <Particles
      width="100%"
      height="500px"
      className="wrap"
      params={configParticles}
    />
  );
}

export default CustomParticles;
