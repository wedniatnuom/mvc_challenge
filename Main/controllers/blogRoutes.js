const router = require('express').Router();
const {User, Blog, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/blog/:id', async (req, res) => {
    try {
      const blogData = await Blog.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['id', 'name'],
          },
        ],
      });
      console.log(blogData);
  
      const blog = blogData.get({ plain: true });
  
      res.render('blog');
    } catch (err) {
      res.status(500).json(err);
    }
  });