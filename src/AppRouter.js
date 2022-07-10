import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroContainer from "./Pages/IntroPage";
import ListContainer from "./Pages/ListPage";
import OrderContainer from "./Pages/OrderPage";
function AppRouter({ code, setCode }) {
  return (
    <Router>
      <Routes>
        {code.length !== 0 ? (
          <div>
            <Route
              path="/"
              element={<IntroContainer code={code} setCode={setCode} />}
            />
            <Route path="/list" element={<ListContainer code={code} />} />
            <Route path="/order" element={<OrderContainer code={code} />} />
            <Route path="/payment" element={<OrderContainer code={code} />} />
          </div>
        ) : (
          <Route
            path="/"
            element={<IntroContainer code={code} setCode={setCode} />}
          />
        )}
      </Routes>
    </Router>
  );
}
export default AppRouter;
