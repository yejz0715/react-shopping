import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./style.scss";
function InputText(props) {
  const location = useLocation(); //1 readOnly 사용해서 true-order페이지 false-payment 페이지 보이게
  const [inputText, setInputText] = useState("");
  const [readOnly, setReadOnly] = useState(false);
  location.pathname === "/order" ? console.log("a") : console.log("b");
  const handleOnChangeText = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  //2 order에 입력값 저장해서 payment에  보여지게
  return (
    <div>
      <p id="sub_tilte">{props.title}</p>
      <div id="text_box">
        <input
          type="text"
          value={inputText}
          id="input_text"
          onChange={handleOnChangeText}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
}
export default InputText;
