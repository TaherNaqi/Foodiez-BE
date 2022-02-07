const Recipe = require("../../models/Recipe");

exports.fetchRecipe = async (recipeId, next) => {
  try {
    const shop = await Recipe.findById(recipeId);
    return shop;
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
