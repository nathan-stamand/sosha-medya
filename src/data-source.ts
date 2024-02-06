import "reflect-metadata";
import { DataSource } from "typeorm";
const config = require("../config");

export const AppDataSource = new DataSource({
  type: "postgres",
  host: config.get("postgres.host"),
  port: config.get("postgres.port"),
  username: config.get("postgres.user"),
  password: config.get("postgres.password"),
  database: config.get("postgres.database"),
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("TypeORM data source initialized, connected to Database");
  })
  .catch((err) => {
    console.log("TypeORM error: ", err);
  });
