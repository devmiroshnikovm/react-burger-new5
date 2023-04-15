import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { currentIngredientReducer } from "./currentIngredient";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  currentIngredients: currentIngredientReducer,
});

export default rootReducer;
