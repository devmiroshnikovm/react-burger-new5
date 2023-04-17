import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { currentIngredientReducer } from "./currentIngredient";
import { ingredientsInBurgerReducer } from "./ingredientsInBurger";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  currentIngredients: currentIngredientReducer,
  ingredientsInBurger: ingredientsInBurgerReducer,
});

export default rootReducer;
