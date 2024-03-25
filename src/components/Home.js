import React from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {

  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to our website!</p>
      <button className={classes.home_button}>
        <Link to="/signup">Signup</Link>
      </button>
      <button className={classes.home_button}>
        <Link to="/signin">Signin</Link>
      </button>
      <button className={classes.home_button}>
        <Link to="/auth">Profile</Link>
      </button>
    </div>
  );
}

export default Home;
