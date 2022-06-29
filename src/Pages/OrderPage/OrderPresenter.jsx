import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Button from "../../Component/Button";
import Title from "../../Component/Title";
import InfoBox from "../../Component/InfoBox";
import SubTitle from "../../Component/SubTitle";
const OrderPresenter = () => (
  <div id="order_container">
    <div id="bar"></div>
    <Title text="배송지 정보 입력" />
    <InfoBox textList={["모든 정보는 필수 입력 값입니다."]} />
    <div id="profile_container">
      <div id="profile_box">
        <SubTitle title="주문자 정보" text="이름과 전화번호를 입력해 주세요" />
      </div>
      <div id="shopping_list"></div>
    </div>
    <Link to="/payment">
      <Button text="결제하기" />
    </Link>
  </div>
);

export default OrderPresenter;
