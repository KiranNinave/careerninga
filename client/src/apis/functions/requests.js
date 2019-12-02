export const httpMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH"
};

export const sendJsonRequest = async (url = "", method = httpMethods.GET) => {
  const header = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  };
  return await fetch(url, header);
};
