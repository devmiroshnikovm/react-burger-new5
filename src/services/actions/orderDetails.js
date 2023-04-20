import { SET_ORDER } from "../constants/constants";

// action creators
export const setCurrentOder = (response) => {
  const dataForInitialState = {
    name: response.name,
    orderNumber: response.order.number,
  };

  return {
    type: SET_ORDER,
    data: dataForInitialState,
  };
};
