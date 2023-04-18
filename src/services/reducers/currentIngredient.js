// для модального окна хз это работает или нет

import {
  CURRENT_INGREDIENT_SET,
  CURRENT_INGREDIENT_DELETE,
} from "../constants/constants";

const initialState = {
  currentIngredients: [],
};

export const currentIngredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_INGREDIENT_SET: {
      return {
        ...state,
        currentIngredients: action.data,
      };
    }
    case CURRENT_INGREDIENT_DELETE: {
      return {
        ...state,
        currentIngredients: [],
      };
    }
    default: {
      return state;
    }
  }
};
