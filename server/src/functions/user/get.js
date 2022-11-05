// import User from "../../lib/User";
import { badRequest, lambdaError } from "../../lib/utils/response.js";
import User from '../../lib/User.js';

export const lambda = async (event) => {
  try {
    const { id } = event?.pathParameters || {};

    if (!id) return badRequest({ id: "is required" });
    const user = await (new User).get(id);

    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  } catch (err) {
    console.error(err);
    return lambdaError(err);
  }
};
