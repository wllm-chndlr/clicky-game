import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
      <div className="brand animated lightSpeedIn">
        <a href="/clicky-game/">{props.title}</a>
      </div>

      <div className="scores">
        <div className="current-score">
          Current Score: {props.score}
        </div>
        <div className="current-score">
          Top Score: {props.topScore}
        </div>
      </div>
  </nav>
);

export default Nav;