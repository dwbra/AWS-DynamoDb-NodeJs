import getDbItem from "../service/getItem.js";
import putItemIntoDb from "../service/putItem.js";
import batchWriteItemsIntoDb from "../service/batchWriteItem.js";

/**
 * Get an item from the db table
 * @param {Object} req HTTP Request from Postman.
 * @param {Object} res Response from the server to the client.
 */
export const getItem = async (req, res) => {
  const result = await getDbItem(req.body);
  return res.json(result);
};

/**
 * Put an item into the db table
 * @param {Object} req HTTP Request from Postman.
 * @param {Object} res Response from the server to the client.
 */
export const putItem = async (req, res) => {
  const { tableName, itemObject } = req.body;
  const result = await putItemIntoDb(tableName, itemObject);
  return res.json(result);
};

//updateItem

//deleteItem

//BatchGetItem

/**
 * Put an item into the db table
 * @param {Object} req HTTP Request from Postman.
 * @param {Object} res Response from the server to the client.
 */
export const batchWriteItem = async (req, res) => {
  const result = await batchWriteItemsIntoDb(req.body);
  return res.json(result);
};
