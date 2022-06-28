import React from "react";
import "./style.scss";
import Title from "../../Component/Title";
import InfoBox from "../../Component/InfoBox";
import Button from "../../Component/Button";
import { Link } from "react-router-dom";
const ListPresenter = ({ friutList }) => {
  return (
    <div id="main_container">
      <Title text="SHOPPING List" />
      <InfoBox textList={["구매하실 상품을 선택하주세요"]} />
      <div id="checkbox_list">
        {friutList.map((item) => (
          <div key={item.id}>
            <label>{item.name}</label>
            <img src={item.img} alt="friut" width="196px" />
            <label>{item.price}</label>
          </div>
        ))}
      </div>
      <Link to="/order">
        <Button text="구매하기" />
      </Link>
    </div>
  );
};
export default ListPresenter;
