import React from "react";

import "../../styles/animatedButton.css";

export default function CustomButton({ text }) {
  return (
    <button
      id="animatedButton"
      type="button"
      onClick={() => alert("No está disponible")}
    >
      {text}
    </button>
  );
}
