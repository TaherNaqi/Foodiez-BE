const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Ingredient", IngredientSchema);
