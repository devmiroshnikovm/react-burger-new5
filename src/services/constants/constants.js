export const config = {
  baseUrl: "https://norma.nomoreparties.space/api/ingredients",
  headers: {
    "Content-Type": "application/json",
  },
};

export const GET_REQUEST = "GET_REQUEST";
export const GET_REQUEST_FAILED = "GET_REQUEST_FAILED";
export const GET_REQUEST_SUCCESS = "GET_REQUEST_SUCCESS";

//currentIngredients
export const CURRENT_INGREDIENT_SET = "CURRENT_INGREDIENT_SET";
export const CURRENT_INGREDIENT_DELETE = "CURRENT_INGREDIENT_DELETE";
