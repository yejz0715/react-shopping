import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroContainer from "./Pages/IntroPage";
import ListContainer from "./Pages/ListPage";
import OrderContainer from "./Pages/OrderPage";
import PaymentContainer from "./Pages/PaymentPage";
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroContainer />} />
        <Route path="/list" element={<ListContainer />} />
        <Route path="/order" element={<OrderContainer />} />
        <Route path="/payment" element={<OrderContainer />} />
      </Routes>
    </Router>
  );
}
export default AppRouter;
