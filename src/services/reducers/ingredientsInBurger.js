import {
  INGREDIENT_TO_BURGER_SET,
  INGREDIENT_TO_BURGER_DELETE,
} from "../constants/constants";

const initialState = {
  ingredientsInBurger: [],
};

export const ingredientsInBurgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENT_TO_BURGER_SET: {
      return {
        ...state,
        ingredientsInBurger: [...state.ingredientsInBurger, action.data],
      };
    }
    case INGREDIENT_TO_BURGER_DELETE: {
      return {
        ...state,
        ingredientsInBurger: state.ingredientsInBurger.filter(
          (item) => item !== action.data
        ),
      };
    }
    default: {
      return state;
    }
  }
};
