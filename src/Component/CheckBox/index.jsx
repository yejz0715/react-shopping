import React from "react";
import "./style.css";
function CheckBox(props) {
  return (
    <div>
      <input type="checkbox" id="name" />
      <label htmlFor="name">{props.name}</label>
    </div>
  );
}
export default CheckBox;
