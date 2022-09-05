const router = require("express").Router();
const { User, Blog, Comment } = require("../models");
const withAuth = require("../utils/auth");

// router.get("/blog/:id", async (req, res) => {
//   const blogData = await Blog.findByPk(req.params.id, {
//     include: [{ model: User, attributes: ["name"] }],
//   });
//   console.log(blogData);
//   console.log("test");
//   const blogs = blogData.map((blog) => blog.get({ plain: true }));
//   res.render("blog", { blogs });
// });
