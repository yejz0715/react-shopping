import React from "react";
import "./style.scss";
function SubTitle({ title, text }) {
  return (
    <div>
      <h3 id="sub_box_title">{title}</h3>
      <p id="explanation">{text}</p>
    </div>
  );
}
export default SubTitle;
