const router = require('express').Router();
require('dotenv').config();
const { Calorie, Dates } = require('../../models')

router.post('/', async (req,res) => {
    try {
        console.log(req.body);
        var dateId;
        const currentDate = new Date();
        const dateDay = currentDate.getDate();
        const dateMonth = currentDate.getMonth() + 1;
        const dateYear = currentDate.getFullYear();
        // Finding if current date is already in database
        const testDate = await Dates.findOne({where: {
            day: dateDay,
            month: dateMonth,
            year: dateYear
        }
        })

        if (!testDate) {
            const addDate = await Dates.create({
                day: dateDay,
                month: dateMonth,
                year: dateYear
            })
            dateId = addDate.id;
        }

        else {
            dateId = testDate.id;
        }

        // console.log(req.body.thisFood);
        // console.log(req.body.thisAmount);
        // console.log(req.body.thisUnit);
        // console.log(req.body.thisCalorie);
        
        console.log(req.body);
        const userCalData = await Calorie.create({ 
            food_name: req.body.food_name,
            amount: req.body.amount,
            unit: req.body.unit,
            calories: req.body.calories,
            date_id: dateId
        });
        res.status(200).json(userCalData);
    }

    catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;