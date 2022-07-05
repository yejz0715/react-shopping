import React from "react";
import "./style.scss";
import Button from "../../Component/Button";
import Title from "../../Component/Title";
import InfoBox from "../../Component/InfoBox";
import SubTitle from "../../Component/SubTitle";
import InputText from "../../Component/InputText";
import SelectBox from "../../Component/SelectBox";
const OrderPresenter = ({
  user,
  handleOnChangeInput,
  handleSetUser,
  pathName,
  handleOpenPopup,
}) => (
  <div id="order_container">
    <div id="bar"></div>
    <Title text="배송지 정보 입력" />
    <InfoBox textList={["모든 정보는 필수 입력 값입니다."]} />
    <div id="profile_box">
      <SubTitle title="주문자 정보" text="이름과 전화번호를 입력해 주세요." />
      <InputText
        title="이름"
        name="name"
        value={user.name}
        handleOnChangeInput={handleOnChangeInput}
      />
      <InputText
        title="전화번호"
        name="phoneNum"
        value={user.phonNum}
        handleOnChangeInput={handleOnChangeInput}
      />
      <InputText
        title="주소"
        name="address"
        value={user.address}
        handleOnChangeInput={handleOnChangeInput}
      />
      {pathName === "/payment" ? <SelectBox title="배송 메세지" /> : null}
    </div>
    {pathName === "/payment" ? (
      <div id="shopping_list">
        <SubTitle
          title="구매 목록"
          text="장바구니에 담긴 과일들을 확인해주세요!"
        />
      </div>
    ) : null}

    <Button
      text={pathName === "/order" ? "결제하기" : "주문내역확인"}
      handleOnClick={pathName === "/order" ? handleSetUser : handleOpenPopup}
    />
  </div>
);
export default OrderPresenter;
