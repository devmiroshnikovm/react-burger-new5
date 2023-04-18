import { act } from "react-dom/test-utils";
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
      console.log("selectedIngredientsReducer");
      console.log(action);

      return {
        ...state,
        selectedIngredients: [...state.selectedIngredients, action.data],
      };
    }
    case INGREDIENT_TO_BURGER_DELETE: {
      // получаем только уникальный id
      console.log(action);
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
