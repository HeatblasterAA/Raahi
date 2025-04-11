const http = require("http");
const app = require("./app");
const { initializeSocket } = require("./socket");
const port = process.env.PORT || 3000;

const server = http.createServer(app);

initializeSocket(server);

server.listen(port, (error) => {
  if (error) {
    console.log("Error starting server:", error);
    return;
  }
  console.log(`Server running successfully on port ${port}`);
});
