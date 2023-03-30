require("dotenv").config();

const { DB_HOST, DB_USER, DB_PASSWORD } = process.env

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: "GradingSystemV2",
    host: DB_HOST,
    dialect: "postgres",
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: "GradingSystemV2",
    host: DB_HOST,
    dialect: "postgres",
    logging: false,
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};