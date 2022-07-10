import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Button from "../../Component/Button";

const IntroPresenter = ({ onClickRandomCode }) => (
  <div id="intro_container">
    <p id="intro_title">
      싱싱한 과일가게
      <span aria-label="사과" role="img">
        🍎
      </span>
      {/* 이모지 넣을 때:<span aria-label="" role=""></span> */}
    </p>

    <Link to="/list">
      <Button text="쇼핑하기" handleOnClick={onClickRandomCode} />
    </Link>
  </div>
);

export default IntroPresenter;
