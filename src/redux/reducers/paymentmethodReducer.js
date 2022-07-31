
const paymentIntialState = {
    paymentInfo: {
      nameoncard:"",
      cardno:"",
      cvv:"",
     }
  };
  
  export const paymentInfoReducer = (state = paymentIntialState, { type, payload }) => {
    switch (type) {
      case "SET_PAYMENT_INFO": 
      state = {paymentInfo:payload}
        return state;
      default:
        return state;
    }
  };