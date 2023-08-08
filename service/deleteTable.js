import { DeleteTableCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: "ap-southeast-2" });

(async () => {
  const command = new DeleteTableCommand({
    TableName: "Daniels-Music-Table",
  });

  const response = await client.send(command);
  console.log(response);
  return response;
})();
