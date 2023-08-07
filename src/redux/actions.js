import { FILTER_DATA, MODAL_CART_INFO, SORT_GEN } from "./actions_types";

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
export const filterData = (filteredData)=> {
  return {
    type: FILTER_DATA,
    payload: {
      filteredData
    }
  }
}
export const sortGen = (gender)=> {
  return {
    type: SORT_GEN,
    payload: {
      gender
    }
  }
}