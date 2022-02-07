const express = require("express");
const router = express.Router();
const upload = require("../../middleware/multer");
const {
  fetchIngredients,
  ingredientCreate,
  getIngredients,
} = require("./controller");
router.get("/", getIngredients);
router.post("/", ingredientCreate);
module.exports = router;
