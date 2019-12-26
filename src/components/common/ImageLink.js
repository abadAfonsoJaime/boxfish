import React from "react";

export default function ImageLink({ img, link }) {
  return (
    <div style={{ margin: 20 }}>
      <a href={link} target="about_blank">
        <img src={img} alt="logo" />
      </a>
    </div>
  );
}
