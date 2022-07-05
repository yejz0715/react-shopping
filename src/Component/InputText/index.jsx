import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./style.scss";
function InputText(props) {
  const location = useLocation(); //1 readOnly 사용해서 true-order페이지 false-payment 페이지 보이게
  //const [isSow, setShow] = useState("");
  const [readOnly, setReadOnly] = useState(false);
  location.pathname === "/order" ? console.log("a") : console.log("b");
  // const handleText = (e) => {
  //   if (isSow !== 0) setShow(e.target.value);
  //   console.log(isSow);
  // };

  //2 order에 입력값 저장해서 payment에  보여지게
  return (
    <div>
      <p id="sub_tilte">{props.title}</p>
      <div id="text_box">
        <input
          type="text"
          value={props.isSow}
          id="input_text"
          onChange={props.handleText}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
}
export default InputText;
