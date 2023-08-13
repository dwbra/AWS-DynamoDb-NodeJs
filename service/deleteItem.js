import { DeleteItemCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: "ap-southeast-2" });

// JSON Payload example. If there is a partition and sort key you need to include both.
// {
//    "TableName":"Daniels-Music-Table",
//    "Key":{
//       "Artist":{
//          "S":"Phil Collins"
//       },
//       "SongTitle":{
//          "S":"You'll be in my heard"
//       }
//    }
// }

/**
 * A function to remove an item from your dynamodb table.
 * @param {Object} item JSON Object containing the data required to remove the item from the table, example above.
 */
const deleteItemInDb = async (item) => {
  const command = new DeleteItemCommand(item);

  try {
    const response = await client.send(command);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default deleteItemInDb;
