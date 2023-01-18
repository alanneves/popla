import dynamoDB from "./DynamoDB.js";

const TABLE_NAME = "UserGame";

class UserGame {
  async create(connectionId, gameId) {
    await dynamoDB
      .put({
        TableName: TABLE_NAME,
        Item: {
          connectionId,
          gameId
        },
      })
      .promise();

    return {
      connectionId,
      gameId
    };
  }
}

export default UserGame;
