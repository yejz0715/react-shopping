import React from "react";
import "./style.css";
function InfoBox(props) {
  return (
    <div>
      <div id="info_box">
        <label>
          <img
            src="assets/img/infoBox_icon.svg"
            alt="icon"
            style={{ width: "24px", height: "24px", margin: "17px" }}
          />
        </label>
        <span id="info_text">{props.text}</span>
      </div>
    </div>
  );
}
export default InfoBox;
