export const config = {
  baseUrl: "https://norma.nomoreparties.space/api/ingredients",
  headers: {
    "Content-Type": "application/json",
  },
};

export const GET_REQUEST = "GET_REQUEST";
export const GET_REQUEST_FAILED = "GET_REQUEST_FAILED";
export const GET_REQUEST_SUCCESS = "GET_REQUEST_SUCCESS";
export const UPDATE_COUNT = "UPDATE_COUNT";

//currentIngredients
export const CURRENT_INGREDIENT_SET = "CURRENT_INGREDIENT_SET";
export const CURRENT_INGREDIENT_DELETE = "CURRENT_INGREDIENT_DELETE";

//ingredientsInBurger
export const INGREDIENT_TO_BURGER_SET = "INGREDIENT_TO_BURGER_SET";
export const INGREDIENT_TO_BURGER_DELETE = "CINGREDIENT_TO_BURGER_DELETE";
