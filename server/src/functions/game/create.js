// import User from "../../lib/User";
import { badRequest, lambdaError, ok } from "../../lib/utils/response.js";
import Game from "../../lib/Game.js";

export const lambda = async (event) => {
  try {
    const sessionUuid = event?.headers?.["x-session-uuid"];
    const name = event?.headers?.name;

    if (!sessionUuid || !name) return badRequest({ message: "Missing user data" });

    const id = await new Game().create(sessionUuid, name);

    return ok({ id });
  } catch (err) {
    console.error(err);
    return lambdaError(err);
  }
};
