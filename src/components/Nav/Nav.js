import React from "react";
import "./Nav.css";

const Nav = props => (
  /* <h1 className="title">{props.children}</h1>; */

  <nav>
    <ul>

      <li className="brand">
        <a href="/">{props.title}</a>
      </li>

      <li id="rw">{props.rightwrong}</li>

      <li>
        Current Score: {props.score}
      </li>

      <li>
        Top Score: {props.topscore}
      </li>

    </ul>
  </nav>
);

export default Nav;