const express = require("express");
const router = express.Router();
const passport = require("passport");
const upload = require("../../middleware/multer");
const {
  fetchRecipe,
  recipeCreate,
  getRecipes,
  recipeUpdate,
} = require("./controller");
router.param("recipeId", async (req, res, next, recipeId) => {
  const foundRecipe = await fetchRecipe(recipeId, next);
  if (foundRecipe) {
    req.recipe = foundRecipe;
    next();
  } else next({ status: 404, message: "Recipe not found" });
});
router.get("/", getRecipes);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  recipeCreate
);
router.put(
  "/:recipeId",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  recipeUpdate
);

module.exports = router;
