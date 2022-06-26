import React from "react";
import ListPresenter from "./ListPresenter";
import "./style.css";

import strawberry from "../../img/img_strawberry.png";
import melon from "../../img/img_melon.png";
import orange from "../../img/img_orange.png";
import watermelon from "../../img/img_watermelon.png";
import tomato from "../../img/img_tomato.png";
import avocado from "../../img/img_avocado.png";
import grape from "../../img/img_grape.png";
import lemon from "../../img/img_lemon.png";
import cherry from "../../img/img_cherry.png";
import peach from "../../img/img_peach.png";
import pineapple from "../../img/img_pineapple.png";
import pear from "../../img/img_pear.png";
function ListContainer() {
  const list = [
    { id: 1, name: "딸기", price: 7000, img: strawberry },
    { id: 2, name: "멜론", price: 13000, img: melon },
    { id: 3, name: "오렌지", price: 9000, img: orange },
    { id: 4, name: "수박", price: 8500, img: watermelon },
    { id: 5, name: "토마토", price: 6000, img: tomato },
    { id: 6, name: "아보카도", price: 12000, img: avocado },
    { id: 7, name: "포도", price: 7500, img: grape },
    { id: 8, name: "레몬", price: 7000, img: lemon },
    { id: 9, name: "체리", price: 9000, img: cherry },
    { id: 10, name: "복숭아", price: 10000, img: peach },
    { id: 11, name: "파인애플", price: 9500, img: pineapple },
    { id: 12, name: "배", price: 8000, img: pear },
  ];
  return <ListPresenter list={list} />;
}
export default ListContainer;
