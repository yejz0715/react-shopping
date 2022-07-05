import React, { useEffect, useState } from "react";
import { fruitList } from "../../data/main/dummy";
import ListPresenter from "./ListPresenter";

const ListContainer = () => {
  const [checkList, setCheckList] = useState([]); //체크된 list
  let shoppingList = [];
  //버튼 클릭시 체크된 데이터(체크된 과일이름과 합산한 가격)넘겨주는 함수
  const handleCalcFruit = () => {
    let listName = [];
    //배열-값 추가(push), 삭제(pop) or
    // ...스프레드 연산자 사용
    //  listName = [...listName(이전값도 불러오고), item.name(새로운 값 추가)];
    let listPrice = [];
    let fruitPrice; //가격 합산 변수
    checkList.map((item) => {
      listName = [...listName, item.name];
      listPrice = [...listPrice, item.price];
      fruitPrice = listPrice.reduce(function (prev, cur) {
        return prev + cur;
      }, 0);
      //배열.reduce(function(이전값,현재값){
      //return 이전값+현재값;
      //},0(초기값));
    });
    //console.log(listName, fruitPrice);
    shoppingList.push(listName, fruitPrice);
  };
  console.log(shoppingList);
  useEffect(() => {
    console.log(checkList);
  }, [checkList]);
  return (
    <ListPresenter
      fruitList={fruitList}
      checkList={checkList}
      setCheckList={setCheckList}
      handleCalcFruit={handleCalcFruit}
      shoppingList={shoppingList}
    />
  );
};
export default ListContainer;
