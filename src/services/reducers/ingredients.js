import { act } from "react-dom/test-utils";
import {
  GET_REQUEST,
  GET_REQUEST_FAILED,
  GET_REQUEST_SUCCESS,
  UPDATE_BOARD,
} from "../constants/constants";

const initialState = {
  dataRequest: false,
  dataFailed: false,
  data: [], // потом при action дописываю board в каждый элемент - на основании этого board потом будем рендерить элементы в burgerConstructor
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REQUEST: {
      return {
        ...state,
        // Запрос начал выполняться
        dataRequest: true,
        // Сбрасываем статус наличия ошибок от предыдущего запроса
        // на случай, если он был и завершился с ошибкой
        dataFailed: false,
      };
    }
    case GET_REQUEST_SUCCESS: {
      return {
        ...state,
        // Запрос выполнился успешно, помещаем полученные данные в хранилище
        data: action.data.map((item) => ({
          ...item,
          board: "default",
          count: 0,
        })),
        // Запрос закончил своё выполнение
        dataRequest: false,
      };
    }
    case GET_REQUEST_FAILED: {
      return {
        ...state,
        // Запрос выполнился с ошибкой,
        // выставляем соответсвующие значения в хранилище
        dataFailed: true,
        // Запрос закончил своё выполнение
        dataRequest: false,
      };
    }

    case UPDATE_BOARD: {
      const updatedData = state.data.map((item) => {
        if (item._id === action._id) {
          return {
            ...item,
            board: action.board,
            count: action.count,
            dropUniqID: action.dropUniqID,
          };
        }
        return item;
      });

      return {
        ...state,
        data: updatedData,
      };
    }

    default: {
      return state;
    }
  }
};

/* switch (action.type) {
  case "UPDATE_TYPE": {
    return {
      ...state,
      animals: state.animals.map((animal) =>
        animal.id === action.id ? { ...animal, board: action.board } : animal
      ),
    };
  } */
