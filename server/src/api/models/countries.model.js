const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    language: { type: String, require: true },
    continent: { type: String, require: true },
    origin: { type: String },
    towns: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "town",
        require: true,
      },
    ],
    habitat: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "nature",
        require: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Country = mongoose.model("country", countrySchema);

module.exports = Country;
