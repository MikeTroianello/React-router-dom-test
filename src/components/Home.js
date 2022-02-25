import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <p>Welcome to our website, hope you enjoy it!</p>
      <Link to="/about">See our about page</Link>
    </div>
  );
};

export default Home;
