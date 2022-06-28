import React from "react";
import "./style.scss";
import InfoBox from "../../Component/InfoBox";
import Title from "../../Component/Title";

const PaymentPresenter = (props) => (
  <div id="payment_container">
    <div id="bar"></div>
    <Title text="결제 내역" />
    <InfoBox textList={props.textList} />
  </div>
);

export default PaymentPresenter;
