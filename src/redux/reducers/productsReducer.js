import { ActionTypes } from "../constants/action-types";
import { cloneDeep } from "lodash";

const intialState = {
  products: [],
};


const cartIntialState = {
  cart: []
};

const wishlistInitialState ={
  wishlist:[]
}

  

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const wishlistReducer = (state = wishlistInitialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_WISHLIST:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {

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

const removeProduct =(state, payload) => {
  let products = cloneDeep(state.cart);
  products = state.cart.filter(o => o.id !== payload.id);
  return {...state, cart: products};
} 

export const cartReducer = (state = cartIntialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_ITEM_CART:
      return addProducttoCart(state, payload);
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return removeProduct (state, payload);
      default:
      return state;
  }
};



