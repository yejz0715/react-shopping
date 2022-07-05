import React from "react";
import "./style.scss";
import InfoBox from "../../Component/InfoBox";
import Title from "../../Component/Title";
import Button from "../../Component/Button";
import SubTitle from "../../Component/SubTitle";
import InputText from "../../Component/InputText";
import SelectBox from "../../Component/SelectBox";
const PaymentPresenter = ({ testFunc, textList }) => (
  <div id="payment_container">
    <div id="bar"></div>
    <Title text="결제 내역" />
    <InfoBox textList={textList} />
    <div id="payment_profile_box">
      <SubTitle title="주문자 정보" text="이름과 전화번호를 입력해 주세요." />
      <InputText title="이름" />
      <InputText title="전화번호" />
      <InputText title="주소" />
      <SelectBox title="배송 메세지" />
    </div>
    <Button text="주문내역 확인" handleOnClick={testFunc} />
  </div>
);

export default PaymentPresenter;
