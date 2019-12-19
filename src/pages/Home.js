import React from "react";

import AnimatedHomePage from "../components/AnimatedHomePage";
import "../styles/ex.css";

import HoverLetters from "../components/AnimatedHomePage/hoverLetters";

function Home() {
  // const appear = useSpring({
  //   from: { opacity: 0, transform: "scaleY(0)" },
  //   to: { opacity: 1, transform: "scaleY(10px)" },
  //   delay: 2000,
  //   config: { duration: 3000 }
  // });
  return <AnimatedHomePage />;
}
/* <HoverLetters
        hoverClasses="slide-right"
        mouseOutClasses="slide-left"
        letters={[...new Array(100)].map(() => "software").join(" ")}
      />
      <HoverLetters
        hoverClasses="slide-left"
        mouseOutClasses="slide-right"
        letters={[...new Array(100)].map(() => "hardware").join(" ")}
      />
      <HoverLetters
        hoverClasses="slide-right"
        mouseOutClasses="slide-left"
        letters={[...new Array(200)].map(() => "web").join(" ")}
      /> */

export default Home;
