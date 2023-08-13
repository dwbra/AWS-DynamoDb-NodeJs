import { PutItemCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: "ap-southeast-2" });

// As Dynamodb is schemaless, we are able to put any data fields into the db as long as we provide the primitive and sort keys.
/* EXAMPLE POSTMAN JSON DATA
    {
        "itemObject": {
            "Artist": {"S": "Elton John"},
            "SongTitle": {"S": "Honky Cat"},
            "AlbumTitle": {"S": "Honky Château"},
            "Genre": {"S": "Rock"},
            "YearReleased": {"N": "1972"},
            "SongLength": {"S": "5:12" }
        },
        "tableName": "Daniels-Music-Table"
    }
*/

/**
 * A function to place items into your dynamodb table.
 * @param {String} tableName The name of the dynamodb table.
 * @param {Object} itemObject Object containing the data to put into the table, example above.
 */
const putItemIntoDb = async (tableName, itemObject) => {
  const command = new PutItemCommand({
    TableName: tableName,
    Item: itemObject,
  });

  try {
    const response = await client.send(command);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default putItemIntoDb;
