const router = require("express").Router();
const session = require("express-session");
const { User, Blog, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// Create blogs
router.post("/", withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      title: req.body.title,
      blog_data: req.body.text,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete blogs
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!blogData) {
      res.status(404).json({ message: "No blog found with this id!" });
      return;
    }
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
