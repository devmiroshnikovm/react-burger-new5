import { config } from "../constants/constants.js";
import { checkResponse } from "../utils/utils.js";

export async function getRequest() {
  const result = await fetch(config.baseUrl, {
    method: "GET",
    headers: config.headers,
  });
  return await checkResponse(result);
}
