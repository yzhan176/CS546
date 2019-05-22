const userRoutes = require("./users");
const express = require("express");
const app = express();

const constructorMethod = app => {
    app.use("/",userRoutes);
    app.use("*", (req, res) => {
      res.status(404).json({ error: "Not found" });
    });
  };
  
  constructorMethod(app);
  module.exports = constructorMethod;
  
