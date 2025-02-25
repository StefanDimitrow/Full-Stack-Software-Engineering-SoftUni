const cookieParser = require("cookie-parser");
const express = require("express");

function configExpress(app) {
  app.use(cookieParser);
  //TODO add session middleware

  app.use("/static", express.static("static"));
  app.use(express.urlencoded({ extended: true }));
}

module.exports = { configExpress };
