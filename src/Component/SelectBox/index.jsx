import React, { useState, useRef, useEffect } from "react";
import { optionListData } from "../../data/order/dummy";
import "./style.scss";
function SelectBox({ title }) {
  const optionListRef = useRef(null);
  const [isShow, setShow] = useState(false); //옵션리스트가 보이는지 여부
  const [option, setOption] = useState(optionListData[0].text); //현재 선택한 옵션이 무엇인지
  //current : 현재 curOption, previous : prev

  const handleOnClickOption = (e) => {
    setOption(e.target.innerText); //선택한 옵션
    setShow(false);
  };
  useEffect(() => {
    if (optionListRef.current !== null) {
      optionListRef.current.style.maxHeight = isShow ? "none" : "0";
    }
  }, [isShow]);
  return (
    <div>
      <div id="select_sub_title">{title}</div>

      <div id="select_list">
        <label
          id="option_title"
          onClick={() => {
            setShow((prev) => !prev);
            console.log(isShow);
          }}
        >
          {option}
        </label>
        <ul ref={optionListRef} onClick={handleOnClickOption} id="option_list">
          {optionListData.map((option) => (
            <li id="option_text" key={option.id} onClick={handleOnClickOption}>
              {option.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default SelectBox;
