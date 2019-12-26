import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

export default function FluidText({ children }) {
  const useStyles = makeStyles(theme =>
    createStyles({
      fluidTypography: {
        fontWeight: "bold",

        [theme.breakpoints.down("md")]: {
          fontSize: "1.1rem"
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: "1rem"
        }
      }
    })
  );
  const classes = useStyles();
  return <p className={classes.fluidTypography}>{children}</p>;
}
