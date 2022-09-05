const router = require('express').Router();

const apiRoutes = require('./api/userRoutes');
const homeRoutes = require('./homeroutes');
const dashboardRoutes = require('./api/dashboardRoutes');
const commentRoutes = require('./api/commentRoutes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/api/dashboard', dashboardRoutes);
router.use('/api/comments', commentRoutes);

module.exports = router;