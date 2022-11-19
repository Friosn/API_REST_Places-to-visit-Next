//functions that will do the callbacks

const Towns = require("../models/towns.model");

const getTowns = async (req, res, next) => {
  try {
    const towns = await Towns.find();
    res.status(200).json(towns);
  } catch (error) {
    return next(error);
  }
};
const getTownsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const townId = await Towns.getById(id);
    res.status(200).json(townId);
  } catch (error) {
    return next(error);
  }
};

const getTownsByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const townName = await Towns.findOne(name);
    res.status(200).json(townName);
  } catch (error) {
    return next(error);
  }
};

const getTownsByContinent = async (req, res, next) => {
  try {
    const { continent } = req.params;
    const townsContinent = await Towns.findOne(continent);
    res.status(200).json(townsContinent);
  } catch (error) {
    return next(error);
  }
};

//--------------------- POST  TOWN---------------------

const postTown = async (req, res, next) => {
  try {
    const town = new Towns(req.body); //create
    const saveTownInDB = await town.save(); // save into DB
    return res.status(201).json(saveTownInDB); // inform of the success
  } catch (error) {
    return next(error);
  }
};

//--------------------- UPDATE TOWN --------------------

const updateTown = async (req, res, next) => {
  try {
    const { id } = req.params;
    const town = new Towns(req.body);
    town._id = id;

    const updatedTown = await Towns.findById(id);
    return res.status(200).json(updatedTown);
  } catch (error) {
    return next(error);
  }
};

//----------------------- DELETE TOWN --------------------

const deleteTown = async (req, res, next) => {
  try {
    const { id } = req.params;
    const toDeleteTown = await Towns.findByIdAndDelete(id);
    return res.status(200).json(toDeleteTown);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getTowns,
  getTownsById,
  getTownsByName,
  getTownsByContinent,
  postTown,
  updateTown,
  deleteTown,
};
