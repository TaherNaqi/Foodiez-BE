const Ingredient = require("../../models/Ingredient");

exports.fetchIngredients = async (ingredientId, next) => {
  try {
    const ingredient = await Ingredient.findById(ingredientId);
    return ingredient;
  } catch (error) {
    next(error);
  }
};
exports.getIngredients = async (req, res, next) => {
  try {
    const ingredients = await Ingredient.find();
    return res.json(ingredients);
  } catch (error) {
    next(error);
  }
};

exports.ingredientCreate = async (req, res, next) => {
  try {
    const newIngredient = await Ingredient.create(req.body);
    return res.status(201).json(newIngredient);
  } catch (error) {
    next(error);
  }
};
