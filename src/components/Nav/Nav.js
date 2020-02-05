import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
      <div className="brand animated lightSpeedIn nav-item">
        <a href="/clicky-game/">{props.title}</a>
      </div>

      <div class="nav-item" id="cur-sco">Current Score: {props.score}</div>

      <div class="nav-item" id="top-sco">Top Score: {props.topScore}</div>
  </nav>
);

export default Nav;