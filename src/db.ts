const { Pool } = require("pg");
const config = require("../config");

const pool = new Pool({
  database: config.get("postgres.database"),
  host: config.get("postgres.host"),
  port: config.get("postgres.port"),
  user: config.get("postgres.user"),
  password: config.get("postgres.password"),
});

async function testConnection() {
  try {
    await pool.query("SELECT NOW()");
    console.log("Database successfully connected!");
  } catch (err) {
    console.error("Database connection failed: ", err);
    process.exit(1);
  }
}

module.exports = testConnection;
