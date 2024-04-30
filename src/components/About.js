import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h1>About Me</h1>
    <p>Any content of your choosing</p>
    <img src={image} alt="I made this" />
  </div>;
}

export default About;
