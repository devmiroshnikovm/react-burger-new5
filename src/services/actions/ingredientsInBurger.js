import {
  INGREDIENT_TO_BURGER_SET,
  INGREDIENT_TO_BURGER_DELETE,
} from "../constants/constants";

// action creators
export const setIngredientToBurger = (data) => {
  return {
    type: INGREDIENT_TO_BURGER_SET,
    data,
  };
};

/* export const deleteIngredientToBurger = () => {
  return {
    type: INGREDIENT_TO_BURGER_DELETE,
  };
}; */
