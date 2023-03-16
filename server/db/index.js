const fs = require("fs");
const { Pool } = require("pg");

const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, `./.env.${process.env.NODE_ENV}`),
});
const databaseUrl = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: databaseUrl,
});

if (process.env.NODE_ENV !== "production") {
  const seedQuery = fs.readFileSync("db/seedling.sql", {
    encoding: "utf8",
  });
  pool.query(seedQuery, (err, res) => {
    if (!err) {
      console.log(res);
      console.log("Seeding Successful!!!");
    } else {
      console.log(err);
      console.log("Seeding Incomplete!");
    }
    pool.end();
  });
}
