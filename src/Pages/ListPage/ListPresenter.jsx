import React from "react";
import Button from "../../Component/Button";
import CheckBox from "../../Component/CheckBox";
import InfoBox from "../../Component/InfoBox";
import Title from "../../Component/Title";
import SelectBox from "../../Component/SelectBox";
const ListPresenter = ({ list }) => (
  <div class="container">
    <div id="bar"></div>
    <Title text="SHOPPING LIST" />
    <InfoBox text="구매하실 상품을 선택해 주세요!" />
    <div id="check_box">
      {list.map((item) => (
        <CheckBox name={item.name} price={item.price} img={item.img} />
      ))}
    </div>
    <Button text="주문하기" />
    <SelectBox />
  </div>
);

export default ListPresenter;
