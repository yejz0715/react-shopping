import React from "react";
import "./style.scss";
import infoIcon from "../../img/infoBox_icon.svg";
function InfoBox({ textList }) {
  return (
    <div id="info_box">
      <img src={infoIcon} alt="icon" id="info_img" />
      <div id="textList">
        {textList.map((item, index) => (
          <label id="info_text" key={index}>
            {item}
          </label>
        ))}
      </div>
    </div>
  );
}
export default InfoBox;
