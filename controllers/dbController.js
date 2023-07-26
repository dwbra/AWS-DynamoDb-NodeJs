import createTable from "../service/createTable.js";

/**
 * Create a new table
 * @param {Object} req HTTP Request from Postman.
 * @param {Object} res Response from the server to the client.
 */
export const createNewTable = async (req, res) => {
  const result = await createTable(req.body);
  return res.json(result);
};

//Delete Table

//List Tables

//Create Entry

//Update Entry

//Query Entry

//Delete Entry
