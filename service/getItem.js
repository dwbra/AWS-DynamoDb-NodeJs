import { GetItemCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: "ap-southeast-2" });

// const input = {
//   Key: {
//     Artist: {
//       S: "Doja Cat",
//     },
//     SongTitle: {
//       S: "S",
//     },
//   },
//   TableName: "Daniels-Music-Table",
// };

const getDbItem = async (input) => {
  const command = new GetItemCommand(input);

  try {
    const response = await client.send(command);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default getDbItem;
