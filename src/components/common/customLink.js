import React from "react";
import { Link } from "react-router-dom";

import "../../styles/underlineHover.css";

export default function CustomLink({ href, text }) {
  return (
    <Link to={href} style={{ textDecoration: "none", cursor: "pointer" }}>
      <h1>
        <span className="underlineHover">{text}</span>
      </h1>
    </Link>
  );
}
