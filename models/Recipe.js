const mongooseSlugPlugin = require("mongoose-slug-plugin");
const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" }],
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

RecipeSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });
module.exports = mongoose.model("Recipe", RecipeSchema);
