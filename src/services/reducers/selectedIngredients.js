//reducer for burgerConstructor

import {
  INGREDIENT_TO_BURGER_SET,
  INGREDIENT_TO_BURGER_DELETE,
  INGREDIENT_TO_BURGER_UPDATE,
} from "../constants/constants";

const initialState = {
  selectedIngredients: [],
};

export const selectedIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENT_TO_BURGER_SET: {
      return {
        ...state,
        selectedIngredients: [...state.selectedIngredients, action.data],
      };
    }

    case INGREDIENT_TO_BURGER_DELETE: {
      return {
        ...state,
        selectedIngredients: state.selectedIngredients.filter(
          (ingredient) => ingredient.dropUniqID !== action.data.dropUniqID
        ),
      };
    }

    case INGREDIENT_TO_BURGER_UPDATE: {
      console.log(INGREDIENT_TO_BURGER_UPDATE);
      return {
        ...state,
        selectedIngredients: action.data,
      };
    }

    default: {
      return state;
    }
  }
};
