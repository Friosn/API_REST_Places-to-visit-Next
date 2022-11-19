const CountryRoutes = require("express").Router();

//Now we import our controllers

const {
  getCountries,
  getCountriesById,
  getCountriesByContinent,
  getCountriesByLanguage,
  getCountriesByName,
  postCountry,
  updateCountry,
  deleteCountry,
} = require("../controllers/countries.controller");

CountryRoutes.get("/", getCountries);
CountryRoutes.get("/:id", getCountriesById);
CountryRoutes.get("/:name", getCountriesByName);
CountryRoutes.get("/:continent", getCountriesByContinent);
CountryRoutes.get("/:language", getCountriesByLanguage);
CountryRoutes.post("/", postCountry);
CountryRoutes.patch("/:id", updateCountry);
CountryRoutes.delete("/:id", deleteCountry);

module.exports = CountryRoutes;
