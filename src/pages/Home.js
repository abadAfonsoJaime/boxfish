import React, { useEffect, useRef, useState } from "react";
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
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseenter", enter)
		  node.addEventListener("mouseleave", leave)
		  return () => {
			  node.removeEventListener("mouseenter", enter);
			  node.removeEventListener("mouseleave", leave);
      };
    }
  }, [ref.current] // Recall only if ref changes)
  );
  return [ref, value];
}

function Home() {
	const [softwareRef, isSoftwareHovered] = useHover();
	const [hardwareRef, isHardwareHovered] = useHover();
	const [webRef, isWebHovered] = useHover();
  return (
    <>
      <AnimatedHomePage />
      <div style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
        without
      </div>
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
    </>
  );
};

export default Home;
