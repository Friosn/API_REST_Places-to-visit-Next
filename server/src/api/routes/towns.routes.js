const TownRoutes = require("express").Router();

//Now we import our controllers

const {
  getTowns,
  getTownsById,
  getTownsByName,
  getTownsByContinent,
  postTown,
  updateTown,
  deleteTown,
} = require("../controllers/towns.controller");

TownRoutes.get("/", getTowns);
TownRoutes.get("/:id", getTownsById);
TownRoutes.get("/:name", getTownsByName);
TownRoutes.get("/:continent", getTownsByContinent);
TownRoutes.post("/", postTown);
TownRoutes.patch("/:id", updateTown);
TownRoutes.delete("/:id", deleteTown);

module.exports = PlayerRoutes;
