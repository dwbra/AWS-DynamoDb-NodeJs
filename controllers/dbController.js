import queryDb from "../service/queryDb.js";
import putItemIntoDb from "../service/putItem.js";
import batchWriteItemsIntoDb from "../service/batchWriteItem.js";
import updateItemInDb from "../service/updateItem.js";
import deleteItemInDb from "../service/deleteItem.js";

/**
 * Get an item from the db table
 * @param {Object} req HTTP Request from Postman.
 * @param {Object} res Response from the server to the client.
 */
export const getItem = async (req, res) => {
  const { queryType, query } = req.body;
  const result = await queryDb(queryType, query);
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

/**
 * Update an item into the db table
 * @param {Object} req HTTP Request from Postman.
 * @param {Object} res Response from the server to the client.
 */
export const updateItem = async (req, res) => {
  const result = await updateItemInDb(req.body);
  return res.json(result);
};

/**
 * Put multiple items into the db table
 * @param {Object} req HTTP Request from Postman.
 * @param {Object} res Response from the server to the client.
 */
export const batchWriteItem = async (req, res) => {
  const result = await batchWriteItemsIntoDb(req.body);
  return res.json(result);
};

/**
 * Delete an item from the db table
 * @param {Object} req HTTP Request from Postman.
 * @param {Object} res Response from the server to the client.
 */
export const deleteItem = async (req, res) => {
  const result = await deleteItemInDb(req.body);
  return res.json(result);
};
