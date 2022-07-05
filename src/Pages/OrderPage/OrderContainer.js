import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import OrderPresenter from "./OrderPresenter";

const OrderContainer = ({}) => {
  const location = useLocation();
  const pathName = location.pathname;
  useEffect(() => {
    console.log(pathName);
  }, [pathName]);

  const [user, setUser] = useState({
    name: "",
    phoneNum: "",
    address: "",
  });
  const hanldeOnChangeInput = (e) => {
    const { name, value } = e.target;
    const updatedUser = {
      ...user,
      [name]: value,
    };
    setUser(updatedUser);
  };
  const handleUser = () => {
    console.log(user);
  };

  const handleOpenPopup = () => {
    console.log("주문내역 확인");
  };
  return (
    <OrderPresenter
      user={user}
      hanldeOnChangeInput={hanldeOnChangeInput}
      handleUser={handleUser}
      pathName={pathName}
      handleOpenPopup={handleOpenPopup}
    />
  );
};

export default OrderContainer;
