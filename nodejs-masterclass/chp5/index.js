const express = require("express");
const server = express();
const productRouter = require('./routes/productRouter')
// const usersRouter = require('./routes/usersRouter')

// Body Parser
server.use(express.json());
server.use('/products', productRouter.router);
// server.use('/users', usersRouter.router);


server.listen(8080, () => {
  console.log("server started");
});


// 5RLlE8XlsIs7pHxU