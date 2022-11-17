const mongoose = require("mongoose");

const natureAreasSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    country: { type: String, require: true },
    region: { type: String, require: true },
    vegetation: { type: String },
    age: { type: Number, require: true },
  },
  {
    timestamps: true,
  }
);

const NaturAreas = mongoose.model("nature", natureAreasSchema);

module.exports = NaturAreas;
