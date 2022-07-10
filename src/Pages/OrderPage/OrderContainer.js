import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import OrderPresenter from "./OrderPresenter";
import Swal from "sweetalert2";

const OrderContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathName = location.pathname;
  useEffect(() => {
    console.log(pathName);
  }, [pathName]);

  const [user, setUser] = useState({
    //사용자 정보
    name: "",
    phoneNum: "",
    address: "",
  });
  const handleOnChangeInput = (e) => {
    //onChange함수로 기존 정보는 그대로+ 새로 입력한 건 추가로 저장해줌
    const { name, value } = e.target; //구조분해
    const updatedUser = {
      ...user,
      [name]: value,
    };
    setUser(updatedUser);
  };

  const handleSetUser = () => {
    //입력확인 함수
    const { name, phoneNum, address } = user;
    if (
      validateUserName(name) &&
      validateUserPhonNum(phoneNum) &&
      validateUserAddress(address)
    ) {
      navigate("/payment");
    } else {
      Swal.fire({
        icon: "error",
        title: "입력창을 확인해주세요.",
        text: "회원정보를 모두 입력해주세요!",
      });
    }
  };

  const handleOpenPopup = () => {
    //입력을 맞게 했다면-> 주문내역 창
    Swal.fire({ title: "주문내역 확인" });
  };
  const validateUserName = (name) => {
    const korean = /^[가-힣]{2,4}$/;
    if (name.length !== 0 && korean.test(name)) {
      return true;
    }
    return false;
  };
  const validateUserPhonNum = (phoneNum) => {
    const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if (phoneNum.length !== 0 && regPhone.test(phoneNum)) {
      return true;
    }
    return false;
  };
  const validateUserAddress = (address) => {
    if (address.length !== 0) {
      return true;
    }
    return false;
  };

  return (
    <OrderPresenter
      user={user}
      handleOnChangeInput={handleOnChangeInput}
      handleSetUser={handleSetUser}
      pathName={pathName}
      handleOpenPopup={handleOpenPopup}
    />
  );
};

export default OrderContainer;
