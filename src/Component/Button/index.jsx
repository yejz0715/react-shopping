import React from "react";
import "./style.css";
function Button(props) {
  function buttonOnClick() {
    document.location.href("../../Pages/Order");
  }
  return (
    <div>
      <button onClick={buttonOnClick}>{props.text}</button>
    </div>
  );
}
export default Button;
