import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Button from "../../Component/Button";
import Title from "../../Component/Title";
import InfoBox from "../../Component/InfoBox";
const OrderPresenter = () => (
  <div id="order_container">
    <div id="bar"></div>
    <Title text="배송지 정보 입력" />
    <InfoBox textList={["모든 정보는 필수 입력 값입니다."]} />

    <Link to="/payment">
      <Button text="결제하기" />
    </Link>
  </div>
);

export default OrderPresenter;
