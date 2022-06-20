import React from "react";
import "./style.css";
function Button(props) {
  function buttonOnClick() {
    console.log("hi");
  }
  return (
    <div>
      <button onClick={buttonOnClick}>{props.text}</button>
    </div>
  );
}
export default Button;
