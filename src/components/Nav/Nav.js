import React from "react";
import "./Nav.css";

const Nav = props => 

/* <h1 className="title">{props.children}</h1>; */

<nav className="nav">
  {/* {props.children} */}
  <div className="nav-wrapper">
    <a href="#" className="brand-logo right">
      Simpsons Memory Game
    </a>
    <ul id="nav-mobile" className="left hide-on-med-and-down">
      <li>
        <a href="#">Start</a>
      </li>
      <li>
        <a href="#">Reset</a>
      </li>
      <li>
        <a href="#">Leaderboard</a>
      </li>
    </ul>
  </div>
</nav>;





export default Nav;
