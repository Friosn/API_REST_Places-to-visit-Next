const express = require("express");
const cors = require("cors");

const connect = require("./utils/database/db");

const TownRoutes = require("./api/routes/towns.routes");
const NaturalRoutes = require("./api/routes/naturalAreas.routes");
const CountryRoutes = require("./api/routes/countries.routes");

connect();

const server = express();

server.use(cors());

//FINAL STEP after the reoute's creation!!!-----------------

server.use("/api/towns", TownRoutes);
server.use("/api/habitat", NaturalRoutes);
server.use("/api/country", CountryRoutes);

//-------------------------------------------------

/* server.use(express.json()); */

server.use("/public", express.static("public"));

server.use("/api", (req, res, next) => res.send("Open"));

server.use((req, res, next) => {
  setImmediate(() => {
    next(new Error("There is a cocroach somewhere 🪳"));
  });
});

server.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

server.listen(process.env.PORT, () => console.log("Listen"));
