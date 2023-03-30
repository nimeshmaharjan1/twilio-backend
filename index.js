const http = require("http");
const path = require("path");
const express = require("express");

// Create Express webapp
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create http server and run it
const server = http.createServer(app);
const port = 3030;

server.listen(port, function () {
  console.log("Express server running on *:" + port);
});
