import React from "react";
import IntroPresenter from "./IntroPresenter";

function IntroContainer({ code, setCode }) {
  const onClickRandomCode = () => {
    let randomCode = new Date().getTime().toString(36);
    console.log(randomCode.slice(0, 6));
  };
  return (
    <IntroPresenter
      code={code}
      setCode={setCode}
      onClickRandomCode={onClickRandomCode}
    />
  );
}
export default IntroContainer;
