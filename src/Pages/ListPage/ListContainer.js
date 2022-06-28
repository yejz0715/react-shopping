import React, { useEffect, useState } from "react";
import { friutList } from "../../data/main/dummy";
import ListPresenter from "./ListPresenter";

const ListContainer = () => {
  const [checkList, setCheckList] = useState([]);
  useEffect(() => {
    console.log(checkList);
  }, [checkList]);
  return (
    <ListPresenter
      friutList={friutList}
      checkList={checkList}
      setCheckList={setCheckList}
    />
  );
};
export default ListContainer;
