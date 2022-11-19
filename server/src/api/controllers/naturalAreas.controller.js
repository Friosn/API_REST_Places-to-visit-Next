const Nature = require("../models/naturalAreas.model");

const getAll = async (req, res, next) => {
  try {
    const natureAreas = await Nature.find();
    res.status(200).json(natureAreas);
  } catch (error) {
    return next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const natureArea = await Nature.findById(id);
    res.status(200).json(natureArea);
  } catch (error) {
    return next(error);
  }
};

const getByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const natureName = await Nature.findOne(name);
    res.status(200).json(natureName);
  } catch (error) {
    return next(error);
  }
};

const getByRegion = async (req, res, next) => {
  try {
    const { region } = req.params;
    const natureRegion = await Nature.findOne(region);
    res.status(200).json(natureRegion);
  } catch (error) {
    return next(error);
  }
};
