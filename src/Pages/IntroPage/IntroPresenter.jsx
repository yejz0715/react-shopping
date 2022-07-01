import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Button from "../../Component/Button";
import SelectBox from "../../Component/SelectBox";

const IntroPresenter = () => (
  <div id="intro_container">
    <p id="title_text">
      싱싱한 과일가게
      <span aria-label="사과" role="img">
        🍎
      </span>
      {/* 이모지 넣을 떄:<span sria-label="" role=""></span> */}
    </p>
    <SelectBox />
    <Link to="/list">
      <Button text="쇼핑하기" />
    </Link>
  </div>
);

export default IntroPresenter;
