//reducer for burgerConstructor

import {
  INGREDIENT_TO_BURGER_SET,
  INGREDIENT_TO_BURGER_DELETE,
} from "../constants/constants";

const initialState = {
  selectedIngredients: [],
};

export const selectedIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENT_TO_BURGER_SET: {
      console.log(INGREDIENT_TO_BURGER_SET);
      console.log(action.data);

      return {
        ...state,
        selectedIngredients: [...state.selectedIngredients, action.data],
      };

      // нужно дописать помнять кол-во
    }

    case INGREDIENT_TO_BURGER_DELETE: {
      return {
        ...state,
        selectedIngredients: state.selectedIngredients.filter(
          (ingredient) => ingredient.dropUniqID !== action.data.dropUniqID
        ),
      };
    }
    default: {
      return state;
    }
  }
};
