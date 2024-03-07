import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";
const router = express.Router();

//sign up
router.get("/signup", signup);

//login
router.get("/login", login);

//logout
router.get("/logout", logout);

export default router;
