const router = require('express').Router();
const userRoutes = require('./user-routes');
const calorieRoutes = require('./calorie-ninja-routes');
// const dbCalorie = require('./db-calorie');

router.use('/users', userRoutes);
router.use('/calories', calorieRoutes);
// router.use('/dbcalorie', dbCalorie);


module.exports = router;
