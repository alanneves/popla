const generalResponse = (statusCode, body) => ({
  statusCode,
  body: JSON.stringify(body),
});

export const badRequest = (body) => generalResponse(400, body);
export const notFound = (body) => generalResponse(404, body);
export const ok = (body) => generalResponse(200, body);
export const internalServerError = (body) => generalResponse(500, body);

export const lambdaError = (value) => {
  const { statusCode, body } = value || {};

  if (statusCode && body) return value

  return internalServerError(value);
};
