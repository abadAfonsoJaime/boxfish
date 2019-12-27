import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import "../styles/animatedLetters.css";

function HoverLetters({ hoverClasses, mouseOutClasses, letters, image }) {
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

  const useStyles = makeStyles(theme => ({
    lettersContainer: {
      marginTop: "100px",
      cursor: "pointer",
      whiteSpace: "nowrap",
      fontSize: "1.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    showImage: {
      position: "absolute",
      top: theme.spacing(-14),
      right: theme.spacing(10)
    },
    hideImage: {
      display: "none"
    }
  }));
  const classes = useStyles();

  /******************** Render Method *********************/
  const [lettersRef, areLettersHovered] = useHover();
  const [imageRef, isImageHovered] = useHover();
  return (
    <div style={{ maxWidth: "100%", position: "relative" }}>
      <div
        ref={lettersRef}
        className={areLettersHovered ? hoverClasses : mouseOutClasses}
      >
        <p className={classes.lettersContainer}>
          <span>{letters}</span>
        </p>
      </div>
      <div
        ref={imageRef}
        className={
          areLettersHovered || isImageHovered
            ? classes.showImage
            : classes.hideImage
        }
      >
        <img src={image} alt="image" width="425.6" height="348.4" />
      </div>
    </div>
  );
}

export default HoverLetters;
