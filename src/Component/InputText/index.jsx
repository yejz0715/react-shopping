import React from "react";
import "./style.scss";
function InputText({ title }) {
  return (
    <div>
      <p id="sub_tilte">{title}</p>
      <div id="text_box"></div>
    </div>
  );
}
export default InputText;
