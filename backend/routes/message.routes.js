import express from "express";
import {
  getMessages,
  sendMessages,
} from "../controllers/messages.controller.js";
import { protectSendRoute } from "../middlewares/protectSend.js";

const router = express.Router();

router.post("/send/:id", protectSendRoute, sendMessages);
router.get("/:id", protectSendRoute, getMessages);

export default router;
