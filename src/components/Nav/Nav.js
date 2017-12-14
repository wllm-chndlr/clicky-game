import React from "react";
import "./Nav.css";

const Nav = props => (
  /* <h1 className="title">{props.children}</h1>; */

  <nav className="navbar">
    <h1 className="brand">
        <a href="/">{props.children}</a>
    </h1>
    <h1 className="">You guessed incorrectly!</h1>
    <h1>Score: 0 | Top Score: 3</h1>
  </nav>
);



export default Nav;

