import React from "react";
import "./style.css";
function Title(props) {
  return (
    <div>
      <h3 id="title_text">{props.text}</h3>
    </div>
  );
}
export default Title;
