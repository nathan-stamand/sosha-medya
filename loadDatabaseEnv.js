#!/bin/node

const fs = require("node:fs");
const config = require("./config");

const postgresVars = {
  POSTGRES_DB: config.get("postgres.database"),
  POSTGRES_HOST: config.get("postgres.host"),
  POSTGRES_PORT: config.get("postgres.port"),
  POSTGRES_USER: config.get("postgres.user"),
  POSTGRES_PASSWORD: config.get("postgres.password"),
};

const envDbContent = Object.entries(postgresVars)
  .map(([key, value]) => `${key}=${value}`)
  .join('\n')

fs.writeFileSync('.env.db', envDbContent)
