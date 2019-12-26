import React from "react";

export default function SecondColumn() {
  return (
    <div
      style={{
        marginLeft: "10px",
        marginRight: "10px",
        display: "flex",
        textAlign: "center"
      }}
    >
      <p>
        Boxfish Studio
        <span style={{ display: "block", textAlign: "center" }}>
          <a
            href="https://www.google.com/maps/place/Boxfish+Studio/@40.4362552,-3.6765382,17z/data=!3m1!4b1!4m5!3m4!1s0xd4229104072928d:0xf5a7f3d7e8a3a26!8m2!3d40.4362552!4d-3.6743495"
            target="about_blank"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <span>Calle de Méjico 11, bj. der. 4D 28028 Madrid, Spain</span>
          </a>
        </span>
      </p>
    </div>
  );
}
