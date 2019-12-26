import React from "react";
import Columns from "./columns";
import LastRow from "./lastRow";

function Footer() {
  return (
    <div
      style={{
        fontWeight: "bold",
        paddingBottom: "35px",
        borderTopStyle: "solid",
        borderTopWidth: "2px",
        borderTopColor: "#9fc0c8",
        width: "100%"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "space-around"
        }}
      >
        <Columns />
        <LastRow />
      </div>
    </div>
  );
}

export default Footer;
