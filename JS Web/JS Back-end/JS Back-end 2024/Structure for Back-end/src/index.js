const express = require("express");
const { configDatabase } = require("./config/configDatabase");
const { configExpress } = require("./config/configExpress");
const { configHbs } = require("./config/configHbs");
const { configRoutes } = require("./config/configRoutes");

start();

async function start() {
  const app = express();

  await configDatabase();
  configExpress(app);
  configHbs(app);
  configRoutes(app);
}

app.listen(3000, () => console.log("Server started on http://localhost:3000"));
 