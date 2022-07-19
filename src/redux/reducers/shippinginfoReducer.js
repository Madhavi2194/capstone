
const shippingIntialState = {
    shippingInfo: {
        email:"",
        phoneno:"",
        country:"",
        fname: "",
        lname:"",
        streetadr:"",
        streetadr2:"",
        city:"",
        state:"",
        zip:"",


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