import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer, cartReducer } from "./productsReducer";
import { shippingInfoReducer } from "./shippinginfoReducer";
import { shippingMethodReducer } from "./shippingmethodReducer";
import { paymentInfoReducer } from "./paymentmethodReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  cart: cartReducer,
  shippingInfo:shippingInfoReducer,
  shippingMethod:shippingMethodReducer,
  paymentInfo:paymentInfoReducer,
  
 
});
export default reducers;
