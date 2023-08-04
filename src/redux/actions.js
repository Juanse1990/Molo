import { MODAL_CART_INFO } from "./actions_types";

export const modalCartInfo = (name,selectedSize, quantity, price) => {
  return {
    type: MODAL_CART_INFO,
    payload: {
      name,
      selectedSize,
      quantity,
      price
    },
  };
};