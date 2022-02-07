const express = require("express");
const router = express.Router();

const { CatagoryCreate, getCatagories } = require("./controllers");

router.get("/", getCatagories);
router.post("/", CatagoryCreate);

module.exports = router;
