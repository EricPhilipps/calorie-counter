const router = require('express').Router();
const userRoutes = require('./user-routes');
const calorieRoutes = require('./calorie-ninja-routes')

router.use('/users', userRoutes);
router.use('/calories', calorieRoutes);


module.exports = router;
