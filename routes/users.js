const router = require("express").Router();

const { updateUser, deleteUser, geteUser } = require("../controllers/users");

//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser);

//GET USER
router.get("/:id", geteUser);

module.exports = router;
