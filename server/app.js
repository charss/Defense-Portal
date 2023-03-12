const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});

app.listen(PORT, (error) => {
  if (error) console.log("Error occured, server can't start", error);
  console.log(`App is listening on port ${PORT}`);
});
