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
