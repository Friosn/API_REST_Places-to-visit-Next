const NaturalRoutes = require("express").Router();

//Now we import our controllers

const {
  getAllNatures,
  getNatureById,
  getNatureByName,
  getNatureByRegion,
  postNature,
  updateNature,
  deleteNature,
} = require("../controllers/naturalAreas.controller");

NaturalRoutes.get("/", getAllNatures);
NaturalRoutes.get("/:id", getNatureById);
NaturalRoutes.get("/:name", getNatureByName);
NaturalRoutes.get("/:region", getNatureByRegion);
NaturalRoutes.post("/", postNature);
NaturalRoutes.patch("/:id", updateNature);
NaturalRoutes.delete("/:id", deleteNature);

module.exports = NaturalRoutes;
