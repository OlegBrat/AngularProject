const express = require("express");
const checkAuth = require("../middle-wares/check-auth");
const multerFile = require("../middle-wares/multer");

const postControler = require("../controllers/posts");

const router = express.Router();

router.post("", checkAuth, multerFile, postControler.createPost);
router.put("/:id", checkAuth, multerFile, postControler.editPost);

router.get("", postControler.getPosts);

router.get("/:id", postControler.getPost);
router.delete("/:id", checkAuth, postControler.deletePost);

module.exports = router;
