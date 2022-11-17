const mongoose = require("mongoose");

const natureAreaSchema = new mongoose.Schema(
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

const Nature = mongoose.model("nature", natureAreaSchema);

module.exports = Nature;
