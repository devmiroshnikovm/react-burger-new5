import {
  INGREDIENT_TO_BURGER_SET,
  INGREDIENT_TO_BURGER_DELETE,
  INGREDIENT_TO_BURGER_UPDATE,
} from "../constants/constants";

import { v4 as uuidv4 } from "uuid";

// action creators
export const setIngredientToBurger = (element) => {
  element.dropUniqID = uuidv4();
  element.board = "burgerConstructor";
  element.count = 10;

  return {
    type: INGREDIENT_TO_BURGER_SET,
    data: element,
  };
};

export const deleteIngredientToBurger = (element) => {
  return {
    type: INGREDIENT_TO_BURGER_DELETE,
    data: element,
  };
};

export const updateSelectedElements = (element) => ({
  type: INGREDIENT_TO_BURGER_UPDATE,
  data: element,
});
