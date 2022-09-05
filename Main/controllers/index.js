const router = require('express').Router();

const apiRoutes = require('./api/userRoutes');
const homeRoutes = require('./homeroutes');
const dashboardRoutes = require('./api/dashboardRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/api/dashboard', dashboardRoutes);

module.exports = router;