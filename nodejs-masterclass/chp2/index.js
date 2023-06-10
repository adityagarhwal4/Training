const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const products = data.products;

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/product")) {
    const id = req.url.split("/")[req.url.split("/").length - 1];
    const product = products.find((p) => {
      return p.id === Number(id);
    });
    console.log(product);
    res.setHeader("Content-Type", "text/html");
    let modifiedIndex = index
      .replace("**title**", product.title)
      .replace("**url**", product.thumbnail)
      .replace("**price**", product.price)
      .replace("**rating**", product.rating);
    res.end(modifiedIndex);
    return;
  }

  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
      break;
    case "/products":
      res.setHeader("Content-Type", "text/html");
      let modifiedIndex = index
        .replace("**title**", product.title)
        .replace("**url**", product.thumbnail)
        .replace("**price**", product.price)
        .replace("**rating**", product.rating);
      res.end(modifiedIndex);
      break;
    default:
      res.writeHead(404, "Not Found");
      res.end();
  }
  console.log("Server Started");
  //   res.setHeader("Dummy", "DummyHeader");
  //   res.setHeader("Content-Type", "text/html");
  //   res.setHeader("Content-Type", "application/json")
  //   res.end(index);
});
server.listen(8080);
