
const shippingIntialState = {
    shippingInfo: {
        
    }
  };
  
  
  
  export const shippingInfoReducer = (state = shippingIntialState, { type, payload }) => {
    switch (type) {
      case "SET_SHIPPING_INFO": 
      state = {shippingInfo:payload}
        return state;
      default:
        return state;
    }
  };