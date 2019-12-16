import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../../styles/lineThrough.css";

function AnimatedLineThrough({ background, text }) {
  const useStyles = makeStyles({
    gradientLetters: {
      background: background,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
  });
  console.log("background prop: ", background);
  const classes = useStyles();
  return (
    <div>
      <span className={`${classes.gradientLetters} strike`}>{text}</span>
    </div>
  );
}

export default AnimatedLineThrough;
