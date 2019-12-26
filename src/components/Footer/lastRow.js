import React from "react";
import { makeStyles } from "@material-ui/core/styles";
export default function LastRow() {
  const useStyles = makeStyles({
    flexCol: {
      width: "95%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  });
  const classes = useStyles();
  return (
    <div className={classes.flexCol}>
      <p>&copy; 2018 Boxfish Studio, all rights reserved.</p>
      <a href="https://boxfish.studio/privacy-policy/" target="about_blank">
        Privacy Policy
      </a>
    </div>
  );
}
