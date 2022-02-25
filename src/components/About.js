import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This website was created in 1891</p>
      <Link to="/">Go home</Link>
    </div>
  );
};

export default About;
