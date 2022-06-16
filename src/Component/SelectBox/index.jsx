import React from "react";
function SelectBox(props) {
  return (
    <div>
      <label>{props.text}</label>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  );
}
export default SelectBox;
