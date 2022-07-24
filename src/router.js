import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import Cart from "./Pages/Cart/CartPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import App from "./App";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Checkout from "Pages/Checkout/checkout";
import Products from "Pages/Products/products";
import Ordersummary from "Components/checkout/ordersummary/ordersummary";
const Router = () => (
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="capstone" element={<Home />} />
        <Route path="/product/all" element={<Products></Products>} exact />
        <Route path="/product/women" element={<Products></Products>} exact />
        <Route path="/product/men" element={<Products></Products>} exact />
        <Route
          path="/product/electronic"
          element={<Products></Products>}
          exact
        />
        <Route
          path="/product/jewellery"
          element={<Products></Products>}
          exact
        />
        <Route
          path="/product/:productID"
          element={<ProductPage></ProductPage>}
        />
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="/checkout" element={<Checkout></Checkout>} />
        <Route path="/ordersummary" element={<Ordersummary></Ordersummary>} />
        <Route path="*" element={<PageNotFound></PageNotFound>} />
      </Routes>
    </App>
  </BrowserRouter>
);
export default Router;