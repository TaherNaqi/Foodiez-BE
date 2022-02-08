const express = require("express");
const router = express.Router();

const { getCatagories, createCategory } = require("./controllers");

router.get("/", getCatagories);
router.post("/", createCategory);
module.exports = router;
