const mongooseSlugPlugin = require("mongoose-slug-plugin");
const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true }
);

IngredientSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });
module.exports = mongoose.model("Ingredient", IngredientSchema);
