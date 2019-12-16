import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import "../../styles/animatedLetters.css";

function HoverLetters({ hoverClasses, mouseOutClasses, letters }) {
  /********************* Hover Hook **********************/
  const useHover = () => {
    // Reference to the element we're listen for events from
    const ref = useRef();
    // Hover state management
    const [value, setValue] = useState(false);
    // Event Handlers
    const enter = () => setValue(true);
    const leave = () => setValue(false);
    // Simple effect, just bind and unbind the event handlers
    useEffect(() => {
      const el = ref.current;
      if (el) {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
        return () => {
          // cleanup
          el.removeEventListener("mouseenter", enter);
          el.removeEventListener("mouseleave", leave);
        };
      }
    });
    return [ref, value];
  };

  /******************** CSS Styles *********************/

  const useStyles = makeStyles({
    lettersContainer: {
      whiteSpace: "nowrap",
      font: "2.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    showImage: {
      width: "300px",
      height: "300px"
      //backgroundImage: "url(/wp-content/uploads/2018/07/software.png)"
    }
  });
  const classes = useStyles();

  /******************** Render Method *********************/
  const [lettersRef, areLettersHovered] = useHover();
  return (
    <div
      ref={lettersRef}
      className={areLettersHovered ? hoverClasses : mouseOutClasses}
    >
      <p className={classes.lettersContainer}>
        <span>{letters}</span>
      </p>
      <div className={areLettersHovered ? classes.showImage : ""}></div>
    </div>
  );
}

export default HoverLetters;
