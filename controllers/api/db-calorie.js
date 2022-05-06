const router = require('express').Router();
require('dotenv').config();
const { Calorie, Date } = require('../../models')

router.post('/', async (req,res) => {
    try {
        // Finding if current date is already in database
        //const currentDate = await Date.findOne({where:CURRENTDATE})

        //if (!currentDate) {
        //     constAddDate = await Date.create({CURRENTDATE})
        // }

        const userCalData = await Calorie.create({ 
            food_name: req.body.thisFood,
            amount: req.body.thisAmount,
            unit: req.body.thisUnit,
            date_id: req.body.thisFood,
            food_name: req.body.thisFood,

        });
        res.status(200).json(userCalData);
        console.log('hello');
    }

    catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;