const router = require('express').Router();
const {User, Blog, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('homepage');
  });

// router.get('/', async (req, res) => {
//     try {
//         // const blogData = await Blog.findAll({
//         //     include: [
//         //         {model: User,
//         //         attributes: ['name'],
//         //     },
//         // ],
//         // });
//         // const blogs = blogData.map((blog) => blog.get({ plain: true}));

//         res.render('homepage'
//         , {
//             blogs,
//             // await test for logging in
//             // logged_in: req.session.logged_in
//         });
//     } catch (err) {
//         res.status(500).json("test of failure");
//     };
// });


module.exports = router;