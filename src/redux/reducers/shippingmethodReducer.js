const shippingMethodIntialState = {
    shippingMethod: {
        shippingtype:
         "Standard Shipping (4-8 business days via USPS) FREE"
       
     }
  };
  
  export const shippingMethodReducer = (state = shippingMethodIntialState, { type, payload }) => {
    switch (type) {
      case "SET_SHIPPING_METHOD": 
      state = {shippingMethod:payload}
        return state;
      default:
        return state;
    }
  };