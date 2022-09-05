const router = require("express").Router();
const session = require("express-session");
const { User, Blog, Comment } = require("../models");
const withAuth = require("../utils/auth");

// Get main page and load all blogs
router.get("/", async (req, res) => {
  const blogData = await Blog.findAll({
    include: [{ model: User, attributes: ["id", "name"] }],
  });
  const userId = req.session.user_id;
  const blogs = blogData.map((blog) => blog.get({ plain: true }));
  console.log(blogs);
  res.render("homepage", { blogs, userId });
});

// Get login page/logout if already logged in
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy();
    res.redirect("/login");
    return;
  }
  res.render("login");
});

//Get specific blog page
router.get("/blog/:id", async (req, res) => {
  const blogData = await Blog.findByPk(req.params.id, {
    include: [{ model: User, attributes: ["id", "name"] }],
  });
  console.log(blogData.get({ plain: true }));
  let blog = blogData.get({ plain: true });

  res.render("blog", { blog });
});

//Go to user's dashboard, redirect to login if !logged_in
router.get("/dashboard/:id", withAuth, async (req, res) => {
  const userData = await User.findByPk(req.params.id, {
    attributes: { exclude: ["password"] },
    include: [
      {
        model: Blog,
        Comment,
        attributes: ["user_id", "title", "blog_data", "id"],
      },
    ],
  });
  const blogs = userData.blogs.map((user) => user.get({ plain: true }));
  const test = { blogs, logged_in: true };

  if (!userData) {
    console.log("No user");
    res.render("login", {
      logged_in: req.session.logged_in,
    });
  } else {
    res.render("dashboard", { userData, blogs });
  }
});

module.exports = router;
