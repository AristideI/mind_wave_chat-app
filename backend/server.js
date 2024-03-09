import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

// Consts setups
const PORT = process.env.PORT || 5000;
const app = express();

// Configurations ans middlewares
dotenv.config();
app.use(express.json());
app.use(cookieParser());

// Routes
app.get("/", (req, res) => {
  res.send("Server is ready");
});

// AUTH
app.use("/api/auth", authRoutes);

// Messages
app.use("/api/messages", messageRoutes);

//App Listening
app.listen(PORT, () => {
  connectMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
