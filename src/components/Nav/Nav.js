import React from "react";
import "./Nav.css";

const Nav = props => (
  /* <h1 className="title">{props.children}</h1>; */

  <nav className="navbar">

    <h1 className="brand">
        <a href="/">{props.title}</a>
    </h1>
  
    <h1>Right/wrong: {props.rightwrong}</h1>
  
    <h1>Score: {props.score} | Top Score: {props.topscore}</h1>
  
  </nav>
);



export default Nav;