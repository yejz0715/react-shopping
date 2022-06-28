import React from "react";
import "./style.scss";
function Button(props) {
  function buttonOnClick() {
    console.log("hi");
  }
  return <button onClick={buttonOnClick}>{props.text}</button>;
}
export default Button;
