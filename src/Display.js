import React from "react";
import "./Display.css";

export default function Display({ displayEverything }) {
  return (
    <div id="display">
      <p>{displayEverything}</p>
    </div>
  );
}
