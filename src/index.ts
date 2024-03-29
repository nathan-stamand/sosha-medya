const express = require("express");
const config = require("../config");
import "reflect-metadata";
const { AppDataSource } = require("./data-source");
import { Request, Response } from "express";

const app = express();
const port = config.get("port");

// Allow any ole ping when I'm develop-ping
if (config.get("env") === "development") {
  const cors = require("cors");
  app.use(cors());
}

app.get("*", (req: Request, res: Response) => {
  res.json({ body: "This is a response" });
});

app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});

export default {};
