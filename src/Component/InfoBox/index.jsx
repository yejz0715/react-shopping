import React from "react";
import "./style.css";
import infoIcon from "../../img/infoBox_icon.svg";
function InfoBox(props) {
  return (
    <div>
      <div id="info_box">
        <img id="info_img" src={infoIcon} alt="icon" />

        <label id="info_text">{props.text}</label>
      </div>
    </div>
  );
}
export default InfoBox;
