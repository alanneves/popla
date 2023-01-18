import Game from "../../lib/Game.js";
import UserGame from "../../lib/UserGame.js";
import AWS from "aws-sdk";

const apig = new AWS.ApiGatewayManagementApi({
  apiVersion: "2018-11-29",
  endpoint: "http://localhost:3001",
});

export const lambda = async (event) => {
  const {
    body,
    queryStringParameters,
    requestContext: { connectionId, routeKey },
  } = event;
  switch (routeKey) {
    case "$connect":
      try {
        const { gameId, name } = queryStringParameters;
        await new UserGame().create(gameId, connectionId, name);
      } catch (e) {
        console.log(e);
        throw e;
      }
      break;

    case "$disconnect":
      console.log("Disconnect");
      console.log(event);
      break;

    case "$disconnect":
      console.log("Disconnect");
      console.log(event);
      break;
  }

  return { statusCode: 200 };
};

const joinGame = async (gameId, name, connectionId) => {
  try {
    const game = await new Game().join(gameId, connectionId, name);
    await new UserGame().create(gameId, connectionId, name);

    return {
      gameId,
      connectionId,
      game,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};
