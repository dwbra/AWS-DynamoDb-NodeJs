import { UpdateItemCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: "ap-southeast-2" });

// JSON Payload example. If there is a partition and sort key you need to include both.
// {
//    "Key":{
//       "Artist":{
//          "S":"Phil Collins"
//       },
//       "SongTitle":{
//          "S":"You'll be in my heard"
//       }
//    },
//    "UpdateExpression":"set AlbumTitle = :title",
//    "ExpressionAttributeValues":{
//       ":title":{
//          "S":"Tarzan: Disney Movie"
//       }
//    },
//    "TableName":"Daniels-Music-Table",
//    "ReturnValues":"ALL_NEW"
// }

/**
 * Update items in your dynamodb table.
 * @param {Object} updateItem JSON object example above.
 */
const updateItemInDb = async (updateItem) => {
  const command = new UpdateItemCommand(updateItem);

  try {
    const response = await client.send(command);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default updateItemInDb;
