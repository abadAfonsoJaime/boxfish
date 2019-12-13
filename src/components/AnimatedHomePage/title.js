import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Spring } from "react-spring/renderprops";

function Title() {
  const classes = useStyles();
  return (
    <Spring
      from={{ opacity: 0, marginTop: 10000 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props} className={classes.fluidDesign}>
            <p>engineering</p>
            <p>without</p>
        </div>
      )}
    </Spring>
  );
}

const useStyles = makeStyles(theme =>
  createStyles({
    fluidDesign: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "40px"
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: "44px"
      },
      [theme.breakpoints.down('md')]: {
        fontSize: "53px"
      },
      [theme.breakpoints.between("md", "lg")]: {
        fontSize: "85"
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: "115px"
      },
    }
  })
);
export default Title;
