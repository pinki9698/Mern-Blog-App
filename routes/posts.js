const router = require("express").Router();
const { createPost, updatePost, deletePost, getPost, getAllPost } = require("../controllers/posts");

//CREATE POST
router.post("/", createPost);

//UPDATE POST
router.put("/:id",updatePost);

//DELETE POST
router.delete("/:id", deletePost);

//GET POST
router.get("/:id", getPost);

//GET ALL POSTS
router.get("/", getAllPost);

module.exports = router;
