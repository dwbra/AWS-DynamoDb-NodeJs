import {
  BatchWriteItemCommand,
  DynamoDBClient,
} from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: "ap-southeast-2" });

/**
 * A function to add multiple items into your dynamodb table.
 * @param {Object} dataObject JSON data object, example in mock dir.
 */
const batchWriteItemsIntoDb = async (dataObject) => {
  const command = new BatchWriteItemCommand(dataObject);
  try {
    const response = await client.send(command);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default batchWriteItemsIntoDb;
