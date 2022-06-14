import React from "react";
import "./style.css";
function InfoBox(props) {
  return (
    <div>
      <div id="info_box">
        <label>이미지</label>
        <span id="info_text">{props.text}</span>
      </div>
    </div>
  );
}
export default InfoBox;
