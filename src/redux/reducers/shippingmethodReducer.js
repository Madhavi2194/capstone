const shippingMethodIntialState = {
    shippingMethod: {
        shippingtype:"",
       
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