import React from "react";
import "./Message.css";

const Message = props => (
    <div id="rw">
        {props.rightWrong}
    </div>
);

export default Message;