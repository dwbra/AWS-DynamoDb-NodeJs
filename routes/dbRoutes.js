import express from "express";
import {
  getItem,
  putItem,
  batchWriteItem,
} from "../controllers/dbController.js";

const router = express.Router();

router.post("/batchWriteItem", batchWriteItem);
router.post("/putItem", putItem);
router.get("/getItem", getItem);

export default router;
