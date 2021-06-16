const router = require("express").Router();
const { createCategories, getCategories } = require("../controllers/categories");

router.post("/",createCategories);

router.get("/", getCategories);

module.exports = router;
