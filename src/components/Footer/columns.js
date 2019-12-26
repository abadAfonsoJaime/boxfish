import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FirstColumn from "./firstColumn";
import SecondColumn from "./secondColumn";
import ThirdColumn from "./thirdColumn";

export default function Columns() {
  const useStyles = makeStyles({
    flexCol: {
      width: "100%",
      paddingLeft: "10px",
      paddingTop: "10px",
      paddingRight: "10px",
      paddingBottom: "10px",
      display: "flex",
      justifyContent: "space-evenly",
      alignContent: "space-around"
    }
  });
  const classes = useStyles();
  return (
    <div className={classes.flexCol}>
      <FirstColumn />
      <SecondColumn />
      <ThirdColumn />
    </div>
  );
}
