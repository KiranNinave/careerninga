import { DOMAIN } from "./domain";
import { httpMethods, sendJsonRequest } from "./functions/requests";
import { sendResponse } from "./functions/responses";

export const getBattelsApis = async () => {
  try {
    const url = `${DOMAIN}/api/battle/list`;
    const response = await sendJsonRequest(url, httpMethods.GET);
    return await sendResponse(response);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getBattlesByIdApis = async id => {
  try {
    const url = `${DOMAIN}/api/battle/list/${id}`;
    const response = await sendJsonRequest(url, httpMethods.GET);
    return await sendResponse(response);
  } catch (err) {
    throw new Error(err.message);
  }
};
