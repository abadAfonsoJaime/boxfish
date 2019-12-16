import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>
  createStyles({
    fluidTypgraphy: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "27px"
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "34px"
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "40px"
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "50px"
      }
    }
  })
);
export default function Title({ children }) {
  const classes = useStyles();
  return <div className={classes.fluidTypgraphy}>{children}</div>;
}
