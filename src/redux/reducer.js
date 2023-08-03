import { MODAL_CART_INFO } from "./actions_types";

const initialState = {
    size: '',
    quantity: 0,
    price: 0,
  };

  const reducer = (state = initialState, {type,payload}) => {
    switch (type) {
      case MODAL_CART_INFO:
        return {
          ...state,
          size: payload.selectedSize,
          quantity: payload.quantity,
          price:payload.price
        };
      default:
        return {...state};
    }
  };

export default reducer;