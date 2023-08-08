import { CreateTableCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: "ap-southeast-2" });

const input = {
  TableName: "Daniels-Music-Table",
  AttributeDefinitions: [
    {
      AttributeName: "Artist",
      AttributeType: "S",
    },
    {
      AttributeName: "SongTitle",
      AttributeType: "S",
    },
    {
      AttributeName: "AlbumTitle",
      AttributeType: "S",
    },
    {
      AttributeName: "Genre",
      AttributeType: "S",
    },
    {
      AttributeName: "YearReleased",
      AttributeType: "N",
    },
  ],
  KeySchema: [
    {
      AttributeName: "Artist",
      KeyType: "HASH",
    },
    {
      AttributeName: "SongTitle",
      KeyType: "RANGE",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
  //For when you want an index that uses the primary partition key
  LocalSecondaryIndexes: [
    {
      IndexName: "GenreIndex",
      KeySchema: [
        {
          AttributeName: "Artist",
          KeyType: "HASH",
        },
        {
          AttributeName: "Genre",
          KeyType: "RANGE",
        },
      ],
      //https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Projection.html
      Projection: {
        //Only the index and primary keys are projected into the index.
        ProjectionType: "KEYS_ONLY",
      },
    },
  ],
  //For when you want to create an index that does not require the primary table partition key (primary-key).
  GlobalSecondaryIndexes: [
    {
      IndexName: "AlbumTitleByYearIndex",
      KeySchema: [
        {
          AttributeName: "AlbumTitle",
          KeyType: "HASH",
        },
        {
          AttributeName: "YearReleased",
          KeyType: "RANGE",
        },
      ],
      Projection: {
        //All of the table attributes are projected into the index.
        ProjectionType: "ALL",
      },
      //https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ProvisionedThroughput.html
      ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5,
      },
    },
  ],
};

(async () => {
  const command = new CreateTableCommand(input);
  const response = await client.send(command);
  console.log(response);
  return response;
})();
