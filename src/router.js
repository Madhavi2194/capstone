import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Home from "./Pages/Home/home";
import Cart from "./Pages/Cart/CartPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import App from "./App";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

const Router = () => (

    <BrowserRouter>

        <App>

            <Routes>

                <Route path="venia" element={

                    <Home/>

                } />

             <Route path="/product/:productID" element={

                    <ProductPage>
                    </ProductPage>

                } />



                <Route path="/cart" element={

                    <Cart></Cart>

                } />
                 <Route path="*" element={
                    <PageNotFound></PageNotFound>
                 }/>
                

            </Routes>

        </App>

    </BrowserRouter>

);
export default Router ;