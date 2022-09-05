const router = require('express').Router();

const apiRoutes = require('./api/userRoutes');
const homeRoutes = require('./homeroutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;