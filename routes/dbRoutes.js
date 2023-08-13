import express from "express";
import {
  getItem,
  putItem,
  batchWriteItem,
  updateItem,
  deleteItem,
} from "../controllers/dbController.js";

const router = express.Router();

router.post("/batchWriteItem", batchWriteItem);
router.post("/putItem", putItem);
router.post("/updateItem", updateItem);
router.get("/getItem", getItem);
router.delete("/deleteItem", deleteItem);

export default router;
