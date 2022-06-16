import React from "react";
import Button from "../../Component/Button";
import CheckBox from "../../Component/CheckBox";
import InfoBox from "../../Component/InfoBox";
import Title from "../../Component/Title";
import "./style.css";
import strawberry from "../../img/product1_strawberry.svg";
import melon from "../../img/product2_melon.svg";
import grape from "../../img/product7_grape.svg";
import lemon from "../../img/product8_lemon.svg";
import SelectBox from "../../Component/SelectBox";
function Main() {
  const list = [
    { id: 1, name: "딸기", price: 2500, img: strawberry },
    { id: 2, name: "멜론", price: 15000, img: melon },
    { id: 7, name: "포도", price: 6000, img: grape },
    { id: 8, name: "레몬", price: 2500, img: lemon },
  ];

  return (
    <div>
      <div class="container">
        <div id="bar"></div>
        <Title text="SHOPPING LIST" />
        <InfoBox text="구매하실 상품을 선택해 주세요!" />
        <div id="check_box">
          {list.map((item) => (
            <CheckBox>{item.name}</CheckBox>
          ))}
        </div>
        <Button text="주문하기" />
        <SelectBox text="배송메시지" />
      </div>
    </div>
  );
}
export default Main;
