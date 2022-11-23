import dynamoDB from "./DynamoDB.js";
import { notFound } from "./utils/response.js";

const TABLE_NAME = "Game";

class Game {
  async create(uuid, name) {
    const id = Math.random().toString(36).slice(-10);

    await dynamoDB
      .put({
        TableName: TABLE_NAME,
        Item: {
          id,
          participants: {
            [uuid]: {
              name,
            },
          },
        },
      })
      .promise();

    return id;
  }

  async get(id) {
    const { Item } = await dynamoDB
      .get({
        TableName: TABLE_NAME,
        Key: { id },
      })
      .promise();

    if (!Item) throw notFound({ message: "Game not found" });

    return Item;
  }

  async join(id, uuid, name) {
    await this.get(id);

    const { Attributes } = await dynamoDB
      .update({
        TableName: TABLE_NAME,
        Key: { id },
        UpdateExpression: "SET participants.#uuid = :uuid",
        ExpressionAttributeNames: {
          "#uuid": uuid,
        },
        ExpressionAttributeValues: {
          ":uuid": {
            name,
          },
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();

      return Attributes;
  }
}

export default Game;
