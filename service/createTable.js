import { CreateTableCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: "ap-southeast-2" });

export const createTable = async (jsonData) => {
  const command = new CreateTableCommand(jsonData);
  const response = await client.send(command);
  console.log(response);
  //   return response;
};
