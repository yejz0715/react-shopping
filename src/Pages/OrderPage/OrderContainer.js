import React, { useState } from "react";
import OrderPresenter from "./OrderPresenter";

function OrderContainer() {
  const [isSow, setShow] = useState("");
  const handleText = (e) => {
    if (isSow !== 0) setShow(e.target.value);
    console.log(isSow);
  };
  const click = () => {
    setShow();
  };
  return <OrderPresenter handleText={handleText} click={click} />;
}
export default OrderContainer;
