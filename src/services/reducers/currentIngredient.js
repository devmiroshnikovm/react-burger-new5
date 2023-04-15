import {
  CURRENT_INGREDIENT_SET,
  CURRENT_INGREDIENT_DELETE,
} from "../constants/constants";

//const [currentIngredient, setCurrentIngredient] = useState(null);

const initialState = {
  currentIngredients: [],
};

export const currentIngredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_INGREDIENT_SET: {
      return {
        ...state,
        currentIngredients: action.data, // обновляем весть массив новым элементом
      };
    }
    case CURRENT_INGREDIENT_DELETE: {
      return {
        ...state,
        currentIngredients: [],
      };
    }
    default: {
      return state;
    }
  }
};
