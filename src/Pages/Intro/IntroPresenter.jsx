import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Component/Button";

const IntroPresenter = () => (
  <div>
    <p id="titleText">싱싱한 과일가게</p>
    <Link to="/list">
      <Button text="쇼핑하기" />
    </Link>
  </div>
);

export default IntroPresenter;
