import { ActionTypes } from "../constants/action-types";

export const setshippingInfo = (info) => {
  return {
    type: "SET_SHIPPING_INFO",
    payload: info,
  };
};