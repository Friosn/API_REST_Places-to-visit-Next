const Nature = require("../models/naturalAreas.model");

const getAllNatures = async (req, res, next) => {
  try {
    const natureAreas = await Nature.find();
    res.status(200).json(natureAreas);
  } catch (error) {
    return next(error);
  }
};

const getNatureById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const natureArea = await Nature.findById(id);
    res.status(200).json(natureArea);
  } catch (error) {
    return next(error);
  }
};

const getNatureByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const natureName = await Nature.findOne(name);
    res.status(200).json(natureName);
  } catch (error) {
    return next(error);
  }
};

const getNatureByRegion = async (req, res, next) => {
  try {
    const { region } = req.params;
    const natureRegion = await Nature.findOne(region);
    res.status(200).json(natureRegion);
  } catch (error) {
    return next(error);
  }
};

// ---------------------POST NATURAL-AREAS ---------------------

const postNature = async (req, res, next) => {
  try {
    const nature = new Nature(req.body); // Aquí cremos un nuevo elemento con el modelo Nature
    const saveNatureInDB = await nature.save(); //Aquí guardamos el elemento
    return res.status(201).json(saveNatureInDB); // Aqúi avisamos al usuario de que hemos guardado este elemento creado
  } catch (error) {
    return next(error);
  }
};

//---------------------UPDATE NATURAL-AREAS-----------------------

const updateNature = async (req, res, next) => {
  try {
    const { id } = req.params; //Lo haremos por el id
    const nature = new Nature(req.body); //traemos los nuevos datos (todos), este es el backend, si hubiese que matchear con un nombre oun atributo, tardaría más la respuesta del servidor, esto se hace desde el front
    nature._id = id;

    const updatedNature = await Nature.findByIdAndUpdate(id, nature);
    return res.status(200).json(updatedNature);
  } catch (error) {
    return next(error);
  }
};

//--------------------- DELETE  NATURAL-AREAS-----------------------

const deleteNature = async (req, res, next) => {
  try {
    const { id } = req.params;
    const toDeleteNature = await Nature.findByIdAndDelete(id);
    return res.status(200).json(toDeleteNature);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllNatures,
  getNatureById,
  getNatureByName,
  getNatureByRegion,
  postNature,
  updateNature,
  deleteNature,
};
