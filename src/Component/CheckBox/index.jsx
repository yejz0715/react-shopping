import React from "react";
import "./style.css";
function CheckBox(props) {
  return (
    <div>
      <input type="checkbox" id="name" />
      <label htmlFor="name">{props.children}</label>
      {/* 태그사이에 있는 내용을 보여줄때 props.children 사용 */}
    </div>
  );
}
export default CheckBox;
