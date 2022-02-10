const Category = require("../../models/Category");

exports.getCatagories = async (req, res) => {
  try {
    const catagories = await Category.find().populate("recipes");
    return res.json(catagories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.createCategory = async (req, res, next) => {
  try {
    const newCategory = await Category.create(req.body);
    return res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};
// exports.getRecipes = async (req, res, next) => {
//   try {
//     const recipes = await Recipe.find();
//     return res.json(recipes);
//   } catch (error) {
//     next(error);
//   }
// };
// exports.recipeCreate = async (req, res) => {
//   try {
//     const CatagoryId = req.params.catagoryId;
//     req.body = { ...req.body, Catagory: CatagoryId };
//     const newRecipe = await recipe.create(req.body);
//     await Catagory.findOneAndUpdate(
//       { _id: req.params.catagoryId },
//       { $push: { recipes: newRecipe._id } }
//     );
//     return res.status(201).json(newRecipe);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };
