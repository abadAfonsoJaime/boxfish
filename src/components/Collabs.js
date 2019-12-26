import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ImageLink from "./common/ImageLink";
import Fazua from "../assets/fazua_black150.png";
import Synapticon from "../assets/synapticon_black150.gif";
import Forscience from "../assets/3dforscience_logo_black150.png";
import ThirdBridge from "../assets/thirdbridge_black150.png";
import Iota from "../assets/iotafoundation90x90.png";
import Lookiero from "../assets/lookiero.png";

function Collabs() {
  const useStyles = makeStyles({
    flexContainer: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "space-around"
    }
  });
  const classes = useStyles();
  return (
    <Container>
      <h1>Collabs</h1>
      <div className={classes.flexContainer}>
        <ImageLink img={Fazua} link="https://fazua.com" />
        <ImageLink img={Synapticon} link="https://synapticon.com" />
        <ImageLink img={Forscience} link="https://3dforscience.com" />
        <ImageLink img={ThirdBridge} link="https://fazua.com" />
        <ImageLink
          img={Iota}
          link="https://www.iota.org/the-foundation/the-iota-foundation"
        />
        <ImageLink img={Lookiero} link="https://lookiero.com" />
      </div>
    </Container>
  );
}

export default Collabs;
