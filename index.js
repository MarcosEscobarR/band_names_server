const { Console } = require("console");
const express = require("express");
const path = require("path");
require("dotenv").config();

//express app
const app = express();

//node server
const server = require("http").createServer(app);
module.exports.io = require("socket.io")(server);

require('./socket/socket');

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);

  console.log(`server is running in port ${process.env.PORT}`);
});
