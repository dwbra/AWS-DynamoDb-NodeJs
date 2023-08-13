import { DeleteTableCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: "ap-southeast-2" });

/**
 * A self invoked function so that developers can hit this file with the server running if they want to remove the table.
 */
(async () => {
  const command = new DeleteTableCommand({
    TableName: "Daniels-Music-Table",
  });

  const response = await client.send(command);
  console.log(response);
  return response;
})();
