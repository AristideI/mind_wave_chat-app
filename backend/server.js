import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import usersRoutes from "./routes/user.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";
import cors from "cors";
import { app, server } from "./socket/socket.js";

// Consts setups
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// Configurations ans middlewares
app.use(cors());
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// AUTH
app.use("/api/auth", authRoutes);

// Messages
app.use("/api/messages", messageRoutes);

// Users
app.use("/api/users", usersRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/dist/index.html"));
});
//App Listening
server.listen(PORT, () => {
  connectMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
