import React, { useEffect, useRef, useState } from "react";
import AbsoluteWrapper from "../components/AbsoluteWrapper";

import AnimatedHomePage from "../components/AnimatedHomePage";
import "../styles/animations.css";

const useHover = () => {
  // Reference to the element we're listen for events from
  const ref = useRef();
  // Hover state management
  const [value, setValue] = useState(false);
  // Event handlers
	const enter = () => setValue(true);
  const leave = () => setValue(false);
  // Simple effect, just bind and unbind the event handlers
	useEffect(() => {
    const el = ref.current;
    if (el) {
      el.addEventListener("mouseenter", enter)
		  el.addEventListener("mouseleave", leave)
		  return () => {
			  el.removeEventListener("mouseenter", enter);
			  el.removeEventListener("mouseleave", leave);
      };
    }
  });
  return [ref, value];
}



function Home() {
	const [softwareRef, isSoftwareHovered] = useHover();
	const [hardwareRef, isHardwareHovered] = useHover();
	const [webRef, isWebHovered] = useHover();
  return (
    <AbsoluteWrapper>

      <AnimatedHomePage />
      <div
        ref={softwareRef}
        className={isSoftwareHovered ? "slide-left" : "slide-right"}
      >
        <p className="flex-container">
          <span>
            software software software software software software software
            software software software software software software software
            software software software software software software software
            software software software software software software software
          </span>
        </p>
      </div>
      <div
        ref={hardwareRef}
        className={isHardwareHovered ? "slide-right" : "slide-left"}
      >
        <p className="flex-container">
          <span>
            hardware hardware hardware hardware hardware hardware hardware
            hardware hardware hardware hardware hardware hardware hardware
            hardware hardware hardware hardware hardware hardware hardware
            hardware hardware hardware hardware hardware hardware hardware
          </span>
        </p>
      </div>
      <div
        ref={webRef}
        className={isWebHovered ? "slide-left" : "slide-right"}
      >
        <p className="flex-container">
          <span>
            web web web web web web web web web web web web web web web web web
            web web web web web web web web web web web web web web web web web
            web web web web web web web web web web web web web web web web web
            web web web web web
          </span>
        </p>
      </div>
    </AbsoluteWrapper>
  );
};

export default Home;
