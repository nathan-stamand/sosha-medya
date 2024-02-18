import express, { Request, Response } from "express";
import config from "./config";
import "reflect-metadata";
import cors from "cors"
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("TypeORM data source initialized, connected to Database");
  })
  .catch((err: Error) => {
    console.log("TypeORM error: ", err);
  });

const app = express();
const port = config.get("port");

app.use(express.json());

if (config.get("env") === "development") {
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    }),
  );
}

app.post("/api/login", (req: Request, res: Response) => {
  res.json({ hello: "bruh" });
});

app.post("/api/register", (req: Request, res: Response) => {
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});

export default {}
