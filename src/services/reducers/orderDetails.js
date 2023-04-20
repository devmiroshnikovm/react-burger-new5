import { SET_ORDER } from "../constants/constants";

const initialState = {
  name: "",
  orderNumber: "",
};

export const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER: {
      console.log("action");
      console.log(action);
      return {
        ...state,
        name: action.data.name,
        orderNumber: action.data.orderNumber,
      };
    }

    default: {
      return state;
    }
  }
};
