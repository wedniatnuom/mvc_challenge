const router = require('express').Router();
const {User, Blog, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    const blogData = await Blog.findAll({
        include: [
            {model: User,
            attributes: ['id', 'name'],
        },
        ],
    }
    );
    console.log(blogData);
    const blogs = blogData.map((blog) => blog.get({ plain: true}));
    res.render('homepage', { blogs });
  });

module.exports = router;