import express from "express";
import { getUsers } from "../controllers/user.controller.js";
import { protectSendRoute } from "../middlewares/protectSend.js";

const router = express.Router();

router.get("/", protectSendRoute, getUsers);

export default router;
