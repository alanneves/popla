import AWS from "/var/runtime/node_modules/aws-sdk/lib/aws.js";

export default new AWS.DynamoDB.DocumentClient(
  process.env.IS_OFFLINE
    ? {
        region: "localhost",
        endpoint: `http://localhost:8000`,
      }
    : { region: "sa-east-1" }
);
