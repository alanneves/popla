import dynamoDB from "./DynamoDB.js";
import { notFound } from "./utils/response.js";

const TABLE_NAME = "Game";

class Game {
  async create() {
    const id = Math.random().toString(36).slice(-10);

    await dynamoDB
      .put({
        TableName: TABLE_NAME,
        Item: { id },
      })
      .promise();

    return id;
  }
}

export default Game;
