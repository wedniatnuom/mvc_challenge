const router = require('express').Router();
const homeRoutes = require('../homeRoutes');


// router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
// router.use('/blog', blogRoutes);


module.exports = router;