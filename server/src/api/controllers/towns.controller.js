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
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const townId = await Towns.getById(id);
    res.status(200).json(townId);
  } catch (error) {
    return next(error);
  }
};

const getByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const townName = await Towns.findOne(name);
    res.status(200).json(townName);
  } catch (error) {
    return next(error);
  }
};

const getByContinent = async (req, res, next) => {
  try {
    const { continent } = req.params;
    const townsContinent = await Towns.findOne(continent);
    res.status(200).json(townsContinent);
  } catch (error) {
    return next(error);
  }
};
