import React from "react";
import { Link } from "react-router-dom";

export default function FirstColumn() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center"
      }}
    >
      <div>
        <Link to="/" style={{ cursor: "pointer" }}>
          <span>Home</span>
        </Link>
      </div>
      <div>
        <Link to="/work" style={{ cursor: "pointer" }}>
          <span>Work</span>
        </Link>
      </div>
      <div>
        <Link to="/about" style={{ cursor: "pointer" }}>
          <span>About</span>
        </Link>
      </div>
      <div>
        <Link to="/career" style={{ cursor: "pointer" }}>
          <span>Career</span>
        </Link>
      </div>
      <div>
        <Link to="/contact" style={{ cursor: "pointer" }}>
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
}
