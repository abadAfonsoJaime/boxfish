import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>
  createStyles({
    fluidTypgraphy: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "44px"
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "53px"
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "85px"
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "115px"
      }
    }
  })
);
export default function Title({ children }) {
  const classes = useStyles();
  return <div className={classes.fluidTypgraphy}>{children}</div>;
}
