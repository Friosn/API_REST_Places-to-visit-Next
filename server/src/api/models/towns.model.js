const mongoose = require("mongoose");

const townSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    country: { type: String, require: true },
    region: { type: String, require: true },
    population: { type: Number, require: true },
    continent: { type: Number, require: true },
  },
  {
    timestamps: true,
  }
);

const Towns = mongoose.model("town", townSchema);

module.exports = Towns;
