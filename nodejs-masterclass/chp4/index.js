const fs = require("fs");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const server = express();


// Body Parser
server.use(express.json());


// READ GET /products
server.get("/products", (req, res) => {
  res.json(products);
});

// Create POST /products      C R U D
server.post("/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201).json(req.body);
});

// READ GET /products/:id
server.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => {
    return p.id === id;
  });
  res.json(product);
});

// Update PUT /products/:id
server.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((p) => {
    return p.id === id;
  });
  products.splice(productIndex, 1, {...req.body, id:id})
  res.status(201).json();
});
// Update PATCH /products/:id
server.patch("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((p) => {
    return p.id === id;
  });
  products.splice(productIndex, 1, {...products[productIndex], ...req.body})
  res.status(201).json();
});

// Delete DELETE /products/:id
server.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((p) => {
    return p.id === id;
  });
  products.splice(productIndex, 1)
  res.status(201).json();
});



server.listen(8080, () => {
  console.log("server started");
});
