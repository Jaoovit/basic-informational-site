import http from "http";
import fs from "fs";
import path from "path";

const PORT = 8900;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "Content-type", "text/html");
    res.end("<h1>Homepage</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, "Content-type", "text/html");
    res.end("<h1>About</h1>");
  } else if (req.url === "/contact") {
    res.writeHead(200, "Content-type", "text/html");
    res.end("<h1>Contact me</h1>");
  } else {
    throw new Error("NOT FOUND");
  }
});

server.listen(PORT, () => {
  console.log(`This server is running in the ${PORT} port`);
});
