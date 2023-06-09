// const fs = require("fs");

// const index = fs.readFileSync("index.html", "utf-8");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;

const express = require("express");
const morgan = require('morgan');

// const server = express();
// server.get("/demo", (req, res) => {
//   res.send('<h1>hello</h1>');
  // res.sendFile('D:\01 training\Training\nodejs-masterclass\chp3\index.js')
  // res.json(products);
  // res.sendStatus(404);
// });



const server = express();

// server.use(express.json());
// server.use(express.urlencoded());
server.use(morgan('default'));
server.use(express.static('public'));
// server.use((req,res,next) => {
//   console.log(req.method, req.ip, req.hostname);
//   next();
// })

const auth = (req,res,next) => {
  // console.log(req.query);
  // if(req.body.password == '123'){
  //   next();
  // } else{
  //   res.sendStatus(401);
  // }
  next();
}

// server.use(auth);

server.get('/products/:id', auth, (req, res) => {
  console.log(req.params)
  res.json({type: "GET"})
})
server.post('/',auth, (req, res) => {
  res.json({type: "POST"})
})
server.put('/', (req, res) => {
  res.json({type: "PUT"})
})
server.delete('/', (req, res) => {
  res.json({type: "DELETE"})
})
server.patch('/', (req, res) => {
  res.json({type: "PATCH"})
})

server.listen(8080, () => {
  console.log("server started");
});
