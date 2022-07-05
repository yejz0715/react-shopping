import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./style.scss";
function InputText({ value, name, title, hanldeOnChangeInput }) {
  const location = useLocation();
  const [readOnly, setReadOnly] = useState(false);

  useEffect(() => {
    location.pathname === "/order" ? setReadOnly(false) : setReadOnly(true);
  }, [location.pathname]);

  return (
    <div>
      <p id="sub_tilte">{title}</p>
      <div id="text_box">
        <input
          name={name}
          type="text"
          value={value}
          id="input_text"
          onChange={hanldeOnChangeInput}
          readOnly={readOnly}
          autoComplete="off"
          required
        />
      </div>
    </div>
  );
}
export default InputText;
