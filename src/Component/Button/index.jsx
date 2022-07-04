import React from "react";
import "./style.scss";
function Button({ handleOnClick, text }) {
  return <button onClick={handleOnClick}>{text}</button>;
  //handleOnClick: list에서 체크한 과일항목을 order로 넘겨줌
}
export default Button;
