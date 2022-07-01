import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Button from "../../Component/Button";
import Title from "../../Component/Title";
import InfoBox from "../../Component/InfoBox";
import SubTitle from "../../Component/SubTitle";
import InputText from "../../Component/InputText";
import SelectBox from "../../Component/SelectBox";
const OrderPresenter = () => (
  <div id="order_container">
    <div id="bar"></div>
    <Title text="배송지 정보 입력" />
    <InfoBox textList={["모든 정보는 필수 입력 값입니다."]} />
    <div id="profile_box">
      <SubTitle title="주문자 정보" text="이름과 전화번호를 입력해 주세요." />
      <InputText title="이름" />
      <InputText title="전화번호" />
      <InputText title="주소" />
      <InputText title="배송 메세지 " />
      <SelectBox />
    </div>
    <div id="shopping_list">
      <SubTitle
        title="구매 목록"
        text="장바구니에 담긴 과일들을 확인해주세요!"
      />
    </div>
    <Link to="/payment">
      <Button text="결제하기" />
    </Link>
  </div>
);

export default OrderPresenter;
