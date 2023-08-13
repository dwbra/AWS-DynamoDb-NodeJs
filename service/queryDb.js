import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { QueryCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({ region: "ap-southeast-2" });

// Scans are expensive operations and should be avoided in preference of queries
// Scan - Return all data in an index
// {
//    "query":{
//       "TableName":"Daniels-Music-Table",
//       "IndexName":"GenreIndex"
//    },
//    "queryType":"scan"
// }

// Query - get all songs by John Mayer
// {
//    "query":{
//       "TableName":"Daniels-Music-Table",
//       "KeyConditionExpression":"Artist = :name",
//       "ExpressionAttributeValues":{
//          ":name":"John Mayer"
//       }
//    },
//    "queryType":"query"
// }

// Query - get all artists that belong to a specific genre
// {
//    "query":{
//       "TableName":"Daniels-Music-Table",
//       "IndexName":"GenreIndex",
//       "KeyConditionExpression":"Genre = :genre",
//       "ExpressionAttributeValues":{
//          ":genre":"Pop"
//       }
//    },
//    "queryType":"query"
// }

const queryCommand = QueryCommand;
const scanCommand = ScanCommand;

/**
 * A query function to let us query or scan the dynamodb table.
 * @param {String} queryType A string value so that we can switch how we query the db.
 * @param {Object} query An object containing the query data, examples above.
 */
const queryDb = async (queryType, query) => {
  let command = "";

  if (queryType === "query") {
    command = new queryCommand(query);
  }

  if (queryType === "scan") {
    command = new scanCommand(query);
  }

  try {
    const response = await client.send(command);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default queryDb;
