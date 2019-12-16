import React from "react";
import { useSpring, animated } from "react-spring";
import "../styles/customCSS.css";
const Bullshit = () => {
  const lineThrough = useSpring({
    from: {
      width: "0%",
      top: "-17%",
      left: "0",
      height: "2px",
      background: "linear-gradient(to right, #9fc0c8 0%, #D1BBC3 100%)"
    },
    to: {
      width: "100%"
    },
    config: { duration: 2000 },
    delay: 2000
  });

  return (
    <div className="container">
      <span className="texto">
        bullshit
        <animated.p style={lineThrough} className="overIndex"></animated.p>
      </span>
    </div>
  );
};

export default Bullshit;
