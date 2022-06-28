import "./style.scss";
import classNames from "classnames";
import { useState } from "react";
import { useEffect } from "react";
function CheckBox({ name, price, img, checkList, setCheckList }) {
  const [isChecked, setCheck] = useState(false);
  const checked = () => {
    setCheck((prev) => !prev);
  };
  useEffect(() => {
    isChecked
      ? setCheckList([...checkList, name])
      : setCheckList(checkList.filter((item) => item !== name));
  }, [isChecked]);
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
          src={"/assets/check_icon.svg"}
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
