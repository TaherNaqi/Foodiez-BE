const Recipe = require("../../models/Recipe");
const Ingredient = require("../../models/Ingredient");
exports.fetchRecipe = async (recipeId, next) => {
  try {
    const recipe = await Recipe.findById(recipeId);
    return recipe;
  } catch (error) {
    next(error);
  }
};
exports.getRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    return res.json(recipes);
  } catch (error) {
    next(error);
  }
};

exports.recipeCreate = async (req, res, next) => {
  try {
    req.body.owner = req.user.id;
    const newRecipe = await Recipe.create(req.body);
    return res.status(201).json(newRecipe);
  } catch (error) {
    next(error);
  }
};

exports.recipeUpdate = async (req, res, next) => {
  try {
    if (!req.user._id.equals(req.recipe.owner._id)) {
      next({ status: 401, message: "You are not the owner" });
    } else {
      if (req.file)
        req.body.image = `${req.protocol}://${req.get("host")}/${
          req.file.path
        }}`;

      const recipe = await Recipe.findByIdAndUpdate(
        { _id: req.recipe.id, owner: req.recipe.owner },
        req.body,
        { new: true, runValidators: true }
      );
      res.status(201).json(recipe);
    }
  } catch (error) {
    next(error);
  }
};
exports.ingredientCreate = async (req, res, next) => {
  try {
    const recipeId = req.params.recipeId;
    req.body = { ...req.body, recipe: recipeId };
    const newIngredient = await Ingredient.create(req.body);
    await Recipe.findOneAndUpdate(
      { _id: req.params.recipeId },
      { $push: { ingredients: newIngredient._id } }
    );
    return res.status(201).json(newIngredient);
  } catch (error) {
    next(error);
  }
};
