import {
  BatchWriteItemCommand,
  DynamoDBClient,
} from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: "ap-southeast-2" });

// Example JSON Object required
// const dataObject = {
//   RequestItems: {
//     "Daniels-Music-Table": [
//       {
//         PutRequest: {
//           Item: {
//             Artist: {
//               S: "Led Zeppelin",
//             },
//             SongTitle: {
//               S: "Stairway to Heaven",
//             },
//             AlbumTitle: {
//               S: "Led Zeppelin IV",
//             },
//             Genre: {
//               S: "Rock n Roll",
//             },
//             YearReleased: {
//               N: "1972",
//             },
//             SongLength: {
//               S: "8:02",
//             },
//           },
//         },
//       },
//       {
//         PutRequest: {
//           Item: {
//             Artist: {
//               S: "Phil Collins",
//             },
//             SongTitle: {
//               S: "You'll be in my heard",
//             },
//             AlbumTitle: {
//               S: "Tarzan",
//             },
//             Genre: {
//               S: "Pop",
//             },
//             YearReleased: {
//               N: "1999",
//             },
//             SongLength: {
//               S: "4:18",
//             },
//           },
//         },
//       },
//     ],
//   },
//   ReturnConsumedCapacity: "TOTAL",
// };

// const jsonString = JSON.stringify(dataObject);
// console.log(jsonString);

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
