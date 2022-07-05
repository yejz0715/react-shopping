import "./style.scss";
import classNames from "classnames";
import { useState } from "react";
import { useEffect } from "react";
function CheckBox({ name, price, img, checkList, setCheckList }) {
  const [isChecked, setCheck] = useState(false); //체크되어있는지 여부,isChecked-boolean
  const checked = () => {
    setCheck((prev) => !prev); //클릭하면 상태 반대(true<->false)
  };

  useEffect(() => {
    isChecked
      ? setCheckList([...checkList, { name: name, price: price }])
      : setCheckList(checkList.filter((item) => item.name !== name));
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
          alt="fruit"
        />
        <label className={classNames("checkbox_text", "bottom")}>
          {price}원
        </label>
      </div>
    </div>
  );
}
export default CheckBox;
