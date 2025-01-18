const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/home") {
    res.end("Home page");
  } else if (req.url === "/about") {
    res.end("About page");
  } else {
    res.end("Page not found!");
  }
});

server.listen(3000);
