/*
import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
*/

import "dotenv/config";
import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "src")));

/*
const server = http.createServer(async (req, res) => {
  let filePath;
  if (req.url === "/") {
    filePath = path.join(__dirname, "src", "index.html");
  } else if (req.url === "/about") {
    filePath = path.join(__dirname, "src", "about.html");
  } else if (req.url === "/contact") {
    filePath = path.join(__dirname, "src", "contact.html");
  } else {
    filePath = path.join(__dirname, "src", "404.html");
  }

  const data = await fs.readFile(filePath);
  res.setHeader("Content-Type", "text/html");
  res.write(data);
  res.end();
});
*/

app.listen(PORT, () =>
  console.log(`This server is running in the ${PORT} port`)
);

/*
server.listen(PORT, () => {
  console.log(`This server is running in the ${PORT} port`);
});
*/
