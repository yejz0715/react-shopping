import React from "react";
import "./style.css";
import infoIcon from "../../img/infoBox_icon.svg";
function InfoBox(props) {
  return (
    <div>
      <div id="info_box">
        <img
          src={infoIcon}
          alt="icon"
          width="24px"
          height="24px"
          style={{ margin: "17px" }}
        />

        <label id="info_text">{props.text}</label>
      </div>
    </div>
  );
}
export default InfoBox;
