import React from "react";
import "./style.scss";
function InputText({ title }) {
  return (
    <div>
      <p id="subTilte">{title}</p>
      <div id="text_box"></div>
    </div>
  );
}
export default InputText;
