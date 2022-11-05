import dynamoDB from "./DynamoDB.js";
import { notFound } from "./utils/response.js";

const TABLE_NAME = "Popla";

class User {
  async get(id) {
    const user = await dynamoDB
      .get({
        TableName: TABLE_NAME,
        Key: { pk: `USER#${id}` },
      })
      .promise();

    if (!user.Item) throw notFound({ message: "User not found" });

    return this.formatUser(user.Item);
  }

  formatUser(user) {
    return {
      id: user.pk.split("#")[1],
      ...(user.name ? { name: user.name } : {}),
    };
  }
}

export default User;
