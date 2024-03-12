import { Server } from "socket.io";
import http from "http";
import express from "express";

export const app = express();

export const server = http.createServer(app);
export const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const userSocketMap = {};

export function getRecievedSocketId(recieverId) {
  return userSocketMap[recieverId];
}


io.on("connection", (socket) => {
  console.log("connected");
  const userId = socket.handshake.query.userId;

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  if (userId) {
    userSocketMap[userId] = socket.id;
  }

  socket.on("sendTyping", (data) => {
    const recieverId = data.id;
    if (userSocketMap.hasOwnProperty(recieverId)) {
      io.to(userSocketMap[recieverId]).emit("receiveTyping", {
        user: "is typing",
      });
    }
  });

  socket.on("disconnect", () => {
    if (userId) {
      delete userSocketMap[userId];
      io.emit("getOnlineUsers", Object.keys(userSocketMap));
    }
  });
});
