// import User from "../../lib/User";
import { badRequest, lambdaError, ok } from "../../lib/utils/response.js";
import Game from "../../lib/Game.js";

export const lambda = async (event) => {
  try {
    const id = event.pathParameters.id;

    const game = await new Game().get(id);

    return ok(game);
  } catch (err) {
    console.error(err);
    return lambdaError(err);
  }
};
