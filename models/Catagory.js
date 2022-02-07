const mongooseSlugPlugin = require("mongoose-slug-plugin");
const mongoose = require("mongoose");

const CatagorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  //   recipies: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipe" }],

  //   timestamps: true,
});

CatagorySchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });
module.exports = mongoose.model("Catagory", CatagorySchema);
