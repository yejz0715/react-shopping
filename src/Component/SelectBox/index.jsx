import React, { useState } from "react";
function SelectBox() {
  const optionList = [
    { id: 1, text: "도착하면 연락주세요" },
    { id: 2, text: "부재시 전화주세요" },
    { id: 3, text: "집 앞에 놓고 벨 눌러주세요" },
    { id: 4, text: "직접 수령할게요" },
  ];
  // const [list, setList] = useState(false);
  const [option, setOptions] = useState(optionList[0].text);
  const handleOnClickOption = (e) => {
    setOptions(e.target.innerText); //선택한 옵션
  };
  return (
    <div onClick={handleOnClickOption}>
      <label>{option}</label>
      <ul id="selectOptions">
        {optionList.map((option) => (
          <li key={option.id} onClick={handleOnClickOption}>
            {option.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SelectBox;
