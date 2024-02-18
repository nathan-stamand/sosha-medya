import "reflect-metadata";
import path from "node:path";
import { DataSource } from "typeorm";
import config from "./config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: config.get("postgres.host"),
  port: Number(config.get("postgres.port")),
  username: config.get("postgres.user"),
  password: config.get("postgres.password"),
  database: config.get("postgres.database"),
  synchronize: config.get("env") === "development",
  logging: config.get("env") === "development",
  entities: [
    config.get("env") === "development"
      ? path.join(__dirname, "src/apps/**/model.ts")
      : path.join(__dirname, "dist/apps/**/model.js"),
  ],
  migrations: [
    config.get("env") === "development"
      ? path.join(__dirname, "src/migrations/**/*.ts")
      : path.join(__dirname, "dist/migrations/**/*.ts"),
  ],
});
