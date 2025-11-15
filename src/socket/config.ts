import http from "http";
import { Server } from "socket.io";

let io: Server;

export function initSocket(server: http.Server) {
  io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL || "http://localhost:5173",
      methods: ["GET"],
    },
  });

  io.on("error", (error) => {
    console.error("Error en Socket.io:", error);
  });

  return io;
}

export function getIO(): Server {
  if (!io) {
    throw new Error("Socket.io no está inicializado");
  }
  return io;
}
