import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { currentIngredientReducer } from "./currentIngredient";
import { selectedIngredientsReducer } from "./selectedIngredients";

const rootReducer = combineReducers({
  ingredientsFromAPI: ingredientsReducer,
  currentIngredients: currentIngredientReducer,
  selectedItems: selectedIngredientsReducer,
});

export default rootReducer;
