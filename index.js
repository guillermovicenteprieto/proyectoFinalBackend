import dotenv from "dotenv";
dotenv.config();
import app from "./src/app.js";
import logger from "./src/utils/loggers.js";
import cors from "cors";
const PORT = process.env.PORT;

import sockets from "./src/sockets.js"
import { Server as WebSocketServer } from "socket.io";
import http from "http";

const server = http.createServer(app);
const httpServer = server.listen(PORT);


const io = new WebSocketServer(httpServer);
sockets(io)
logger.info("Server on http://localhost:", PORT);
app.use(cors());

// io.on('connection', async (socket) => {
//   const message = await chat.loadMessage()
//   socket.emit('messages', message )
 
//   socket.on('message-new',async data => {
//       await chat.saveMessage(data)
//       const message2 = await chat.loadMessage()
//       io.sockets.emit('messages', message2 );
//   });
// })
//import { Socket } from "socket.io";
// app.use(cors());
// app.use(express.static("views"))

/*============================[Servidor]============================*/
/*
const PORT = process.env.PORT;
if (serverMode == "CLUSTER") {
  logger.info(`Primary: ${process.pid}`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("listening", (worker, address) => {
    logger.info(`worker ${worker.process.pid} connected to ${address.port}`);
  });
} else {
  app
    .listen(PORT, () =>
      logger.info(
        `Worker: ${process.pid} at http://localhost:${PORT} mode: ${serverMode}`
      )
    )
    .on("error", (err) => logger.error(err));
}
*/