import { ActionTypes } from "../constants/action-types";
import { cloneDeep } from "lodash";

const intialState = {
  products: [],
};


const cartIntialState = {
  cart: []
};



export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

const addProducttoCart = (state, payload) => {
  let products = cloneDeep(state.cart);
  const itemIndex = products.find(item => item.id === payload.id)
  if (!itemIndex) {
    products = [...products, payload];
  } else {
    //TODO: UPDATE QUANTITY
  }

  return {...state, cart: products};
}

export const cartReducer = (state = cartIntialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_ITEM_CART:
      return addProducttoCart(state, payload);
    default:
      return state;
  }
};
