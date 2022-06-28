import React from "react";
import { friutList } from "../../data/main/dummy";
import ListPresenter from "./ListPresenter";

const ListContainer = () => {
  return <ListPresenter friutList={friutList} />;
};
export default ListContainer;
