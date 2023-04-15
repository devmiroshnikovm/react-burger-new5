import { getRequest } from "../api/index.js";

import {
  GET_REQUEST,
  GET_REQUEST_FAILED,
  GET_REQUEST_SUCCESS,
} from "../constants/constants.js";

export function fetchData() {
  return async function (dispatch) {
    dispatch({
      type: GET_REQUEST,
    });
    try {
      const result = await getRequest();

      setTimeout(() => {
        dispatch({
          type: GET_REQUEST_SUCCESS,
          data: result.data,
        });
      }, 2000);
    } catch (err) {
      dispatch({
        type: GET_REQUEST_FAILED,
      });
    } finally {
    }
  };
}

/* export function fetchData() {
  // Воспользуемся первым аргументом из усилителя redux-thunk - dispatch
  return function (dispatch) {
    // Проставим флаг в хранилище о том, что мы начали выполнять запрос
    // Это нужно, чтоб отрисовать в интерфейсе лоудер или заблокировать
    // ввод на время выполнения запроса
    dispatch({
      type: GET_REQUEST,
    });
    // Запрашиваем данные у сервера
    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((res) => {
        if (res && res.success) {
          // В случае успешного получения данных вызываем экшен
          // для записи полученных данных в хранилище
          dispatch({
            type: GET_REQUEST_SUCCESS,
            data: res.data,
          });
        } else {
          console.log("error");
          // Если произошла ошибка, отправляем соотвтествующий экшен
          dispatch({
            type: GET_REQUEST_FAILED,
          });
        }
      })
      .catch((err) => {
        // Если сервер не вернул данных, также отправляем экшен об ошибке
        dispatch({
          type: GET_REQUEST_FAILED,
        });
      });
  };
} */
