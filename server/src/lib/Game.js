import dynamoDB from "./DynamoDB.js";
import { notFound } from "./utils/response.js";

const TABLE_NAME = "Game";

class Game {
  async create(name) {
    const id = Math.random().toString(36).slice(-10);

    await dynamoDB
      .put({
        TableName: TABLE_NAME,
        Item: {
          id,
          name
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

  async join(id, connectionId, name) {
    await this.get(id);

    const { Attributes } = await dynamoDB
      .update({
        TableName: TABLE_NAME,
        Key: { id },
        UpdateExpression: "SET #participants = list_append(if_not_exists(#participants, :empty_list), :connection)",
        ExpressionAttributeNames: {
          "#participants": "participants",
        },
        ExpressionAttributeValues: {
          ":connection": [{ connectionId, name }],
          ":empty_list": [],
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();

      return Attributes;
  }
}

export default Game;
