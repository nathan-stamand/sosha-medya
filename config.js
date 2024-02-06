const convict = require("convict");
const convictFormatWithValidator = require("convict-format-with-validator");

convict.addFormats(convictFormatWithValidator);

const config = convict({
  env: {
    doc: "The environment the app is currently in",
    format: ["production", "development"],
    default: "development",
    env: "NODE_ENV",
  },
  port: {
    doc: "The port the app runs from",
    format: "port",
    default: 8000,
    arg: "port",
  },
  postgres: {
    database: {
      doc: "Database name",
      format: String,
      default: "default_database",
    },
    host: {
      doc: "Database host",
      format: String,
      default: "default_host",
    },
    port: {
      doc: "Database port",
      format: Number,
      default: "default_port",
    },
    user: {
      doc: "Database User",
      format: String,
      default: "default_user",
    },
    password: {
      doc: "Database Password",
      format: String,
      default: "default_password",
    },
  },
});

const env = config.get("env");
config.loadFile(`./.env.${env}.json`);

config.validate({ allowed: "strict" });

module.exports = config;
