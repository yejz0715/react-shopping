import React from "react";
import "./style.scss";
import InfoBox from "../../Component/InfoBox";
import Title from "../../Component/Title";
import Button from "../../Component/Button";

const PaymentPresenter = ({ testFunc, textList }) => (
  <div id="payment_container">
    <div id="bar"></div>
    <Title text="결제 내역" />
    <InfoBox textList={textList} />
    <Button text="주문내역 확인" handleOnClick={testFunc} />
  </div>
);

export default PaymentPresenter;
