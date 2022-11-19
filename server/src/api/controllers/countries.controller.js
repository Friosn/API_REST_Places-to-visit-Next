const Country = require("../models/countries.model");

const getCountries = async (req, res, next) => {
  try {
    const countries = await Country.find().populate("nature").populate("town");
    res.status(200).json(countries);
  } catch (error) {
    return next(error);
  }
};
const getCountriesById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const countryId = await Towns.getById(id);
    res.status(200).json(countryId);
  } catch (error) {
    return next(error);
  }
};

const getCountriesByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const countryName = await Country.findOne(name)
      .populate("nature")
      .populate("town");
    res.status(200).json(countryName);
  } catch (error) {
    return next(error);
  }
};

const getCountriesByContinent = async (req, res, next) => {
  try {
    const { continent } = req.params;
    const countriesContinent = await Country.findOne(continent);
    res.status(200).json(countriesContinent);
  } catch (error) {
    return next(error);
  }
};

const getCountriesByLanguage = async (req, res, next) => {
  try {
    const { lenguage } = req.params;
    const countryByLenguage = await Country.findOne(lenguage);
    return res.status(200).json(countryByLenguage);
  } catch (error) {
    return next(error);
  }
};

//--------------------- POST  TOWN---------------------

const postCountry = async (req, res, next) => {
  try {
    const country = new Country(req.body); //create
    const saveCountryInDB = await country.save(); // save into DB
    return res.status(201).json(saveCountryInDB); // inform of the success
  } catch (error) {
    return next(error);
  }
};

//--------------------- UPDATE TOWN --------------------

const updateCountry = async (req, res, next) => {
  try {
    const { id } = req.params;
    const country = new Country(req.body);
    country._id = id;

    const updatedCountry = await Country.findByIdAndUpdate(id);
    return res.status(200).json(updatedCountry);
  } catch (error) {
    return next(error);
  }
};

//----------------------- DELETE TOWN --------------------

const deleteCountry = async (req, res, next) => {
  try {
    const { id } = req.params;
    const toDeleteCountry = await Country.findByIdAndDelete(id);
    return res.status(200).json(toDeleteCountry);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getCountries,
  getCountriesById,
  getCountriesByContinent,
  getCountriesByLanguage,
  getCountriesByName,
  postCountry,
  updateCountry,
  deleteCountry,
};
