import React from "react";
import "./style.css";
function Button(props) {
  return (
    <div>
      <button>{props.text}</button>
    </div>
  );
}
export default Button;
