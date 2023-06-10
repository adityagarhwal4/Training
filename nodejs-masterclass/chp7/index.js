require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const server = express();
const productRouter = require("./routes/productRouter");
// const usersRouter = require('./routes/usersRouter')

// DB CONNECTION CODE
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecomm");
  console.log("database connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// SCHEMA


// Body Parser
server.use(express.json());
server.use("/products", productRouter.router);
// server.use('/users', usersRouter.router);

server.listen(8080, () => {
  console.log("server started");
});

// 5RLlE8XlsIs7pHxU
