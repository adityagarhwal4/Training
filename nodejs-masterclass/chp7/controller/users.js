const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = data.users;

exports.createProduct = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.status(201).json(req.body);
};

exports.getAllusers = (req, res) => {
  res.json(users);
};

exports.getProduct = (req, res) => {
  const id = Number(req.params.id);
  const product = users.find((p) => {
    return p.id === id;
  });
  res.json(product);
};

exports.replaceProduct = (req, res) => {
  const id = Number(req.params.id);
  const productIndex = users.findIndex((p) => {
    return p.id === id;
  });
  users.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};

exports.updateProduct = (req, res) => {
  const id = Number(req.params.id);
  const productIndex = users.findIndex((p) => {
    return p.id === id;
  });
  users.splice(productIndex, 1, { ...users[productIndex], ...req.body });
  res.status(201).json();
};

exports.deleteProduct = (req, res) => {
  const id = Number(req.params.id);
  const productIndex = users.findIndex((p) => {
    return p.id === id;
  });
  users.splice(productIndex, 1);
  res.status(201).json();
};
