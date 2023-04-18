import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { currentIngredientReducer } from "./currentIngredient";
import { selectedIngredientsReducer } from "./selectedIngredients";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  currentIngredients: currentIngredientReducer,
  selectedIngredients: selectedIngredientsReducer,
});

export default rootReducer;
