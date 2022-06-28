import React from "react";
import "./style.scss";
import infoIcon from "../../img/infoBox_icon.svg";
function InfoBox({ textList }) {
  return (
    <div id="info_box">
      <img src={infoIcon} alt="icon" id="info_img" />
      <div id="textList">
        {textList.map((item, index) => (
          <p id="info_text" key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
export default InfoBox;
