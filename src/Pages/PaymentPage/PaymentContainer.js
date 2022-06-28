import React from "react";
import PaymentPresenter from "./PaymentPresenter";

function PaymentContainer() {
  const textList = [
    "추가 금액 정보 확인",
    "배달 주문",
    "1. 20,000원 이상 구매 고객은 무료 배달 지원",
    "2. 20,000원 미만 구매 고객은 배달료 1,000원 추가",
  ];

  return <PaymentPresenter textList={textList} />;
}
export default PaymentContainer;
