// import User from "../../lib/User";
import { badRequest, lambdaError, ok } from "../../lib/utils/response.js";
import Game from "../../lib/Game.js";

export const lambda = async (event) => {
  try {
    const id = await new Game().create();

    return ok({ id });
  } catch (err) {
    console.error(err);
    return lambdaError(err);
  }
};
