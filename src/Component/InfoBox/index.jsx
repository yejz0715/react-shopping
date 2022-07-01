import React from "react";
import "./style.scss";
function InfoBox({ textList }) {
  return (
    <div id="info_box">
      <img src={"/assets/infoBox_icon.svg"} alt="icon" id="info_img" />
      <div id="text_list">
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
