import AWS from "aws-sdk";

export default new AWS.DynamoDB.DocumentClient(
  process.env.IS_OFFLINE
    ? {
        region: "localhost",
        endpoint: `http://localhost:8000`,
      }
    : { region: "sa-east-1" }
);
