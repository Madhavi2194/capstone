import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = (payload) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    payload,
  };
};

export const setWishlist = (payload) => {
  return {
    type: ActionTypes.SET_WISHLIST,
    payload,
  };
};



export const addTOCart = (payload) => {
  return {
     type: ActionTypes.ADD_ITEM_CART,
     payload,
 };
 

};

export const productListLength = (payload) => {
  return {
     type: "PRODUCT_LIST_LENGTH",
     payload,
 };
 
};

