import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  // <div className="card">
  //   <div className="img-container">
  //     <img alt={props.name} src={props.image} />
  //   </div>
  //   <span onClick={() => props.removeFriend(props.id)} className="remove">
  //   </span>
  // </div>
  <div className="col s6 m4">
    <div className="card">
      <div className="card-image">
        <img alt={props.name} src={props.image} />
      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove">
      </span>
    </div>
  </div>
);

export default FriendCard;



/* <div
  role="img"
  aria-label="click item"
  class="click-item shake"
  style="background-image: url(&quot;/assets/images/meeseeks.png&quot;);"
/>; */


/* <div class="row">
  <div class="col s12 m7">
    <div class="card">
      <div class="card-image">
        <img src="images/sample-1.jpg">
        <span class="card-title">Card Title</span>
      </div>
    </div>
  </div>
</div> */