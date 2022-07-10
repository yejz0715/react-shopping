import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./style.scss";
function InputText({ value, name, title, handleOnChangeInput }) {
  const location = useLocation();
  const [readOnly, setReadOnly] = useState(false);

  useEffect(() => {
    //orderPage-읽고 입력o/ paymentPage-읽기만
    location.pathname === "/order" ? setReadOnly(false) : setReadOnly(true);
  }, [location.pathname]);

  return (
    <div>
      <p id="sub_title">{title}</p>
      <div id="text_box">
        <input
          name={name}
          type="text"
          value={value}
          id="input_text"
          onChange={handleOnChangeInput}
          readOnly={readOnly}
          autoComplete="off"
          required
        />
      </div>
    </div>
  );
}
export default InputText;
