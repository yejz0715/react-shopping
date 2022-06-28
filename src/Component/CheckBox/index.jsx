import "./style.scss";
import icon from "../../img/check_icon.svg";
import classNames from "classnames";
import { useState } from "react";
function CheckBox({ name, price, img }) {
  const [isChecked, setCheck] = useState(false);

  const checked = () => {
    setCheck((prev) => !prev);
  };
  return (
    <div id="check_container" style={{ backgroundImage: `url(${img})` }}>
      <div
        id="check_back"
        className={classNames({ isChecked })}
        onClick={checked}
      >
        <label className={classNames("checkbox_text", "top")}>{name}</label>
        <img
          className={classNames("check_icon", { isChecked })}
          src={icon}
          alt="friut"
        />
        <label className={classNames("checkbox_text", "bottom")}>
          {price}원
        </label>
      </div>
    </div>
  );
}
export default CheckBox;
