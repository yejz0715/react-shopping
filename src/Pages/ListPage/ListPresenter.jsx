import React from "react";
import "./style.scss";
import Title from "../../Component/Title";
import InfoBox from "../../Component/InfoBox";
import Button from "../../Component/Button";
import { Link } from "react-router-dom";
import CheckBox from "../../Component/CheckBox";
const ListPresenter = ({
  fruitList,
  checkList,
  setCheckList,
  handleCalcFruit,
}) => {
  return (
    <div id="list_container">
      <div id="bar"></div>
      <Title text="SHOPPING LIST" />
      <InfoBox textList={["구매하실 상품을 선택하주세요"]} />
      <div id="checkbox_list">
        {fruitList.map((item) => (
          <CheckBox
            key={item.id}
            name={item.name}
            price={item.price}
            img={item.img}
            checkList={checkList}
            setCheckList={setCheckList}
          />
        ))}
      </div>
      <Link to="/order">
        <Button text="구매하기" handleOnClick={handleCalcFruit} />
      </Link>
    </div>
  );
};
export default ListPresenter;
