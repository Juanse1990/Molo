import { MODAL_CART_INFO } from "./actions_types";

export const modalCartInfo = (selectedSize, quantity, price) => {
  return {
    type: MODAL_CART_INFO,
    payload: {
      selectedSize,
      quantity,
      price,
    },
  };
};